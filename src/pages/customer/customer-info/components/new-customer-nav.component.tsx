import { FC } from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "@components/button/button.component";

type NewCustomerNavPorps = {
  onSave: () => void;
  onBack: () => void;
};

export const NewCustomerNav: FC<NewCustomerNavPorps> = ({
  onSave,
  onBack,
}): JSX.Element => {
  return (
    <div className="flex justify-between">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 items-center">
        <button onClick={onBack}>
          <div className="flex items-center">
            <span className="icon-arrow-left mr-2"></span>
            <FormattedMessage id="label.action.back" />
          </div>
        </button>
      </div>

      <div>
        <Button classes="px-24" onClick={onSave}>
          <FormattedMessage id="label.action.save" />
        </Button>
      </div>
    </div>
  );
};
