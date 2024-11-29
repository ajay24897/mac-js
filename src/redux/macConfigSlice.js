import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light", //dark //auto
  wallpaperInfo: {
    options: ["desert", "layers", "mountains"],
    selected: "layers",
  },
  onBordingInfo: {
    stageList: ["GET_STARTED", "MODE_SELECTION", "COMPLETE"],
    index: 0,
    currentStage: "GET_STARTED",
  },
};

export const macConfigSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setBordingStage: (state, action) => {
      console.log(
        action.payload,
        state.onBordingInfo.stageList[state.onBordingInfo.index]
      );
      if (action.payload === "next") {
        state.onBordingInfo.index += 1;
        state.onBordingInfo.currentStage =
          state.onBordingInfo.stageList[state.onBordingInfo.index];
      }
      console.log(state.onBordingInfo.currentStage);
    },
    setMode: (state, action) => {
      if (action.payload === "dark" || action.payload === "light") {
        state.mode = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBordingStage, setMode } = macConfigSlice.actions;

export default macConfigSlice.reducer;
