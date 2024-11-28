import React from "react";
import HelloAnimationJson from "../../media/animation/hello.json";
import Lottie from "lottie-react";

function HelloAnimation() {
  return (
    <div className="flex flex-1 h-full justify-center items-center">
      <Lottie
        animationData={HelloAnimationJson}
        loop={true}
        className="w-[50%]"
      />
      ;
    </div>
  );
}

export default HelloAnimation;
