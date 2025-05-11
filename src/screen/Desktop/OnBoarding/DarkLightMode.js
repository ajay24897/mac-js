import React from "react";
import { useDispatch } from "react-redux";

import { setBordingStage, setMode } from "../../../redux/macSlice";
import { STRING_EN } from "../../../utils/strings";
import useDarkMode from "../../../hooks/useDarkMode";
import { DESIGN } from "../../../utils/colors";
import { Button, Text } from "../../../components/atoms";

function DarkLightMode() {
  const dispatch = useDispatch();

  function modeSelection(mode) {
    dispatch(setMode(mode));
  }

  return (
    <div className="flex flex-col flex-1 justify-center items-center ">
      <main
        className={`flex flex-col  w-[70%] max-h-[80%] sm:overflow-scroll text-center rounded-2xl shadow-md ${DESIGN.BG_PRIMARY}`}
      >
        <TextContent />
        <div className="flex flex-1 flex-row flex-wrap justify-evenly m-10 mx-2">
          <LightModeCard onModeSelection={modeSelection} />
          <DarkModeCard onModeSelection={modeSelection} />
        </div>
        <div
          className={`w-full py-2 px-6 flex flex-row-reverse ${DESIGN.BG_SECONDARY}`}
        >
          <Button
            title={"Done"}
            onClick={() => dispatch(setBordingStage("COMPLETE"))}
          />
        </div>
      </main>
    </div>
  );
}

function TextContent() {
  return (
    <div className="flex flex-col">
      <Text className="text-2xl font-semibold mb-4 mt-10 mx-2" variant="h3">
        Choose Your Look
      </Text>
      <Text className="mb-4 whitespace-pre-line text-sm mx-2">
        Select an appearance and see how the Dock, menus, buttons, and windows
        adjust dependingon which{"\n"}one you choose
      </Text>
      <Text className="text-sm mx-2">
        You can change this later in System Preferences
      </Text>
    </div>
  );
}

const COMMON_CARD_CLASS =
  "h-52 max-w-60 flex justify-center items-center cursor-pointer rounded-lg ";

function LightModeCard({ onModeSelection }) {
  const hasDarkMode = useDarkMode();

  function lightModeSelection() {
    onModeSelection("light");
  }

  return (
    <div>
      <div
        className={`bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-500  ${COMMON_CARD_CLASS}
        ${!hasDarkMode ? "border-4 border-sky-600" : ""}
      `}
        onClick={lightModeSelection}
      >
        <div className="bg-slate-100 rounded-md m-2 flex flex-col shadow-md">
          <div className="bg-gray-200 rounded-t-md h-4 w-full"></div>
          <p className="text-slate-800 text-[0.6rem] my-4 select-none">
            {STRING_EN.LOREM_IPSUM}
          </p>
        </div>
      </div>
      <Text
        className="text-sm mt-2 inline cursor-pointer"
        onClick={lightModeSelection}
      >
        Light
      </Text>
    </div>
  );
}

function DarkModeCard({ onModeSelection }) {
  const hasDarkMode = useDarkMode();

  function DarkModeSelection() {
    onModeSelection("dark");
  }

  return (
    <div>
      <div
        className={`bg-gradient-to-b from-indigo-700  via-orange-600 to-pink-600 ${COMMON_CARD_CLASS}
        ${hasDarkMode ? "border-4 border-sky-600" : ""}
      `}
        onClick={DarkModeSelection}
      >
        <div className="bg-slate-800 rounded-md m-2 flex flex-col shadow-md">
          <div className="bg-gray-700 rounded-t-md h-4 w-full"></div>
          <p className="text-slate-300 text-[0.6rem] my-4 select-none">
            {STRING_EN.LOREM_IPSUM}
          </p>
        </div>
      </div>
      <Text
        className="text-sm mt-2 cursor-pointer inline"
        onClick={DarkModeSelection}
      >
        Dark
      </Text>
    </div>
  );
}

export default DarkLightMode;
