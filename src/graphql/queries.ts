/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDateExpensesByDeid = /* GraphQL */ `query GetDateExpensesByDeid($id: ID!, $deid: String) {
  getDateExpensesByDeid(id: $id, deid: $deid) {
    id
    deid
    date
    totalspending
    totalincome
    used {
      iid
      amount
      label
      isincome
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDateExpensesByDeidQueryVariables,
  APITypes.GetDateExpensesByDeidQuery
>;
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
    totalspending
    totalincome
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
      totalspending
      totalincome
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
export const getDateExpenses = /* GraphQL */ `query GetDateExpenses($id: ID!, $deid: String!) {
  getDateExpenses(id: $id, deid: $deid) {
    id
    deid
    date
    totalspending
    totalincome
    used {
      iid
      amount
      label
      isincome
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
  $id: ID
  $deid: ModelStringKeyConditionInput
  $filter: ModelDateExpensesFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listDateExpenses(
    id: $id
    deid: $deid
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      deid
      date
      totalspending
      totalincome
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
