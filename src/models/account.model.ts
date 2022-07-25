export enum Gender {
  Male = 'men',
  Female = 'women'
}

export interface PaymentMethod {
  card: string;
  bank: string;
  accountNumber: string;
  dateExpiry: string;
}

export interface Account {
  id: number;
  telephonyId: number;
  name: string;
  type: string;
  user: string;
  lastName: string;
  address: string;
  gender: Gender;
  paymentMethod: PaymentMethod;
}

export interface AccountUpdatePaymentMethodDto {
  paymentMethod: PaymentMethod;
}