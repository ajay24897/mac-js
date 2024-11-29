import React from "react";
import { useDispatch } from "react-redux";

import Text from "../../../components/Text";
import { setBordingStage, setMode } from "../../../redux/macConfigSlice";
import { STRING_EN } from "../../../utils/strings";
import Button from "../../../components/Button";
import useDarkMode from "../../../hooks/useDarkMode";

function DarkLightMode() {
  const dispatch = useDispatch();

  function modeSelection(mode) {
    dispatch(setMode(mode));
  }

  return (
    <div className="flex flex-col flex-1 justify-center items-center ">
      <main className="flex flex-col  w-[70%] max-h-[80%] sm:overflow-scroll  bg-slate-100 dark:bg-slate-800  text-center rounded-2xl shadow-md">
        <TextContent />

        <div className="flex flex-1 flex-row flex-wrap justify-evenly m-10 mx-2">
          <LightModeCard onModeSelection={modeSelection} />
          <DarkModeCard onModeSelection={modeSelection} />
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 w-full py-2 px-6 flex flex-row-reverse">
          <Button
            title={"Done"}
            onClick={() => dispatch(setBordingStage("next"))}
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

function LightModeCard({ onModeSelection }) {
  const hasDarkMode = useDarkMode();

  return (
    <div className="flex-col " onClick={() => onModeSelection("light")}>
      <div
        className={`h-52 max-w-60 bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-500 rounded-lg  flex justify-center items-center " +
        ${!hasDarkMode ? "border-4 border-sky-600" : ""}
      `}
      >
        <div className="bg-slate-100 rounded-md m-2 flex flex-col shadow-md">
          <div className="bg-gray-200 rounded-t-md h-4 w-full"></div>
          <p className="text-gray-700 text-[0.6rem] my-4">
            {STRING_EN.LOREM_IPSUM}
          </p>
        </div>
      </div>
      <Text className="text-sm mt-2">Light</Text>
    </div>
  );
}

function DarkModeCard({ onModeSelection }) {
  const hasDarkMode = useDarkMode();

  return (
    <div className="flex-col" onClick={() => onModeSelection("dark")}>
      <div
        className={`h-52 max-w-60 bg-gradient-to-b from-indigo-700  via-orange-600 to-pink-600 rounded-lg border-2 flex justify-center items-center flex-1" +
        ${hasDarkMode ? "border-4 border-sky-600" : ""}
      `}
      >
        <div className="bg-slate-800 rounded-md m-2 flex flex-col shadow-md">
          <div className="bg-gray-700 rounded-t-md h-4 w-full"></div>
          <p className="text-gray-300 text-[0.6rem] my-4">
            {STRING_EN.LOREM_IPSUM}
          </p>
        </div>
      </div>
      <Text className="text-sm mt-2">Dark</Text>
    </div>
  );
}

export default DarkLightMode;
