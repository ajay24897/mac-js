import React from "react";
import BlureBackground from "../../../components/BluredBackground";
import HelloGetStarted from "./HelloGetStarted";
import { useSelector } from "react-redux";
import DarkLightMode from "./DarkLightMode";

function OnBoarding() {
  const { currentStage } = useSelector(
    (state) => state.macConfig.onBordingInfo
  );

  let OnBoardingComponent;

  switch (currentStage) {
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