import { FC } from "react";
import { FormattedMessage } from "react-intl";

import { AddOnCard } from "./add-on-card.component";
import { ResumeProduct } from "./products";
import { Signature } from "./signature.component";
import { Account } from "@models/account.model";
import { Line } from "@models/line.model";

type OrderConfirmationProps = {
  customer: Account;
  line: Line;
  onSigned: React.Dispatch<React.SetStateAction<boolean>>;
  onAcceptTermsConditions: (acepted: boolean) => void;
  termsConditionsAccepted: boolean;
};

export const OrderConfirmation: FC<OrderConfirmationProps> = ({
  customer,
  line,
  onSigned,
  onAcceptTermsConditions,
  termsConditionsAccepted,
}): JSX.Element => {
  return (
    <section className="box-border shadow-md rounded backdrop-blur-sm bg-white p-4">
      <div className="w-full h-full flex flex-col">
        <div className="text-xl my-2">
          <FormattedMessage id="label.order.confirmation" />
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2">
          <div>
            <h1 className="text-black my-2"><FormattedMessage id="label.customer.info" /></h1>

            <p>
              <strong>
                <FormattedMessage id="label.global.name" />:
              </strong>{" "}
              {customer.name}
            </p>

            <p>
              <strong>
                <FormattedMessage id="label.global.lastname" />:
              </strong>{" "}
              {customer.lastName}
            </p>
          </div>

          <div>
            <h1 className="text-black my-2"><FormattedMessage id="label.contact.info" /></h1>

            <p>
              <strong>
                <FormattedMessage id="label.contact.phone" />:
              </strong>{" "}
              {line.phone}
            </p>

            {/*}
          <p>
            <strong>
              <FormattedMessage id="label.contact.email" />:
            </strong>{" "}
            {props.customer.custEmail ? props.customer.custEmail.value : ""}
          </p>
  */}
          </div>

          <div>
            <h1 className="text-black my-2"><FormattedMessage id="label.contact.address" /></h1>

            <p>
              <strong>
                <FormattedMessage id="label.contact.address" />:
              </strong>{" "}
              {customer.address}
            </p>

            {/*}
          <p>
            <strong>
              <FormattedMessage id="label.contact.address" />:
            </strong>{" "}
            {props.customer.billAddress2.value}
          </p>

          <p>
            <strong>
              <FormattedMessage id="label.contact.state" />:
            </strong>{" "}
            {props.customer.billAddress3.value}
          </p>

          <p>
            <strong>
              <FormattedMessage id="label.contact.zipCode" />:
            </strong>{" "}
            {props.customer.billZip.value}
          </p>
*/}
          </div>
        </div>

        {/*
      <div className="flex flex-col py-4">
        <div className="flex">
          <h1 className="mr-2">Dashboard</h1>
          <button
            className="text-primary underline"
            onClick={() => props.goProducts()}
          >
            Edit products o packs
          </button>
        </div>
*/}

        {/*}
        {props.data.map((element: any, index: number) => {
          return (
            <div
              key={index}
              className="grid xl:grid-cols-12 lg:grid-cols-5 md:grid-cols-5 grid-cols-1 my-2 border rounded-lg px-1"
            >
              <div className="xl:col-span-3">
                <ResumeProduct aggreate={element} />
              </div>

              {props.hasAddOns(element.typeProduct, element.addOnsSelected) && (
                <div className="xl:col-span-1 text-center self-center">
                  <p className="text-7xl">+</p>
                </div>
              )}

              {element.addOnsSelected.map((addOn: any, index: number) => {
                console.log(addOn);

                if (addOn.typeProduct == element.typeProduct) {
                  return (
                    <AddOnCard key={index} data={addOn} showRadio={false} />
                  );
                }
              })}
            </div>
          );
        })}
      </div>
      */}

        <div>
          <h1 className="mr-2"><FormattedMessage id="label.add-customer.paymentMethod" /></h1>
          <div className="my-2">
            <p>
              {customer.paymentMethod.card} | {customer.paymentMethod.bank}
            </p>
            <p>{customer.paymentMethod.accountNumber}</p>
            <p>{customer.paymentMethod.dateExpiry}</p>
          </div>

          <img
            className="w-16 py-2"
            src="../../../assets/img/paymentOption1.png"
            alt=""
          />
        </div>
        <div className="mt-4">
          <Signature onSigned={onSigned} />
        </div>
        <div className="mt-4 pb-8">
          <input
            type="checkbox"
            onChange={() => onAcceptTermsConditions(!termsConditionsAccepted)}
          />
          <span className="ml-2"><FormattedMessage id="label.order.acceptTerms" /></span>
        </div>
      </div>
    </section>
  );
};
