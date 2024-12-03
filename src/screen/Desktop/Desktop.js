import React from "react";
import { useSelector } from "react-redux";

import Home from "./Home/Home";
import OnBoarding from "./OnBoarding/OnBoarding";
import { WALLPAPER_IMG_LIST } from "../../utils/constants";

function Desktop() {
  const {
    mode,
    wallpaperState: { selectedWallpaper },
    onBordingState: { onBordingStage },
  } = useSelector((state) => state.mac);

  return (
    <div
      className={`flex flex-1 h-[100vh] min-w-[100vw] overflow-x-scroll overflow-y-hidden bg-cover`}
      style={{
        backgroundImage: `url(${WALLPAPER_IMG_LIST[mode][selectedWallpaper]})`,
      }}
    >
      {onBordingStage === "COMPLETE" ? <Home /> : <OnBoarding />}
    </div>
  );
}

export default Desktop;
