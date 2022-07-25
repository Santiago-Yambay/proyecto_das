import { Switch, Route, useRouteMatch } from "react-router-dom";

import { LoginPage } from "../pages/login/login.page";

export const LoginRoute = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={LoginPage} />
    </Switch>
  );
};
