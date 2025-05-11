import { configureStore } from "@reduxjs/toolkit";
import macSlice from "./macSlice";
import screenSlice from "./screenSlice";
import dockSlice from "./dockSlice";

export const store = configureStore({
  reducer: {
    mac: macSlice,
    screen: screenSlice,
    dock: dockSlice,
  },
});
