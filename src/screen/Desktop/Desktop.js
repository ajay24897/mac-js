import React from "react";
import { useSelector } from "react-redux";

import { WALLPAPER_LIST } from "../../utils/constants";
import OnBoarding from "./OnBoarding/OnBoarding";
import Menubar from "../../components/common/Menubar/Menubar";

function Desktop() {
  const {
    mode,
    wallpaperInfo: { selectedWallpaper },
    onBordingState: { onBordingStage },
  } = useSelector((state) => state.macConfig);

  return (
    <div
      className={`flex-1 h-[100vh] min-w-[100vw] overflow-y-hidden bg-cover ${mode}`}
      style={{
        backgroundImage: `url(${WALLPAPER_LIST[mode][selectedWallpaper]})`,
      }}
    >
      {onBordingStage !== "COMPLETE" && <OnBoarding />}
      {onBordingStage === "COMPLETE" && (
        <>
          <Menubar />
        </>
      )}
    </div>
  );
}

export default Desktop;
