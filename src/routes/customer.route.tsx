import { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

import { FindCustomerPage } from "../pages/customer/find-customer/find-customer.page";
import { CustomerInfoPage } from "../pages/customer/customer-info/customer-info.page";
import { ProductSelectionPage } from "../pages/customer/add-service/product-selection.page";
import { AddOnPage } from "../pages/customer/add-service/add-on.page";
import { OrderConfirmationPage } from "../pages/customer/add-service/order-confirmation.page";
import { InstallationSchedulePage } from "../pages/customer/add-service/installation-schedule.page";
import { PaymentPage } from "../pages/customer/add-service/payment.page";
import { OrderPurchasedPage } from "../pages/customer/add-service/order-purchased.page";
import { OnlineRechargePage } from "../pages/customer/add-service/online-recharge.page";
import { ShoppingCartPage } from "../pages/customer/add-service/shopping-cart.page";
import { NewCustomer } from "../pages/customer/customer-info/new-customer.page";
import { Layout } from "@components/layout/layout.component";
import { AvailabilityCheck } from "../pages/customer/add-service/availability-check.page";
import { currentTelefonySelector } from '@state/redux/telefony/telefony.selectors';
import { messages as defaultMessages } from '../i18n/en';
import { NewProperty } from 'src/pages/customer/customer-info/new-property.page';

export const CustomerRoute = () => {
  const { path } = useRouteMatch();
  const [locale, setLocale] = useState<string>(navigator.language);
  const [messages, setMessages] = useState(defaultMessages);
  const telefony = useSelector(currentTelefonySelector);

  useEffect(() => {
    loadLocale();
  }, [telefony]);

  const loadLocale = async () => {
    if (telefony && telefony.locale !== locale)  {
      const language = await import(`../i18n/${telefony.locale}`);
      setLocale(telefony.locale);
      setMessages(language.messages);
    }
  }

  return (
    <Layout>
      <IntlProvider
        locale={locale}
        defaultLocale={navigator.language}
        messages={messages}
      >
        <Switch>
          <Route exact path={path} component={FindCustomerPage} />
          <Route 
            path={`${path}/new-customer`} 
            component={NewCustomer} 
          />
         
          <Route
            path={`${path}/product-selection`}
            component={ProductSelectionPage}
          />
          <Route
            path={`${path}/availability-check`}
            component={AvailabilityCheck}
          />
          <Route
            path={`${path}/online-recharge`}
            component={OnlineRechargePage}
          />
          <Route path={`${path}/add-on`} component={AddOnPage} />
          <Route
            exact
            path={`${path}/order-confirmation`}
            component={OrderConfirmationPage}
          />
          <Route
            exact
            path={`${path}/installation-schedule`}
            component={InstallationSchedulePage}
          />
          <Route exact path={`${path}/payment`} component={PaymentPage} />
          <Route
            exact
            path={`${path}/order-purchased`}
            component={OrderPurchasedPage}
          />
          <Route exact path={`${path}/cart`} component={ShoppingCartPage} />
          <Route component={CustomerInfoPage} path={`${path}/:id`} />
        </Switch>
        <ToastContainer />
      </IntlProvider>
    </Layout>
  );
};

/*
<Route
          path={`${path}/add-service`}
          component={AddServicePage}
        /> 
*/
