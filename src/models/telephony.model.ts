export interface Discount {
  title: string;
  description: string;
  discount?: string;
}

export interface Promotion {
  flyer: string;
  mainDiscount: Discount;
  discounts: Discount[];
}

export interface Telephony {
  id: number;
  name: string;
  logo: string;
  locale: string;
  promotion?: Promotion;
}