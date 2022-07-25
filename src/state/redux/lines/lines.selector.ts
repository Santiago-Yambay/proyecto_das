import { Account } from "@models/account.model";
import { Address } from "@models/address.model";
import { Line } from "@models/line.model";
import { Product } from "@models/product.model";
import { Subscription } from "@models/subscription.model";

export const linesSelector = (state: any): Line[] => state.lines.lines;

export const accountsSelector = (state: any): Account[] => state.lines.accounts;

export const currentLineSelector = (state: any): Line => state.lines.currentLine;

export const currentAccountSelector = (state: any): Account => state.lines.currentAccount;

export const productToAddSelector = (state: any): Product => state.lines.productToAdd;

export const currentSubscription = (state: any): Subscription => state.lines.currentSubscription;

export const subscriptionsSelector = (state: any): Subscription[] => state.lines.subscriptions;

export const addressSelector = (state: any): Address => state.lines.address;