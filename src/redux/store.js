import { configureStore } from "@reduxjs/toolkit";
import macSlice from "./macSlice";
import screenSlice from "./screenSlice";

export const store = configureStore({
  reducer: {
    mac: macSlice,
    screen: screenSlice,
  },
});
