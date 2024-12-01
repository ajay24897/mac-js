import React from "react";
import BlureBackground from "../../../components/common/BluredBackground";
import HelloGetStarted from "./HelloGetStarted";
import { useSelector } from "react-redux";
import DarkLightMode from "./DarkLightMode";

function OnBoarding() {
  const { onBordingStage } = useSelector((state) => state.mac.onBordingState);

  let OnBoardingComponent;

  switch (onBordingStage) {
    case "GET_STARTED":
      OnBoardingComponent = HelloGetStarted;
      break;
    case "MODE_SELECTION":
      OnBoardingComponent = DarkLightMode;
      break;
    default:
      OnBoardingComponent = () => <></>;
  }

  return (
    <BlureBackground>
      <OnBoardingComponent />
    </BlureBackground>
  );
}

export default OnBoarding;
