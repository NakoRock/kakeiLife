/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["kakeiLifeSkey"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_KAKEILIFE_GRAPHQLAPIIDOUTPUT
	API_KAKEILIFE_GRAPHQLAPIENDPOINTOUTPUT
	API_KAKEILIFE_GRAPHQLAPIKEYOUTPUT
	AUTH_KAKEILIFE8CDB1022_USERPOOLID
	API_ENDPOINT
Amplify Params - DO NOT EDIT */

require('isomorphic-fetch')
const gql = require('graphql-tag')
const AWS = require('aws-sdk') //AWS-SDKの読込します
const AWSAppSyncClient = require('aws-appsync').default
const { AUTH_TYPE } = require('aws-appsync')

exports.handler = async (event) => {
  // 環境変数からGraphQLエンドポイントとAPIキーを取得
  const graphqlEndpoint = process.env.API_KAKEILIFE_GRAPHQLAPIENDPOINTOUTPUT
  const region = process.env.REGION
  // GraphQLミューテーションの定義
  const mutation = gql(`
    mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
            id
            username
            email
            sdate
            edate
            currentmoney
            savemoney
        }
    }`)
  const id = event.request.userAttributes.sub
  const email = event.request.userAttributes.email
  const client = new AWSAppSyncClient({
    url: graphqlEndpoint,
    region: region,
    auth: {
      type: AUTH_TYPE.AWS_IAM,
      credentials: () => AWS.config.credentials,
    },
    disableOffline: true,
  })
  try {
    const result = await client.mutate({
      variables: {
        input: {
          id,
          username: 'exampleUser',
          email,
          sdate: 0,
          edate: 0,
          currentmoney: 0,
          savemoney: 0,
        },
      },
      mutation,
    })
    console.log(JSON.stringify(result))
    return event
  } catch (err) {
    return err
  }
}
