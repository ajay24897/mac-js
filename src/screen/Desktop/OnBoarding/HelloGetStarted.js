import React from "react";
import HelloAnimationJson from "../../../media/animation/hello.json";
import Lottie from "lottie-react";
import { PiArrowCircleRight } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setBordingStage } from "../../../redux/macConfigSlice";
import { Icon, Text } from "../../../components/atoms";

function HelloGetStarted() {
  const dispatch = useDispatch();

  function getStartClick() {
    dispatch(setBordingStage("next"));
  }
  return (
    <div className="flex flex-1 flex-col h-full justify-center items-center ">
      <Lottie animationData={HelloAnimationJson} className=" invert" />
      <Icon className="text-2xl">
        <PiArrowCircleRight
          onClick={getStartClick}
          className="!text-slate-200"
        />
      </Icon>

      <Text
        className="text-sm mt-1 !text-slate-200 cursor-pointer"
        onClick={getStartClick}
      >
        Get Started
      </Text>
    </div>
  );
}

export default HelloGetStarted;
