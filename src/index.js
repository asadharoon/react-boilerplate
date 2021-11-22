import React from "react";

import { Provider } from "react-redux";

import { render } from "react-dom";

import store from "./redux/store";

import App from "./app/App";

import "bootstrap/dist/css/bootstrap.min.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
