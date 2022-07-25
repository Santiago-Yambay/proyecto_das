import { Account } from "@models/account.model";

export const currentAccountSelector = (state: any): Account =>
  state.account.currentAccount;
