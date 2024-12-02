import React from "react";
import { FaApple } from "react-icons/fa";

import ProgressBar from "../../components/common/ProgressBar";
import { Icon } from "../../components/atoms";

function BootupScreen() {
  return (
    <div className="bg-slate-950 h-[100vh] flex flex-col justify-center items-center">
      <Icon className={"mb-10 text-8xl"}>
        <FaApple className={"text-slate-100"} />
      </Icon>
      <ProgressBar />
    </div>
  );
}

export default BootupScreen;
