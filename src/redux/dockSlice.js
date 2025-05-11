import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dockList: {},
};

export const dockSlice = createSlice({
  name: "dockSlice",
  initialState,
  reducers: {
    setDockList: (state, action) => {
      console.log(state.dockList);
    },
  },
});

export const { setDockList } = dockSlice.actions;

export default dockSlice.reducer;
