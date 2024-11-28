import { configureStore } from "@reduxjs/toolkit";
import macConfigSlice from "./macConfigSlice";

export const store = configureStore({
  reducer: {
    macConfig: macConfigSlice,
  },
});
