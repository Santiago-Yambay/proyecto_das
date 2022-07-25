import { FunctionComponent, MouseEvent } from "react";
import { FormattedMessage } from "react-intl";

import { Button, ButtonType } from "@components/button/button.component";

type CaseEventsProps = {
  onOpenCase: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeNumber: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeSIM: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const CaseEvents: FunctionComponent<CaseEventsProps> = ({
  onOpenCase,
  onChangeNumber,
  onChangeSIM,
}) => (
  <div className="w-full h-full p-3 rounded-lg shadow-lg bg-white">
    <strong>
      <FormattedMessage id="label.events" />
    </strong>
    <div className="flex flex-col items-center mt-3">
      <Button
        classes="mb-3 w-full"
        type={ButtonType.Secondary}
        onClick={onOpenCase as (event?: MouseEvent<HTMLButtonElement>) => void}
      >
        <FormattedMessage id="label.events.openCase" />
      </Button>
      <Button
        classes="mb-3 w-full"
        type={ButtonType.Secondary}
        onClick={
          onChangeNumber as (event?: MouseEvent<HTMLButtonElement>) => void
        }
      >
        <FormattedMessage id="label.events.changeNumber" />
      </Button>
      <Button
        classes="mb-3 w-full"
        type={ButtonType.Secondary}
        onClick={onChangeSIM as (event?: MouseEvent<HTMLButtonElement>) => void}
      >
        <FormattedMessage id="label.events.changeSIM" />
      </Button>
    </div>
  </div>
);
