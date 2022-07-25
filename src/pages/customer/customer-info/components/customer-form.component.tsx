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
      <h2 className="mb-4">Nuevo usuario</h2>
      <form>
        <h3 className="mb-2">
          <FormattedMessage id="label.global.account" />
        </h3>
        <div className="grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
          <Input
            label="Nombre"
            type="text"
            register={register("name", { required: "Ingrese el nombre" })}
          >
            <ErrorMessage errors={errors} name="name" />
          </Input>
          <Input
            label="Apellido"
            type="text"
            register={register("lastName", {
              required: "Ingrese el apellido",
            })}
          >
            <ErrorMessage errors={errors} name="lastName" />
          </Input>
          <Input
            label="Usuario"
            type="text"
            register={register("user", {
              required: "Usario requerido",
            })}
          >
            <ErrorMessage errors={errors} name="user" />
          </Input>
          <Select
            label={<FormattedMessage id="Genero" />}
            items={genderItems}
            register={register("gender", {
              required: "Seleccione un genero",
            })}
          >
            <ErrorMessage errors={errors} name="gender" />
          </Select>
        </div>
        <h3 className="mt-4 mb-2">
          Contacto
        </h3>
        <div className="grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
          <Input
            label="Teléfono"
            type="text"
            register={register("phone", {
              required: "Número de teléfono requerido",
              pattern: { value: /^([0-9])*$/, message: 'No se aceptan caracteres' },
              minLength: { value: 10, message: 'Ingrese un número con 10 dígitos' }
            })}
          >
            <ErrorMessage errors={errors} name="phone" />
          </Input>
          <Input
            label="Cedula"
            type="text"
            register={register("accountNumber", {
              required: "Cedula",
              pattern: { value: /^([0-9])*$/, message: 'Solo se admiten números' },
              minLength: { value: 10 , message: 'Ingrese la cantidad de caracteres requeridos' }
            })}
          >
            <ErrorMessage errors={errors} name="accountNumber" />
          </Input>
          <Input
            label={<FormattedMessage id="label.contact.address" />}
            type="text"
            register={register("address", {
              required: "Dirección",
            })}
          >
            <ErrorMessage errors={errors} name="address" />
          </Input>
        </div>
        
        <div className="grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
          <Input
            label="Provincia"
            type="text"
            register={register("bank", { required: "Ingrese la provincia" })}
          >
            <ErrorMessage errors={errors} name="bank" />
          </Input>
          
        </div>
      </form>
    </div>
  );
};
