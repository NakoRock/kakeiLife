/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username?: string | null,
  email?: string | null,
  sdate?: number | null,
  edate?: number | null,
  currentmoney?: number | null,
  savemoney?: number | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  sdate?: ModelIntInput | null,
  edate?: ModelIntInput | null,
  currentmoney?: ModelIntInput | null,
  savemoney?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  id?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  username?: string | null,
  email?: string | null,
  sdate?: number | null,
  edate?: number | null,
  currentmoney?: number | null,
  savemoney?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  sdate?: number | null,
  edate?: number | null,
  currentmoney?: number | null,
  savemoney?: number | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateUserMoneyInput = {
  id?: string | null,
  currentmoney?: number | null,
  savemoney?: number | null,
};

export type ModelUserMoneyConditionInput = {
  currentmoney?: ModelIntInput | null,
  savemoney?: ModelIntInput | null,
  and?: Array< ModelUserMoneyConditionInput | null > | null,
  or?: Array< ModelUserMoneyConditionInput | null > | null,
  not?: ModelUserMoneyConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  id?: ModelStringInput | null,
};

export type UserMoney = {
  __typename: "UserMoney",
  id: string,
  currentmoney?: number | null,
  savemoney?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserMoneyInput = {
  id: string,
  currentmoney?: number | null,
  savemoney?: number | null,
};

export type DeleteUserMoneyInput = {
  id: string,
};

export type CreateMonthExpensesInput = {
  id?: string | null,
  meid?: string | null,
  month?: string | null,
  totalspending: number,
  totalincome: number,
};

export type ModelMonthExpensesConditionInput = {
  meid?: ModelStringInput | null,
  month?: ModelStringInput | null,
  totalspending?: ModelIntInput | null,
  totalincome?: ModelIntInput | null,
  and?: Array< ModelMonthExpensesConditionInput | null > | null,
  or?: Array< ModelMonthExpensesConditionInput | null > | null,
  not?: ModelMonthExpensesConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  id?: ModelStringInput | null,
};

export type MonthExpenses = {
  __typename: "MonthExpenses",
  id: string,
  meid?: string | null,
  month?: string | null,
  totalspending: number,
  totalincome: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMonthExpensesInput = {
  id: string,
  meid?: string | null,
  month?: string | null,
  totalspending?: number | null,
  totalincome?: number | null,
};

export type DeleteMonthExpensesInput = {
  id: string,
};

export type CreateDateExpensesInput = {
  id?: string | null,
  deid: string,
  date: string,
  totalspending: number,
  totalincome: number,
  used: Array< UsedItemInput | null >,
};

export type UsedItemInput = {
  iid: string,
  amount: number,
  label?: string | null,
  isincome: boolean,
};

export type ModelDateExpensesConditionInput = {
  date?: ModelStringInput | null,
  totalspending?: ModelIntInput | null,
  totalincome?: ModelIntInput | null,
  and?: Array< ModelDateExpensesConditionInput | null > | null,
  or?: Array< ModelDateExpensesConditionInput | null > | null,
  not?: ModelDateExpensesConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  id?: ModelStringInput | null,
};

export type DateExpenses = {
  __typename: "DateExpenses",
  id: string,
  deid: string,
  date: string,
  totalspending: number,
  totalincome: number,
  used:  Array<UsedItem | null >,
  createdAt: string,
  updatedAt: string,
};

export type UsedItem = {
  __typename: "UsedItem",
  iid: string,
  amount: number,
  label?: string | null,
  isincome: boolean,
};

export type UpdateDateExpensesInput = {
  id: string,
  deid: string,
  date?: string | null,
  totalspending?: number | null,
  totalincome?: number | null,
  used?: Array< UsedItemInput | null > | null,
};

export type DeleteDateExpensesInput = {
  id: string,
  deid: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  sdate?: ModelIntInput | null,
  edate?: ModelIntInput | null,
  currentmoney?: ModelIntInput | null,
  savemoney?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelUserMoneyFilterInput = {
  id?: ModelIDInput | null,
  currentmoney?: ModelIntInput | null,
  savemoney?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserMoneyFilterInput | null > | null,
  or?: Array< ModelUserMoneyFilterInput | null > | null,
  not?: ModelUserMoneyFilterInput | null,
};

export type ModelUserMoneyConnection = {
  __typename: "ModelUserMoneyConnection",
  items:  Array<UserMoney | null >,
  nextToken?: string | null,
};

export type ModelMonthExpensesFilterInput = {
  id?: ModelIDInput | null,
  meid?: ModelStringInput | null,
  month?: ModelStringInput | null,
  totalspending?: ModelIntInput | null,
  totalincome?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMonthExpensesFilterInput | null > | null,
  or?: Array< ModelMonthExpensesFilterInput | null > | null,
  not?: ModelMonthExpensesFilterInput | null,
};

export type ModelMonthExpensesConnection = {
  __typename: "ModelMonthExpensesConnection",
  items:  Array<MonthExpenses | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelDateExpensesFilterInput = {
  id?: ModelIDInput | null,
  deid?: ModelStringInput | null,
  date?: ModelStringInput | null,
  totalspending?: ModelIntInput | null,
  totalincome?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDateExpensesFilterInput | null > | null,
  or?: Array< ModelDateExpensesFilterInput | null > | null,
  not?: ModelDateExpensesFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelDateExpensesConnection = {
  __typename: "ModelDateExpensesConnection",
  items:  Array<DateExpenses | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  sdate?: ModelSubscriptionIntInput | null,
  edate?: ModelSubscriptionIntInput | null,
  currentmoney?: ModelSubscriptionIntInput | null,
  savemoney?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  id?: ModelStringInput | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserMoneyFilterInput = {
  currentmoney?: ModelSubscriptionIntInput | null,
  savemoney?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserMoneyFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserMoneyFilterInput | null > | null,
  id?: ModelStringInput | null,
};

export type ModelSubscriptionMonthExpensesFilterInput = {
  meid?: ModelSubscriptionStringInput | null,
  month?: ModelSubscriptionStringInput | null,
  totalspending?: ModelSubscriptionIntInput | null,
  totalincome?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMonthExpensesFilterInput | null > | null,
  or?: Array< ModelSubscriptionMonthExpensesFilterInput | null > | null,
  id?: ModelStringInput | null,
};

export type ModelSubscriptionDateExpensesFilterInput = {
  deid?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  totalspending?: ModelSubscriptionIntInput | null,
  totalincome?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDateExpensesFilterInput | null > | null,
  or?: Array< ModelSubscriptionDateExpensesFilterInput | null > | null,
  id?: ModelStringInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    sdate?: number | null,
    edate?: number | null,
    currentmoney?: number | null,
    savemoney?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    sdate?: number | null,
    edate?: number | null,
    currentmoney?: number | null,
    savemoney?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    sdate?: number | null,
    edate?: number | null,
    currentmoney?: number | null,
    savemoney?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMoneyMutationVariables = {
  input: CreateUserMoneyInput,
  condition?: ModelUserMoneyConditionInput | null,
};

export type CreateUserMoneyMutation = {
  createUserMoney?:  {
    __typename: "UserMoney",
    id: string,
    currentmoney?: number | null,
    savemoney?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMoneyMutationVariables = {
  input: UpdateUserMoneyInput,
  condition?: ModelUserMoneyConditionInput | null,
};

export type UpdateUserMoneyMutation = {
  updateUserMoney?:  {
    __typename: "UserMoney",
    id: string,
    currentmoney?: number | null,
    savemoney?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMoneyMutationVariables = {
  input: DeleteUserMoneyInput,
  condition?: ModelUserMoneyConditionInput | null,
};

export type DeleteUserMoneyMutation = {
  deleteUserMoney?:  {
    __typename: "UserMoney",
    id: string,
    currentmoney?: number | null,
    savemoney?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMonthExpensesMutationVariables = {
  input: CreateMonthExpensesInput,
  condition?: ModelMonthExpensesConditionInput | null,
};

export type CreateMonthExpensesMutation = {
  createMonthExpenses?:  {
    __typename: "MonthExpenses",
    id: string,
    meid?: string | null,
    month?: string | null,
    totalspending: number,
    totalincome: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMonthExpensesMutationVariables = {
  input: UpdateMonthExpensesInput,
  condition?: ModelMonthExpensesConditionInput | null,
};

export type UpdateMonthExpensesMutation = {
  updateMonthExpenses?:  {
    __typename: "MonthExpenses",
    id: string,
    meid?: string | null,
    month?: string | null,
    totalspending: number,
    totalincome: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMonthExpensesMutationVariables = {
  input: DeleteMonthExpensesInput,
  condition?: ModelMonthExpensesConditionInput | null,
};

export type DeleteMonthExpensesMutation = {
  deleteMonthExpenses?:  {
    __typename: "MonthExpenses",
    id: string,
    meid?: string | null,
    month?: string | null,
    totalspending: number,
    totalincome: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDateExpensesMutationVariables = {
  input: CreateDateExpensesInput,
  condition?: ModelDateExpensesConditionInput | null,
};

export type CreateDateExpensesMutation = {
  createDateExpenses?:  {
    __typename: "DateExpenses",
    id: string,
    deid: string,
    date: string,
    totalspending: number,
    totalincome: number,
    used:  Array< {
      __typename: "UsedItem",
      iid: string,
      amount: number,
      label?: string | null,
      isincome: boolean,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDateExpensesMutationVariables = {
  input: UpdateDateExpensesInput,
  condition?: ModelDateExpensesConditionInput | null,
};

export type UpdateDateExpensesMutation = {
  updateDateExpenses?:  {
    __typename: "DateExpenses",
    id: string,
    deid: string,
    date: string,
    totalspending: number,
    totalincome: number,
    used:  Array< {
      __typename: "UsedItem",
      iid: string,
      amount: number,
      label?: string | null,
      isincome: boolean,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDateExpensesMutationVariables = {
  input: DeleteDateExpensesInput,
  condition?: ModelDateExpensesConditionInput | null,
};

export type DeleteDateExpensesMutation = {
  deleteDateExpenses?:  {
    __typename: "DateExpenses",
    id: string,
    deid: string,
    date: string,
    totalspending: number,
    totalincome: number,
    used:  Array< {
      __typename: "UsedItem",
      iid: string,
      amount: number,
      label?: string | null,
      isincome: boolean,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetDateExpensesByDeidQueryVariables = {
  id: string,
  deid?: string | null,
};

export type GetDateExpensesByDeidQuery = {
  getDateExpensesByDeid?:  {
    __typename: "DateExpenses",
    id: string,
    deid: string,
    date: string,
    totalspending: number,
    totalincome: number,
    used:  Array< {
      __typename: "UsedItem",
      iid: string,
      amount: number,
      label?: string | null,
      isincome: boolean,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    sdate?: number | null,
    edate?: number | null,
    currentmoney?: number | null,
    savemoney?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username?: string | null,
      email?: string | null,
      sdate?: number | null,
      edate?: number | null,
      currentmoney?: number | null,
      savemoney?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserMoneyQueryVariables = {
  id: string,
};

export type GetUserMoneyQuery = {
  getUserMoney?:  {
    __typename: "UserMoney",
    id: string,
    currentmoney?: number | null,
    savemoney?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserMoniesQueryVariables = {
  filter?: ModelUserMoneyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserMoniesQuery = {
  listUserMonies?:  {
    __typename: "ModelUserMoneyConnection",
    items:  Array< {
      __typename: "UserMoney",
      id: string,
      currentmoney?: number | null,
      savemoney?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMonthExpensesQueryVariables = {
  id: string,
};

export type GetMonthExpensesQuery = {
  getMonthExpenses?:  {
    __typename: "MonthExpenses",
    id: string,
    meid?: string | null,
    month?: string | null,
    totalspending: number,
    totalincome: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMonthExpensesQueryVariables = {
  filter?: ModelMonthExpensesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMonthExpensesQuery = {
  listMonthExpenses?:  {
    __typename: "ModelMonthExpensesConnection",
    items:  Array< {
      __typename: "MonthExpenses",
      id: string,
      meid?: string | null,
      month?: string | null,
      totalspending: number,
      totalincome: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDateExpensesQueryVariables = {
  id: string,
  deid: string,
};

export type GetDateExpensesQuery = {
  getDateExpenses?:  {
    __typename: "DateExpenses",
    id: string,
    deid: string,
    date: string,
    totalspending: number,
    totalincome: number,
    used:  Array< {
      __typename: "UsedItem",
      iid: string,
      amount: number,
      label?: string | null,
      isincome: boolean,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDateExpensesQueryVariables = {
  id?: string | null,
  deid?: ModelStringKeyConditionInput | null,
  filter?: ModelDateExpensesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListDateExpensesQuery = {
  listDateExpenses?:  {
    __typename: "ModelDateExpensesConnection",
    items:  Array< {
      __typename: "DateExpenses",
      id: string,
      deid: string,
      date: string,
      totalspending: number,
      totalincome: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    sdate?: number | null,
    edate?: number | null,
    currentmoney?: number | null,
    savemoney?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    sdate?: number | null,
    edate?: number | null,
    currentmoney?: number | null,
    savemoney?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    sdate?: number | null,
    edate?: number | null,
    currentmoney?: number | null,
    savemoney?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserMoneySubscriptionVariables = {
  filter?: ModelSubscriptionUserMoneyFilterInput | null,
  id?: string | null,
};

export type OnCreateUserMoneySubscription = {
  onCreateUserMoney?:  {
    __typename: "UserMoney",
    id: string,
    currentmoney?: number | null,
    savemoney?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserMoneySubscriptionVariables = {
  filter?: ModelSubscriptionUserMoneyFilterInput | null,
  id?: string | null,
};

export type OnUpdateUserMoneySubscription = {
  onUpdateUserMoney?:  {
    __typename: "UserMoney",
    id: string,
    currentmoney?: number | null,
    savemoney?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserMoneySubscriptionVariables = {
  filter?: ModelSubscriptionUserMoneyFilterInput | null,
  id?: string | null,
};

export type OnDeleteUserMoneySubscription = {
  onDeleteUserMoney?:  {
    __typename: "UserMoney",
    id: string,
    currentmoney?: number | null,
    savemoney?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMonthExpensesSubscriptionVariables = {
  filter?: ModelSubscriptionMonthExpensesFilterInput | null,
  id?: string | null,
};

export type OnCreateMonthExpensesSubscription = {
  onCreateMonthExpenses?:  {
    __typename: "MonthExpenses",
    id: string,
    meid?: string | null,
    month?: string | null,
    totalspending: number,
    totalincome: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMonthExpensesSubscriptionVariables = {
  filter?: ModelSubscriptionMonthExpensesFilterInput | null,
  id?: string | null,
};

export type OnUpdateMonthExpensesSubscription = {
  onUpdateMonthExpenses?:  {
    __typename: "MonthExpenses",
    id: string,
    meid?: string | null,
    month?: string | null,
    totalspending: number,
    totalincome: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMonthExpensesSubscriptionVariables = {
  filter?: ModelSubscriptionMonthExpensesFilterInput | null,
  id?: string | null,
};

export type OnDeleteMonthExpensesSubscription = {
  onDeleteMonthExpenses?:  {
    __typename: "MonthExpenses",
    id: string,
    meid?: string | null,
    month?: string | null,
    totalspending: number,
    totalincome: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDateExpensesSubscriptionVariables = {
  filter?: ModelSubscriptionDateExpensesFilterInput | null,
  id?: string | null,
};

export type OnCreateDateExpensesSubscription = {
  onCreateDateExpenses?:  {
    __typename: "DateExpenses",
    id: string,
    deid: string,
    date: string,
    totalspending: number,
    totalincome: number,
    used:  Array< {
      __typename: "UsedItem",
      iid: string,
      amount: number,
      label?: string | null,
      isincome: boolean,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDateExpensesSubscriptionVariables = {
  filter?: ModelSubscriptionDateExpensesFilterInput | null,
  id?: string | null,
};

export type OnUpdateDateExpensesSubscription = {
  onUpdateDateExpenses?:  {
    __typename: "DateExpenses",
    id: string,
    deid: string,
    date: string,
    totalspending: number,
    totalincome: number,
    used:  Array< {
      __typename: "UsedItem",
      iid: string,
      amount: number,
      label?: string | null,
      isincome: boolean,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDateExpensesSubscriptionVariables = {
  filter?: ModelSubscriptionDateExpensesFilterInput | null,
  id?: string | null,
};

export type OnDeleteDateExpensesSubscription = {
  onDeleteDateExpenses?:  {
    __typename: "DateExpenses",
    id: string,
    deid: string,
    date: string,
    totalspending: number,
    totalincome: number,
    used:  Array< {
      __typename: "UsedItem",
      iid: string,
      amount: number,
      label?: string | null,
      isincome: boolean,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};
