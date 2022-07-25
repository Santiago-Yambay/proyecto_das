import { FunctionComponent } from "react";
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

import { Account } from "@models/account.model";
import { Line } from "@models/line.model";

type CustomerInfoProps = {
  account: Account;
  line: Line;
};

export const CustomerInfo: FunctionComponent<CustomerInfoProps> = ({
  account,
  line,
}): JSX.Element => {
  const randomNumber = Math.floor(Math.random() * (99 - 0 + 1)) + 0;
  const router = useHistory();
  const onAddNewHandler = () => {
    router.push('/customer/new-customer');
  }
  return (
    <div>
      <p className="mb-4">
        <strong>
          <FormattedMessage id="label.customer.info" />{" "}
        </strong>
      </p>

      <div className="grid grid-cols-2 md:grid-cols-1 md:gap-y-4 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-4 text-white p-4 rounded-lg shadow-lg amd__customer-info__card bg-primary">
        <div>
          <div className="flex items-center">
            <img
              className="mb-1 rounded-full h-16"
              src={`https://randomuser.me/api/portraits/${account.gender}/${randomNumber}.jpg`}
            />
            <h4 className="ml-3 font-semibold text-xl">{`${account.name} ${account.lastName}`}</h4>
          </div>
          <p>
            <strong>
              <FormattedMessage id="label.contact.address" />
            </strong>
          </p>
          <p>{account.address}</p>

          <div className="flex items-center">
            <button className="p-1 px-14 text-white rounded-full bg-gradient-to-r from-primary via-alternative to-secondary hover:bg-gradient-to-l hover:from-secondary hover:via-alternative hover:to-primary" 
              onClick={onAddNewHandler}
            >
              Agregar Usuario
            </button>
            <button className="p-1 px-14 text-white rounded-full bg-gradient-to-r from-primary via-alternative to-secondary hover:bg-gradient-to-l hover:from-secondary hover:via-alternative hover:to-primary">
              Eliminar Usuario
            </button>
            <button className="p-1 px-14 text-white rounded-full bg-gradient-to-r from-primary via-alternative to-secondary hover:bg-gradient-to-l hover:from-secondary hover:via-alternative hover:to-primary">
              Editar Perfil
            </button>
          </div>

        </div>

        <div className="text-sm justify-self-end">
          <p>
            <strong>
              <FormattedMessage id="label.contact.phone" />
            </strong>
          </p>
          <p className="text-xl">{line.phone}</p>
          <p className="mt-4">
            <strong>Tipo</strong>
          </p>
          <p className="text-4xl"> {account.type}</p>
        </div>
      </div>
    </div>
  );
};
