import React from "react";
import { useSelector } from "react-redux";

import { WALLPAPER_LIST } from "../../utils/constants";
import OnBoarding from "./OnBoarding/OnBoarding";

function Desktop() {
  const {
    mode,
    wallpaperInfo: { selected },
    onBordingInfo: { currentStage },
  } = useSelector((state) => state.macConfig);

  return (
    <div
      className={`flex-1 h-[100vh] overflow-y-hidden bg-cover ${mode}`}
      style={{ backgroundImage: `url(${WALLPAPER_LIST[mode][selected]})` }}
    >
      {currentStage !== "COMPLETE" && <OnBoarding />}
    </div>
  );
}

export default Desktop;
