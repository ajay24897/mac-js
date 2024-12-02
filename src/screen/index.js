import React from "react";
import Desktop from "./Desktop/Desktop";
import { WALLPAPER_IMG_LIST } from "../utils/constants";
import { useSelector } from "react-redux";
import OnBoarding from "./Desktop/OnBoarding/OnBoarding";

function MacJS() {
  const {
    mode,
    wallpaperState: { selectedWallpaper },
    onBordingState: { onBordingStage },
  } = useSelector((state) => state.mac);

  return (
    <div
      className={`flex flex-1 h-[100vh] min-w-[100vw]  overflow-x-scroll overflow-y-hidden bg-cover ${mode}`}
      style={{
        backgroundImage: `url(${WALLPAPER_IMG_LIST[mode][selectedWallpaper]})`,
      }}
    >
      {onBordingStage === "COMPLETE" ? <Desktop /> : <OnBoarding />}
    </div>
  );
}

export default MacJS;
