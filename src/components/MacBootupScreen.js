import React from "react";
import { FaApple } from "react-icons/fa";

import COLOR from "../utils/colors";
import ProgressBar from "./ProgressBar";

function MacBootupScreen() {
  return (
    <div className="bg-black min-h-full flex  flex-col justify-center items-center	">
      <FaApple color={COLOR.WHITE} className="text-8xl text-white mb-10" />
      <ProgressBar />
    </div>
  );
}

export default MacBootupScreen;
