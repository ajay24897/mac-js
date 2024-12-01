import { configureStore } from "@reduxjs/toolkit";
import macSlice from "./macSlice";

export const store = configureStore({
  reducer: {
    mac: macSlice,
  },
});
