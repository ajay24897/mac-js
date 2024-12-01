import desertDark from "../media/wallpaper/light/desert.jpg";
import layersDark from "../media/wallpaper/light/layers.jpg";
import mountainsDark from "../media/wallpaper/light/mountains.jpg";

import desertLight from "../media/wallpaper/dark/desert.jpg";
import layersLight from "../media/wallpaper/dark/layers.jpg";
import mountainsLight from "../media/wallpaper/dark/mountains.jpg";

export const WALLPAPER_IMG_LIST = {
  light: {
    desert: desertDark,
    layers: layersDark,
    mountains: mountainsDark,
  },
  dark: {
    desert: desertLight,
    layers: layersLight,
    mountains: mountainsLight,
  },
};

export const WALLPAPER_OPTION = ["desert", "layers", "mountains"];

export const ON_BORDING_STATE_LIST = [
  "GET_STARTED",
  "MODE_SELECTION",
  "COMPLETE",
];
