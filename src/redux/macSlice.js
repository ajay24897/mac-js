import { createSlice } from "@reduxjs/toolkit";
import { ON_BORDING_STATE_LIST } from "../utils/constants";

const initialState = {
  mode: "light", //dark //auto
  wallpaperState: {
    selectedWallpaper: "layers",
  },
  onBordingState: {
    index: 0,
    onBordingStage: "GET_STARTED",
  },
};

export const macSlice = createSlice({
  name: "macSlice",
  initialState,
  reducers: {
    setBordingStage: (state, action) => {
      state.onBordingState.index += 1;
      state.onBordingState.onBordingStage =
        ON_BORDING_STATE_LIST[state.onBordingState.index];

      console.log(state.onBordingState.onBordingStage);
    },
    setMode: (state, action) => {
      if (action.payload === "dark" || action.payload === "light") {
        state.mode = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBordingStage, setMode } = macSlice.actions;

export default macSlice.reducer;
