import React from "react";

import { useSelector } from "react-redux";

import { Redirect, Route, Switch } from "react-router-dom";

import ContentRoute from "./layout/UserLayout/ContentRoute";
import AdminRoutes from "./modules/Admin/Routes";

import ErrorPage from "./modules/Errors/pages/ErrorPage";

import Dashboard from "./modules/pages/Dashboard";

import SettingsPage from "./modules/Settings/pages/SettingPage";

import SurveyPage from "./modules/Surveys/pages/SurveyPage";

import { defineAbilitiesForUser } from "./permissions/UserPermissions";

const BasePage = () => {
  const token = useSelector((state) => state.auth.token);
  const ability = defineAbilitiesForUser(token);
  return (
    <Switch>
      <Redirect from={"/auth/*"} to={"/"} />
      <Route exact path={"/"} component={Dashboard} />
      <ContentRoute path={"/surveys"} component={SurveyPage} />
      {ability.can("access", "/settings") && (
        <Route exact path={"/settings"} component={SettingsPage} />
      )}
      {ability.can("access", "/admin") && (
        <ContentRoute path={"/admin"} component={AdminRoutes} />
      )}
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
};

export default BasePage;
