import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { Gender } from "@models/account.model";
import { Input } from "@components/input/input.component";
import { Select, SelectItem } from "@components/input/select.component";

type CustomerFormProps = {
  register: UseFormRegister<any>;
  errors?: any;
};

export const CustomerForm: FC<CustomerFormProps> = ({
  register,
  errors,
}): JSX.Element => {
  const genderItems: SelectItem[] = Object.keys(Gender).map((label) => {
    return {
      label,
      value: Gender[label as keyof typeof Gender],
    };
  });

  const cardItems: SelectItem[] = [
    { label: "Visa", value: "visa" },
    { label: "Mastercard", value: "mastercard" },
  ];

  return (
    <div>
      <h2 className="mb-4">New Customer</h2>
      <form>
        <h3 className="mb-2">
          <FormattedMessage id="label.global.account" />
        </h3>
        <div className="grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
          <Input
            label={<FormattedMessage id="label.global.name" />}
            type="text"
            register={register("name", { required: "The name is required." })}
          >
            <ErrorMessage errors={errors} name="name" />
          </Input>
          <Input
            label={<FormattedMessage id="label.global.lastname" />}
            type="text"
            register={register("lastName", {
              required: "The last name is required.",
            })}
          >
            <ErrorMessage errors={errors} name="lastName" />
          </Input>
          <Input
            label={<FormattedMessage id="label.global.user" />}
            type="text"
            register={register("user", {
              required: "The account name is required.",
            })}
          >
            <ErrorMessage errors={errors} name="user" />
          </Input>
          <Select
            label={<FormattedMessage id="label.global.gender" />}
            items={genderItems}
            register={register("gender", {
              required: "The gender is required.",
            })}
          >
            <ErrorMessage errors={errors} name="gender" />
          </Select>
        </div>
        <h3 className="mt-4 mb-2">
          <FormattedMessage id="label.contact" />
        </h3>
        <div className="grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
          <Input
            label={<FormattedMessage id="label.contact.phone" />}
            type="text"
            register={register("phone", {
              required: "The phone number is required.",
              pattern: { value: /^([0-9])*$/, message: 'The phone number should only contain numbers' },
              minLength: { value: 10, message: 'The phone number must have at least 10 digits' }
            })}
          >
            <ErrorMessage errors={errors} name="phone" />
          </Input>
          <Input
            label={<FormattedMessage id="label.contact.address" />}
            type="text"
            register={register("address", {
              required: "The address is required.",
            })}
          >
            <ErrorMessage errors={errors} name="address" />
          </Input>
        </div>
        <h3 className="mt-4 mb-2">
          <FormattedMessage id="label.add-customer.paymentMethod" />
        </h3>
        <div className="grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
          <Select
            label={<FormattedMessage id="label.payment.card" />}
            items={cardItems}
            register={register("card", {
              required: "The card is required.",
            })}
          >
            <ErrorMessage errors={errors} name="card" />
          </Select>
          <Input
            label={<FormattedMessage id="label.payment.bank" />}
            type="text"
            register={register("bank", { required: "The bank is required." })}
          >
            <ErrorMessage errors={errors} name="bank" />
          </Input>
          <Input
            label={<FormattedMessage id="label.payment.accountNumber" />}
            type="text"
            register={register("accountNumber", {
              required: "The account number is required.",
              pattern: { value: /^([0-9])*$/, message: 'The accound number should only contain numbers' },
              minLength: { value: 16 , message: 'The account number must have at least 16 digits' }
            })}
          >
            <ErrorMessage errors={errors} name="accountNumber" />
          </Input>
          <Input
            label={<FormattedMessage id="label.payment.dateExpiry" />}
            type="text"
            register={register("dateExpiry", {
              required: "The expiry date is required.",
            })}
          >
            <ErrorMessage errors={errors} name="dateExpiry" />
          </Input>
        </div>
      </form>
    </div>
  );
};
