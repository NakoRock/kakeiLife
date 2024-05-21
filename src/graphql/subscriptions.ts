/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onCreateUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onUpdateUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onDeleteUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateUserMoney = /* GraphQL */ `subscription OnCreateUserMoney(
  $filter: ModelSubscriptionUserMoneyFilterInput
  $id: String
) {
  onCreateUserMoney(filter: $filter, id: $id) {
    id
    currentmoney
    savemoney
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserMoneySubscriptionVariables,
  APITypes.OnCreateUserMoneySubscription
>;
export const onUpdateUserMoney = /* GraphQL */ `subscription OnUpdateUserMoney(
  $filter: ModelSubscriptionUserMoneyFilterInput
  $id: String
) {
  onUpdateUserMoney(filter: $filter, id: $id) {
    id
    currentmoney
    savemoney
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserMoneySubscriptionVariables,
  APITypes.OnUpdateUserMoneySubscription
>;
export const onDeleteUserMoney = /* GraphQL */ `subscription OnDeleteUserMoney(
  $filter: ModelSubscriptionUserMoneyFilterInput
  $id: String
) {
  onDeleteUserMoney(filter: $filter, id: $id) {
    id
    currentmoney
    savemoney
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserMoneySubscriptionVariables,
  APITypes.OnDeleteUserMoneySubscription
>;
export const onCreateMonthExpenses = /* GraphQL */ `subscription OnCreateMonthExpenses(
  $filter: ModelSubscriptionMonthExpensesFilterInput
  $id: String
) {
  onCreateMonthExpenses(filter: $filter, id: $id) {
    id
    meid
    month
    fixedcosts {
      iid
      amount
      label
      isincome
      __typename
    }
    isstart
    isfinish
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMonthExpensesSubscriptionVariables,
  APITypes.OnCreateMonthExpensesSubscription
>;
export const onUpdateMonthExpenses = /* GraphQL */ `subscription OnUpdateMonthExpenses(
  $filter: ModelSubscriptionMonthExpensesFilterInput
  $id: String
) {
  onUpdateMonthExpenses(filter: $filter, id: $id) {
    id
    meid
    month
    fixedcosts {
      iid
      amount
      label
      isincome
      __typename
    }
    isstart
    isfinish
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMonthExpensesSubscriptionVariables,
  APITypes.OnUpdateMonthExpensesSubscription
>;
export const onDeleteMonthExpenses = /* GraphQL */ `subscription OnDeleteMonthExpenses(
  $filter: ModelSubscriptionMonthExpensesFilterInput
  $id: String
) {
  onDeleteMonthExpenses(filter: $filter, id: $id) {
    id
    meid
    month
    fixedcosts {
      iid
      amount
      label
      isincome
      __typename
    }
    isstart
    isfinish
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMonthExpensesSubscriptionVariables,
  APITypes.OnDeleteMonthExpensesSubscription
>;
export const onCreateDateExpenses = /* GraphQL */ `subscription OnCreateDateExpenses(
  $filter: ModelSubscriptionDateExpensesFilterInput
  $id: String
) {
  onCreateDateExpenses(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDateExpensesSubscriptionVariables,
  APITypes.OnCreateDateExpensesSubscription
>;
export const onUpdateDateExpenses = /* GraphQL */ `subscription OnUpdateDateExpenses(
  $filter: ModelSubscriptionDateExpensesFilterInput
  $id: String
) {
  onUpdateDateExpenses(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDateExpensesSubscriptionVariables,
  APITypes.OnUpdateDateExpensesSubscription
>;
export const onDeleteDateExpenses = /* GraphQL */ `subscription OnDeleteDateExpenses(
  $filter: ModelSubscriptionDateExpensesFilterInput
  $id: String
) {
  onDeleteDateExpenses(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDateExpensesSubscriptionVariables,
  APITypes.OnDeleteDateExpensesSubscription
>;
