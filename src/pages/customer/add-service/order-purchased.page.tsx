import { useState } from "react";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";

import { Main } from "@components/layout/main.component";
import { useHistory } from "react-router";
import { OrderPurchased } from "./components/order-purchased.component";
import { currentLineSelector } from '@state/redux/lines/lines.selector';

export const OrderPurchasedPage = () => {
  const router = useHistory();
  const [loading, setLoading] = useState(false);
  const line = useSelector(currentLineSelector);

  const goHome = () => {
    router.push("/");
  };

  const goCustomer = () => {
    router.push(`/customer/${line.id}?reload=true`);
  }

  return (
    <Main
      className="amd__add-service-page__main"
      navigation={<OrderPurchasedNav onClickCustomer={goCustomer} />}
    >
      {loading && (
        <div className="h-full flex justify-center items-center">
          <ReactLoading type={"bars"} color={"#0085CA"} />
        </div>
      )}

      {!loading && <OrderPurchased goHome={goCustomer} />}
    </Main>
  );
};

const OrderPurchasedNav = (props: any) => (
  <div className="h-6"></div>
);
