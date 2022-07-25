export interface CustomerFilters {
  accountExternalId: string;
  billFname: string;
  billLname: string;
  contact1Phone: string;
}

export interface TempOrder {
  orderId: number;
  orderNumber: number;
  orderStatusId: number;
  createDt: string;
}

export interface CustomerState {
  customers: any;
  currentCustomer: any;
  searchType: string;
  doSearch: boolean;
  selectedSubscribe: any;
  filters: CustomerFilters;
  tempOrders: TempOrder[];
}