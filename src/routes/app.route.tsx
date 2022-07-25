import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { NotFound } from "../pages/not-found.page";
import { LoginRoute } from './login.route';
import { CustomerRoute } from "./customer.route";

export const AppRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={LoginRoute} />
      <Route path="/customer" component={CustomerRoute} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
