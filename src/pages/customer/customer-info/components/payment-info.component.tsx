import { FunctionComponent, MouseEvent } from "react";
import { FormattedMessage } from "react-intl";

import { Account } from "@models/account.model";
import { FormatUtil } from '@utils/format.util';

type PaymentInfoProps = {
  account: Account;
  onDetailAndEdit: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export const PaymentInfo: FunctionComponent<PaymentInfoProps> = ({
  account,
  onDetailAndEdit,
}) => {
  const getMaskAccountNumber = (): string => {
    if (!account.paymentMethod) {
      return '';
    }
    const { accountNumber } = account.paymentMethod;
    return FormatUtil.cardMask(accountNumber);
  }

  return (
    <div className="w-full h-full flex flex-col justify-between lg:pr-3">
      <div>
        <div className="mb-2">
          <h3>
            {account.name} {account.lastName}
          </h3>
          <p>
            <span className="capitalize">{account.paymentMethod.card}</span> |{" "}
            <span className="capitalize">{account.paymentMethod.bank}</span>
          </p>
          <p>{getMaskAccountNumber()}</p>
          <p>{account.paymentMethod.dateExpiry}</p>
        </div>

        <img
          className="w-16 py-2"
          src="../../../assets/img/paymentOption1.png"
          alt=""
        />
      </div>

      <div className="flex justify-end">
        <a
          className="underline text-xs text-primary"
          href="#"
          onClick={onDetailAndEdit}
        >
          <FormattedMessage id="label.action.editOrAdd" />
        </a>
      </div>
    </div>
  );
};
