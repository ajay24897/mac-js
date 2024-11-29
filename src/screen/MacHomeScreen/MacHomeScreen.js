import React from "react";
import { useSelector } from "react-redux";

import { WALLPAPER_LIST } from "../../utils/constants";
import OnBoarding from "./OnBoarding/OnBoarding";

function MacHomeScreen() {
  const {
    mode,
    onBordingInfo: { currentStage },
  } = useSelector((state) => state.macConfig);

  return (
    <div
      className={`flex-1 h-[100vh] overflow-y-hidden bg-cover ${mode}`}
      style={{ backgroundImage: `url(${WALLPAPER_LIST[mode].layers})` }}
    >
      {currentStage !== "COMPLETE" && <OnBoarding />}
    </div>
  );
}

export default MacHomeScreen;
