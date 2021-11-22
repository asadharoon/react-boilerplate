import React from "react";
import { Route } from "react-router-dom";

const ContentRoute = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      path={path}
      render={(props) => {
        return <Component {...props} />;
      }}
      {...rest}
    />
  );
};

export default ContentRoute;
