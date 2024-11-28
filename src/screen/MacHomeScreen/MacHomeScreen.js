import React from "react";
import { WALLPAPER_LIST } from "../../utils/constants";
import OnBoarding from "./OnBoarding/OnBoarding";

function MacHomeScreen() {
  return (
    <div
      className="flex-1 h-[100vh] overflow-y-hidden bg-cover"
      style={{ backgroundImage: `url(${WALLPAPER_LIST.LIGHT.layers})` }}
    >
      <OnBoarding />
    </div>
  );
}

export default MacHomeScreen;
