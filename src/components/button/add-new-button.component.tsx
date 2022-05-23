import { FormattedMessage } from "react-intl";
import { Button } from "./button.component";

export const AddNewButton = () => {
  return (
    <div className="z-20 absolute hidden md:block md:col-span-2 lg:col-span-1">
      <Button classes="-mx-24 disabled">
        <div className="flex justify-between items-center">
          <span className="icon-home mr-8"></span>
          <span>
            + <FormattedMessage id="label.action.addNew" />
          </span>
        </div>
      </Button>
    </div>
  );
};
