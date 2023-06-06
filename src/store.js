import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/user/UserSlice";
import transReducer from "./components/transaction/TransSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    trans: transReducer,
  },
});
