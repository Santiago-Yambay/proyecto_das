export enum InvoiceStatus {
  Pendiente = 1,
  Pagado = 2
}

export interface Invoice {
  id: number;
  lineId: number;
  amount: number;
  paymentDate: string;
  status: InvoiceStatus;
}