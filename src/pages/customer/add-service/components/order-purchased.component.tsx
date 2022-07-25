import { FormattedMessage } from "react-intl";
import { Button } from "@components/button/button.component";

export const OrderPurchased = (props: any): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="font-bold py-8 text-black">
        <FormattedMessage id="label.product.buySuccess" />
      </h1>

      <div className="rounded-full h-36 w-36 bg-green-400 flex justify-center items-center">
        <img
          className="w-20 h-20"
          src="../../../../assets/img/check.png"
          alt="check"
        />
      </div>

      <div className="flex justify-center">
        <Button classes="px-16 m-4" onClick={() => props.goHome()}>
          <span><FormattedMessage id="label.action.accept" /></span>
        </Button>
      </div>
    </div>
  );
};