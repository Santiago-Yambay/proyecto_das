import { Account } from "@models/account.model";
import { Address } from "@models/address.model";
import { Line } from "@models/line.model";
import { Product } from "@models/product.model";
import { Subscription } from "@models/subscription.model";
import { LinesAction } from "./lines.action";

const setLines = (lines: Line[] | null) => ({
  type: LinesAction.SetLines,
  payload: lines,
});

const setAccounts = (accounts: Account[]) => ({
  type: LinesAction.SetAccounts,
  payload: accounts
});

const setCurrentLine = (line: Line) => ({
  type: LinesAction.SetCurrentLine,
  payload: line
});

const removeCurrentLine = () => ({
  type: LinesAction.RemoveCurrentLine
});

const setCurrentAccount = (account: Account) => ({
  type: LinesAction.SetCurrentAccount,
  payload: account
});

const removeCurrentAccount = () => ({
  type: LinesAction.RemoveCurrentAccount
});

const setProductToAdd = (product: Product) => ({
  type: LinesAction.SetProductToAdd,
  payload: product
});

const removeProductToAdd = () => ({
  type: LinesAction.RemoveProductToAdd
});

const setCurrentSubscription = (subscription: Subscription) => ({
  type: LinesAction.SetCurrentSubscription,
  payload: subscription
});

const removeCurrentSubscription = () => ({
  type: LinesAction.RemoveCurrentSubscription
});

const setSubscriptions = (subscriptions: Subscription[]) => ({
  type: LinesAction.SetSubscriptions,
  payload: subscriptions
});

const removeSubscriptions = () => ({
  type: LinesAction.RemoveSubscriptions
});

const setAddress = (address: Address | null) => ({
  type: LinesAction.SetAddress,
  payload: address
});

export default {
  setLines,
  setAccounts,
  setCurrentLine,
  removeCurrentLine,
  setCurrentAccount,
  removeCurrentAccount,
  setProductToAdd,
  removeProductToAdd,
  setCurrentSubscription,
  removeCurrentSubscription,
  setSubscriptions,
  removeSubscriptions,
  setAddress
};
