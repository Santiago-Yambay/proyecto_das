import { FunctionComponent, ReactElement } from "react";
import { FormattedMessage } from "react-intl";

import { Invoice, InvoiceStatus } from "@models/invoice.model";
import { PaymentMethod } from "@models/account.model";

type InvoiceProps = {
  invoice: Invoice;
  paymentMethod: PaymentMethod;
};

export const InvoiceComponent: FunctionComponent<InvoiceProps> = ({
  invoice,
  paymentMethod,
}) => {
  const getStatus = (status: number): ReactElement | "" => {
    switch (status) {
      case InvoiceStatus.Pagado:
        return <FormattedMessage id="label.invoice.paidOut" />;
      case InvoiceStatus.Pendiente:
        return <FormattedMessage id="label.invoice.outstanding" />;
    }
    return "";
  };

  return (
    <div className="text-sm">
      <strong>${invoice.amount}</strong>
      <p>
        <FormattedMessage id="label.payment.paymentDate" />{" "}
        {invoice.paymentDate} | {paymentMethod.card} - {paymentMethod.bank} |{" "}
        <strong className="text-secondary">
        <FormattedMessage id="label.status" /> {getStatus(invoice.status)}
        </strong>{" "}
      </p>
    </div>
  );
};
