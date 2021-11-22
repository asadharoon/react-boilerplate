import React from "react";

import { Route, Switch, useRouteMatch } from "react-router-dom";

import CreateSurvey from "./CreateSurvey";

import EditSurvey from "./EditSurvey";

import SurveysListPage from "./SurveysListPage";

const SurveyPage = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.path}/`} component={SurveysListPage} />
      <Route path={`${match.path}/create`} component={CreateSurvey} />
      <Route path={`${match.path}/edit/:id`} component={EditSurvey} />
    </Switch>
  );
};

export default SurveyPage;
