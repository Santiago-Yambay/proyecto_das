import { FunctionComponent } from 'react';
import { InvoiceList } from './invoice-list.component';
import { Invoice } from "@models/invoice.model";
import { Account } from "@models/account.model";

type BillingProps = {
  invoices: Invoice[];
  account: Account;
}

export const Billing: FunctionComponent<BillingProps> = ({ invoices, account }) => {
  return (
    <div>
          <InvoiceList invoices={invoices} paymentMethod={account.paymentMethod} />
    </div>
  );
};
