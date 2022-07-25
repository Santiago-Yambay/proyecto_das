import { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";

import { Account } from "@models/account.model";
import { Line } from "@models/line.model";
import { FormatUtil } from '@utils/format.util';

type PaymentProps = {
  account: Account;
  line: Line;
  onAddPaymentMethod: () => void;
};

export const Payment: FunctionComponent<PaymentProps> = ({
  account,
  line,
  onAddPaymentMethod,
}): JSX.Element => {

  const getMaskAccountNumber = (): string => {
    if (!account.paymentMethod) {
      return '';
    }
    const { accountNumber } = account.paymentMethod;
    return FormatUtil.cardMask(accountNumber);
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
        <h1 className="font-bold text-black mb-4">
          <FormattedMessage id="label.payment.detail" />
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {account.paymentMethod && (
            <div className="max-w-sm">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  className="w-6 h-6"
                  defaultChecked
                />{" "}
                <span className="ml-2"><FormattedMessage id="label.payment.existingMethod" /></span>
              </div>
              <div className="my-2">
                <h3>{`${account.name} ${account.lastName}`}</h3>
              </div>

              <div className="my-2">
                <p>
                  {account.paymentMethod.card} | {account.paymentMethod.bank}
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
          )}

          <div className="max-w-sm">
            <div className="flex items-center">
              <input type="radio" name="payment" className="w-6 h-6" />{" "}
              <span className="ml-2"><FormattedMessage id="label.payment.masterBalance" /></span>
            </div>
            <div className="my-2">
              <h3>{`${account.name} ${account.lastName}`}</h3>
            </div>

            <div className="my-2">
              <p>{line.phone}</p>
              <p>${line.balance}</p>
            </div>
          </div>

          <div className="max-w-sm">
            <button
              className="border border-black rounded-lg p-8 text-center"
              onClick={onAddPaymentMethod}
            >
              <p className="text-7xl mx-3">+</p>
              <p><FormattedMessage id="label.payment.addMethod" /></p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
