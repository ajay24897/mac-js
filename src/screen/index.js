import React, { useRef } from "react";
import Desktop from "./Desktop/Desktop";

function MacJS() {
  const container = useRef();
  const timer = useRef();

  const hasScrolledImplicit = useRef(false);
  console.log(container);

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
      onScroll={handleScroll}
      id={"mac-container"}
      className="flex flex-row overflow-x-scroll"
      ref={container}
    >
      <Desktop />
    </div>
  );
}

export default MacJS;
