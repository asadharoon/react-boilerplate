import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthLayout from "../../layout/AuthLayout";
import LoginPage from "./pages/LoginPage";

const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Switch>
        <Route exact path={"/auth/login"} component={LoginPage} />
      </Switch>
    </AuthLayout>
  );
};

export default AuthRoutes;
