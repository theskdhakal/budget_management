import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/user/UserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
