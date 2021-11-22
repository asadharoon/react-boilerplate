import { configureStore } from "@reduxjs/toolkit";

import reducer from "./rootReducer";

import { environmentVariables } from "../constants/environementVariables";

let devTools = environmentVariables.env === "development";

const store = configureStore({
  reducer,
  devTools,
});

export default store;
