import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light", //dark //auto
  wallpaperInfo: {
    options: ["desert", "layers", "mountains"],
    selected: "layers",
  },
  onBordingInfo: {
    stageList: ["GET_STARTED", "LANGUAGE_SELECTION"],
    index: 0,
    currentStage: "GET_STARTED",
  },
};

export const macConfigSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setBordingStage: (state, action) => {
      if (action.payload === "next") {
        state.onBordingInfo.index += 1;
        state.onBordingInfo.currentStage =
          state.onBordingInfo.stageList[state.onBordingInfo.index];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBordingStage } = macConfigSlice.actions;

export default macConfigSlice.reducer;
