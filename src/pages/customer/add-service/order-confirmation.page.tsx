import { useState } from "react";
import ReactLoading from "react-loading";
import { FormattedMessage } from "react-intl";
import Swal from "sweetalert2";
import { useDispatch } from 'react-redux';

import { Main } from "@components/layout/main.component";
import { useHistory } from "react-router";
import { OrderConfirmation } from "./components/order-confirmation.component";
import { useSelector } from "react-redux";
import { productToAddSelector, currentLineSelector } from "@state/redux/lines/lines.selector";
import { currentCustomerSerlector } from "@state/redux/customer/customer.selector";
import { currentAccountSelector } from '@state/redux/account/account.selector';
import { AddServiceNav } from "./components/add-service-nav.component";
import allActions from "@state/redux/actions";

export const OrderConfirmationPage = () => {
  const router = useHistory();
  const [loading, setLoading] = useState(false);
  const [termsConditionsAccepted, setTermsConditionsAccepted] = useState(false);
  const [signed, setSigned] = useState(false);
  const customer = useSelector(currentAccountSelector);
  const productsSelectedData = useSelector(productToAddSelector);
  const line = useSelector(currentLineSelector);
  const dispatch = useDispatch();

  const hasAddOns = (typeProduct: any, addOns: any[]) => {
    return addOns.find((addOn: any) => {
      return addOn.typeProduct === typeProduct;
    });
  };

  const goNext = () => {
    let isValid = true;
    let message = "";
    if (!termsConditionsAccepted) {
      message = "Please accept the terms and conditions to continue!";
      isValid = false;
    }

    if (!signed) {
      message = "Please sign to continue";
      isValid = false;
    }

    if (isValid) {
      generateOrder();
      router.push("payment");
    } else {
      Swal.fire({
        icon: "warning",
        title: message,
        confirmButtonColor: "#0085CA",
      });
    }
  };

  const goBack = () => {
    router.goBack();
  };

  const generateOrder = () => {
    const min = 10000000;
    const max = 99999999;
    const orderId =  Math.floor(Math.random() * (max - min + 1)) + min;
    const order = {
      orderId: { value: orderId },
      orderNumber: { value: orderId },
      orderStatusId: { value: 10 },
      createDt: { value: (new Date()).toISOString() }
    };
    /*dispatch(allActions.customerActions.addTempOrder({
      accountExternalId: customer.accountExternalId.value,
      order
    }));*/
  }

  return (
    <Main
      className="amd__add-service-page__main"
      navigation={
        <AddServiceNav
          lblBack={<FormattedMessage id="label.add-customer.payment" />}
          lblNext={<FormattedMessage id="label.add-customer.completeOrder" />}
          onClickBack={goBack}
          onClickNext={goNext}
          totalSteps={5}
          currentStep={5}
        />
      }
    >
      {loading && (
        <div className="h-full flex justify-center items-center">
          <ReactLoading type={"bars"} color={"#0085CA"} />
        </div>
      )}

      {!loading && (
        <OrderConfirmation
          customer={customer}
          line={line}
          onAcceptTermsConditions={setTermsConditionsAccepted}
          termsConditionsAccepted={termsConditionsAccepted}
          onSigned={setSigned}
        />
      )}
    </Main>
  );
};
