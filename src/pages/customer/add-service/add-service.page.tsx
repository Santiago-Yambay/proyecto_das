import { Switch, Redirect, Route, useHistory, useRouteMatch } from "react-router-dom";

import { Main } from "@components/layout/main.component";
import { AddServiceNav } from "./components/add-service-nav.component";
import { ProductSelectionPage } from './product-selection.page';
import { AddOnPage } from "./add-on.page";
import { OrderConfirmationPage } from "./order-confirmation.page";
import { InstallationSchedulePage } from "./installation-schedule.page";
import { PaymentPage } from "./payment.page";
import { OrderPurchasedPage } from "./order-purchased.page";

export const AddServicePage = () => {
  const router = useHistory();
  const { path } = useRouteMatch();

  const goNext = () => {};

  const goBack = () => {
    router.goBack();
  };

  return (
    <Main
      className="amd__add-service-page__main"
      navigation={
        <AddServiceNav
          lblBack="Back"
          lblNext="next"
          onClickBack={goBack}
          onClickNext={goNext}
          totalSteps={5}
          currentStep={1}
        />
      }
    >
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/product-selection`} />
        </Route>
        <Route
          path={`${path}/product-selection`}
          component={ProductSelectionPage}
        />
      </Switch>
    </Main>
  );
};
