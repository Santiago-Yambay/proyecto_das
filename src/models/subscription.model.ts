export enum RenewalType {
  Once = 1,
  Recurrent = 2
}

export interface Subscription {
  productId: number;
  availableData: number;
  remainingDays: number;
  renewalType: RenewalType;
  activated: boolean;
}