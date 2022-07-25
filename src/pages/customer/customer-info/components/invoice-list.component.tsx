import { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";

import { InvoiceComponent as InvoiceComponent } from "./invoice.component";
import { NotFoundData } from "@components/layout/no-found-data.component";
import { Invoice } from "@models/invoice.model";
import { PaymentMethod } from "@models/account.model";

type InvoiceListProps = {
  invoices: Invoice[];
  paymentMethod: PaymentMethod;
};

export const InvoiceList: FunctionComponent<InvoiceListProps> = ({
  invoices,
  paymentMethod,
}): JSX.Element => {
  if (Array.isArray(invoices) && invoices.length) {
    return (
      <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto">
        {invoices.map((invoice: any, index: number) => (
          <div key={index} className="mb-3">
            <InvoiceComponent invoice={invoice} paymentMethod={paymentMethod} />
          </div>
        ))}
      </div>
    );
  }

  return <NotFoundData><FormattedMessage id="label.bills.noHas" /></NotFoundData>;
};
