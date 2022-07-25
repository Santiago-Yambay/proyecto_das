import { FormattedMessage } from "react-intl";

import { Button } from "@components/button/button.component";
import { ProgressBar } from "./progress-bar.component";
import { AddNewButton } from "@components/button/add-new-button.component";
import { useSelector } from "react-redux";
import { productsSelectedTotalAmount } from "@state/redux/add-service/add-service.selector";

export const ProcessNav = (props: any) => {
  let amount = useSelector(productsSelectedTotalAmount);
  amount = (Math.round(amount * 100) / 100).toFixed(2);

  if (props.process == "product-selection") {
    return (
      <>
        <AddNewButton />

        <div className="grid items-center xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 md:ml-20 gap-4">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 items-center">
            <button onClick={() => props.goBack()}>
              <div className="flex items-center">
                <span className="icon-arrow-left mr-2"></span>
                <FormattedMessage id="label.add-customer.productSelection" />
              </div>
            </button>

            <div>
              <ProgressBar stepsNumber="5" actualStep="1" />
            </div>
          </div>

          <div>
            <Button classes="px-24" onClick={() => props.goAddOn()}>
              <span>
                <FormattedMessage id="label.add-customer.next" />
              </span>
            </Button>
          </div>

          <p>Total order amount: ${amount}</p>
        </div>
      </>
    );
  } else if (props.process == "add-on") {
    return (
      <>
        <AddNewButton />

        <div className="grid items-center xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 md:ml-20 gap-4">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 items-center">
            <button onClick={() => props.goBack()}>
              <div className="flex items-center">
                <span className="icon-arrow-left mr-2"></span>
                <FormattedMessage id="label.add-customer.addOn" />
              </div>
            </button>
            <div>
              <ProgressBar stepsNumber="5" actualStep="2" />
            </div>
          </div>

          <div>
            <Button classes="px-24" onClick={() => props.goOrderConfirmation()}>
              <span>
                <FormattedMessage id="label.add-customer.next" />
              </span>
            </Button>
          </div>

          <p>Total order amount: ${amount}</p>
        </div>
      </>
    );
  } else if (props.process == "order-confirmation") {
    return (
      <>
        <AddNewButton />

        <div className="grid items-center xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 md:ml-20 gap-4">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 items-center">
            <button onClick={() => props.goBack()}>
              <div className="flex items-center">
                <span className="icon-arrow-left mr-2"></span>
                <FormattedMessage id="label.add-customer.orderConfirmation" />
              </div>
            </button>

            <div>
              <ProgressBar stepsNumber="5" actualStep="3" />
            </div>
          </div>

          <div>
            <Button
              classes="px-24 mr-12"
              onClick={() => props.goInstallationSchedule()}
            >
              <span>
                <FormattedMessage id="label.add-customer.next" />
              </span>
            </Button>
          </div>

          <p>Total order amount: ${amount}</p>
        </div>
      </>
    );
  } else if (props.process == "installation-schedule") {
    return (
      <>
        <AddNewButton />

        <div className="grid items-center xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 md:ml-20 gap-4">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 items-center">
            <button onClick={() => props.goBack()}>
              <div className="flex items-center">
                <span className="icon-arrow-left mr-2"></span>
                <FormattedMessage id="label.add-customer.installationSchedule" />
              </div>
            </button>

            <div>
              <ProgressBar stepsNumber="5" actualStep="4" />
            </div>
          </div>

          <div>
            <Button classes="px-24 mr-12" onClick={() => props.goPayment()}>
              <span>
                <FormattedMessage id="label.add-customer.next" />
              </span>
            </Button>
          </div>

          <p>Total order amount: ${amount}</p>
        </div>
      </>
    );
  } else if (props.process == "payment") {
    return (
      <>
        <AddNewButton />

        <div className="grid items-center xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 md:ml-20 gap-4">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 items-center">
            <button onClick={() => props.goBack()}>
              <div className="flex items-center">
                <span className="icon-arrow-left mr-2"></span>
                <FormattedMessage id="label.add-customer.payment" />
              </div>
            </button>

            <div>
              <ProgressBar stepsNumber="5" actualStep="5" />
            </div>
          </div>

          <div>
            <Button
              classes="px-16 mr-12"
              onClick={() => props.goOrderPurchased()}
            >
              <span>
                <FormattedMessage id="label.add-customer.completeOrder" />
              </span>
            </Button>
          </div>

          <p>Total order amount: ${amount}</p>
        </div>
      </>
    );
  } else if (props.process == "order-purchased") {
    return (
      <>
        <AddNewButton />
      </>
    );
  } else {
    return null;
  }
};
