import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menubarState: {
    showMenubar: false,
    menubarTime: null,
  },
};

export const screenSlice = createSlice({
  name: "screenSlice",
  initialState,
  reducers: {
    setShowMenubar: (state, action) => {
      state.menubarState.showMenubar = action.payload;
    },
    setMenubarTime: (state, action) => {
      state.menubarState.menubarTime = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowMenubar, setMenubarTime } = screenSlice.actions;

export default screenSlice.reducer;
