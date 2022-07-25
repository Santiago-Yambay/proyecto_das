import { Action } from 'redux';

import { Address } from '@models/address.model';
import { Line } from '@models/line.model';
import { Product } from '@models/product.model';
import { Account } from '@models/account.model';
import { Subscription } from '@models/subscription.model';

export interface LinesState {
  lines: Line[] | null;
  accounts: Account[];
  currentLine: Line | null;
  currentAccount: Account | null;
  productToAdd: Product | null;
  currentSubscription: Subscription | null;
  subscriptions: Subscription[];
  address: Address | null;
}

export interface LinesDispatchAction extends Action {
  payload: Partial<LinesState>;
}