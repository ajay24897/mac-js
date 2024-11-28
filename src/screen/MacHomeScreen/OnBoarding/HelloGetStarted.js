import React from "react";
import HelloAnimationJson from "../../../media/animation/hello.json";
import Lottie from "lottie-react";
import { PiArrowCircleRight } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setBordingStage } from "../../../redux/macConfigSlice";

function HelloGetStarted() {
  const dispatch = useDispatch();

  function getStartClick() {
    dispatch(setBordingStage("next"));
  }
  return (
    <div className="flex flex-1 flex-col h-full justify-center items-center ">
      <Lottie animationData={HelloAnimationJson} className=" invert" />
      <PiArrowCircleRight
        className="text-2xl text-white"
        onClick={getStartClick}
      />
      <p className="text-sm text-white mt-1 select-none">Get Started</p>
    </div>
  );
}

export default HelloGetStarted;
