import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { Input } from "@components/input/input.component";
import { Account } from "@models/account.model";

type AvailabilityAddressProps = {
  register: UseFormRegister<any>;
  errors?: any;
};

export const AvailabilityAddress: FC<AvailabilityAddressProps> = ({
  register,
  errors,
}): JSX.Element => (
  <div className="mt-4">
    <strong>
      Enter your address to check if we are available in yout area
    </strong>
    <div className="grid mt-3 sm:grid-cols-2 sm:gap-5">
      <Input
        label="Street"
        type="text"
        register={register("street", { required: "The street is required." })}
      >
        <ErrorMessage errors={errors} name="street" />
      </Input>
      <Input
        label="Street number"
        type="text"
        register={register("streetNumber", {
          required: "The street number is required.",
        })}
      >
        <ErrorMessage errors={errors} name="streetNumber" />
      </Input>
      <Input
        label="Street / province"
        type="text"
        register={register("state", { required: "The state is required." })}
      >
        <ErrorMessage errors={errors} name="state" />
      </Input>
      <Input
        label="City"
        type="text"
        register={register("city", { required: "The city is required" })}
      >
        <ErrorMessage errors={errors} name="city" />
      </Input>
      <Input
        label="Postal code"
        type="text"
        register={register("postCode", {
          required: "The post code is required",
        })}
      >
        <ErrorMessage errors={errors} name="postCode" />
      </Input>
    </div>
  </div>
);
