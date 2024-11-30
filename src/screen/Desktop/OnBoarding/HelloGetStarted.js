import React from "react";
import HelloAnimationJson from "../../../media/animation/hello.json";
import Lottie from "lottie-react";
import { PiArrowCircleRight } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setBordingStage } from "../../../redux/macConfigSlice";
import Icon from "../../../components/atoms/Icon/Icon";
import Text from "../../../components/atoms/Text/Text";

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

      <Text className="text-sm mt-1 !text-slate-200">Get Started</Text>
    </div>
  );
}

export default HelloGetStarted;
