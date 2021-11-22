import React from "react";

import { useSelector } from "react-redux";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { environmentVariables } from "../constants/environementVariables";

import ContentLayout from "./layout/UserLayout/ContentLayout";

import ErrorPage from "./modules/Errors/pages/ErrorPage";

import BasePage from "./BasePage";
import AuthRoutes from "./modules/Auth/AuthRoutes";

const App = () => {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <BrowserRouter basename={environmentVariables.PUBLIC_URL}>
      <Switch>
        {!loggedIn && <Route render={(props) => <AuthRoutes {...props} />} />}

        {loggedIn && (
          <PrivateRoute>
            <BasePage />
          </PrivateRoute>
        )}
        <Route path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

const PrivateRoute = ({ children }) => {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      {loggedIn ? (
        <ContentLayout>{children}</ContentLayout>
      ) : (
        <Redirect to={"/auth/login"} />
      )}
    </>
  );
};
