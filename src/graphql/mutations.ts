/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createUserMoney = /* GraphQL */ `mutation CreateUserMoney(
  $input: CreateUserMoneyInput!
  $condition: ModelUserMoneyConditionInput
) {
  createUserMoney(input: $input, condition: $condition) {
    id
    currentmoney
    savemoney
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMoneyMutationVariables,
  APITypes.CreateUserMoneyMutation
>;
export const updateUserMoney = /* GraphQL */ `mutation UpdateUserMoney(
  $input: UpdateUserMoneyInput!
  $condition: ModelUserMoneyConditionInput
) {
  updateUserMoney(input: $input, condition: $condition) {
    id
    currentmoney
    savemoney
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMoneyMutationVariables,
  APITypes.UpdateUserMoneyMutation
>;
export const deleteUserMoney = /* GraphQL */ `mutation DeleteUserMoney(
  $input: DeleteUserMoneyInput!
  $condition: ModelUserMoneyConditionInput
) {
  deleteUserMoney(input: $input, condition: $condition) {
    id
    currentmoney
    savemoney
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMoneyMutationVariables,
  APITypes.DeleteUserMoneyMutation
>;
export const createMonthExpenses = /* GraphQL */ `mutation CreateMonthExpenses(
  $input: CreateMonthExpensesInput!
  $condition: ModelMonthExpensesConditionInput
) {
  createMonthExpenses(input: $input, condition: $condition) {
    id
    meid
    month
    totalamount
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMonthExpensesMutationVariables,
  APITypes.CreateMonthExpensesMutation
>;
export const updateMonthExpenses = /* GraphQL */ `mutation UpdateMonthExpenses(
  $input: UpdateMonthExpensesInput!
  $condition: ModelMonthExpensesConditionInput
) {
  updateMonthExpenses(input: $input, condition: $condition) {
    id
    meid
    month
    totalamount
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMonthExpensesMutationVariables,
  APITypes.UpdateMonthExpensesMutation
>;
export const deleteMonthExpenses = /* GraphQL */ `mutation DeleteMonthExpenses(
  $input: DeleteMonthExpensesInput!
  $condition: ModelMonthExpensesConditionInput
) {
  deleteMonthExpenses(input: $input, condition: $condition) {
    id
    meid
    month
    totalamount
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMonthExpensesMutationVariables,
  APITypes.DeleteMonthExpensesMutation
>;
export const createDateExpenses = /* GraphQL */ `mutation CreateDateExpenses(
  $input: CreateDateExpensesInput!
  $condition: ModelDateExpensesConditionInput
) {
  createDateExpenses(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDateExpensesMutationVariables,
  APITypes.CreateDateExpensesMutation
>;
export const updateDateExpenses = /* GraphQL */ `mutation UpdateDateExpenses(
  $input: UpdateDateExpensesInput!
  $condition: ModelDateExpensesConditionInput
) {
  updateDateExpenses(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDateExpensesMutationVariables,
  APITypes.UpdateDateExpensesMutation
>;
export const deleteDateExpenses = /* GraphQL */ `mutation DeleteDateExpenses(
  $input: DeleteDateExpensesInput!
  $condition: ModelDateExpensesConditionInput
) {
  deleteDateExpenses(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDateExpensesMutationVariables,
  APITypes.DeleteDateExpensesMutation
>;
