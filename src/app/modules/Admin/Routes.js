import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";

const AdminRoutes = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={"/admin"} component={AdminDashboard} />
      <Route path={`${match.path}/stats`} component={AdminStats} />
    </Switch>
  );
};

export default AdminRoutes;

const AdminStats = () => {
  return <div>Admin Stats Page</div>;
};
