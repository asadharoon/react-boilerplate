import { combineReducers } from "@reduxjs/toolkit";

import AuthReducer from "../app/modules/Auth/redux/AuthReducer";

const reducer = combineReducers({
  auth: AuthReducer,
  //   details: detailsReducer,
});

export default reducer;
