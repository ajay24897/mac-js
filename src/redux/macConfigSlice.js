import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light", //dark //auto
  wallpaperInfo: {
    options: ["desert", "layers", "mountains"],
    selectedWallpaper: "layers",
  },
  onBordingState: {
    stageList: ["GET_STARTED", "MODE_SELECTION", "COMPLETE"],
    index: 0,
    onBordingStage: "GET_STARTED",
  },
};

export const macConfigSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setBordingStage: (state, action) => {
      console.log(
        action.payload,
        state.onBordingState.stageList[state.onBordingState.index]
      );
      if (action.payload === "next") {
        state.onBordingState.index += 1;
        state.onBordingState.onBordingStage =
          state.onBordingState.stageList[state.onBordingState.index];
      }
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
export const { setBordingStage, setMode } = macConfigSlice.actions;

export default macConfigSlice.reducer;
