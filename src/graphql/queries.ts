/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    sdate
    edate
    currentmoney
    savemoney
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      sdate
      edate
      currentmoney
      savemoney
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getUserMoney = /* GraphQL */ `query GetUserMoney($id: ID!) {
  getUserMoney(id: $id) {
    id
    currentmoney
    savemoney
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserMoneyQueryVariables,
  APITypes.GetUserMoneyQuery
>;
export const listUserMonies = /* GraphQL */ `query ListUserMonies(
  $filter: ModelUserMoneyFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserMonies(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      currentmoney
      savemoney
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserMoniesQueryVariables,
  APITypes.ListUserMoniesQuery
>;
export const getMonthExpenses = /* GraphQL */ `query GetMonthExpenses($id: ID!) {
  getMonthExpenses(id: $id) {
    id
    meid
    month
    totalamount
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMonthExpensesQueryVariables,
  APITypes.GetMonthExpensesQuery
>;
export const listMonthExpenses = /* GraphQL */ `query ListMonthExpenses(
  $filter: ModelMonthExpensesFilterInput
  $limit: Int
  $nextToken: String
) {
  listMonthExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      meid
      month
      totalamount
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMonthExpensesQueryVariables,
  APITypes.ListMonthExpensesQuery
>;
export const getDateExpenses = /* GraphQL */ `query GetDateExpenses($id: ID!) {
  getDateExpenses(id: $id) {
    id
    deid
    date
    totalamount
    used {
      id
      iid
      amount
      label
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDateExpensesQueryVariables,
  APITypes.GetDateExpensesQuery
>;
export const listDateExpenses = /* GraphQL */ `query ListDateExpenses(
  $filter: ModelDateExpensesFilterInput
  $limit: Int
  $nextToken: String
) {
  listDateExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      deid
      date
      totalamount
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDateExpensesQueryVariables,
  APITypes.ListDateExpensesQuery
>;
