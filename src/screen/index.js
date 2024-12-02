import React, { useRef } from "react";
import Desktop from "./Desktop/Desktop";
import { useSelector } from "react-redux";

function MacJS() {
  const { mode } = useSelector((state) => state.mac);

  let container = useRef();
  const timer = useRef();
  const hasScrolledImplicit = useRef(false);

  const handleScrollStop = (scrollLeft, clientWidth) => {
    const scrolledAmount = scrollLeft / clientWidth;

    const nextSection =
      scrolledAmount > Math.floor(scrolledAmount) + 0.5
        ? Math.ceil(scrolledAmount)
        : Math.floor(scrolledAmount);

    // Scroll to the calculated section
    container.current.scrollTo({
      left: clientWidth * nextSection,
      behavior: "smooth",
    });

    hasScrolledImplicit.current = true;
  };

  const handleScroll = (event) => {
    const scrollLeft = event.target.scrollLeft;
    const clientWidth = event.target.clientWidth;

    if (hasScrolledImplicit.current) {
      hasScrolledImplicit.current = false;
      return;
    }

    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      handleScrollStop(scrollLeft, clientWidth);
    }, 200);
  };

  return (
    <div
      className={`flex flex-1 h-[100vh] min-w-[100vw]  overflow-x-scroll overflow-y-hidden bg-cover ${mode}`}
      onScroll={handleScroll}
      id={"mac-container"}
      ref={container}
    >
      <Desktop />
    </div>
  );
}

export default MacJS;
