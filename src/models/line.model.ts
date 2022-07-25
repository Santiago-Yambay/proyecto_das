import { Subscription } from './subscription.model';

export interface Line {
  id: number;
  telephonyId: number;
  phone: string;
  balance: number;
  subscriptions: Subscription[];
  user: string;
  accountId: number;
}

export interface LineFilterDto {
  telephonyId: number;
  user?: string;
  phone?: string;
}

export interface LineUpdateProductsDto {
  products: number[];
}

export interface LineUpdateBalanceDto {
  balance: number;
}