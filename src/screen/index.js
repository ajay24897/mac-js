import React, { useEffect, useRef } from "react";
import Desktop from "./Desktop/Desktop";
import { useDispatch, useSelector } from "react-redux";
import { setShowMenubar } from "../redux/screenSlice";
import Menubar from "../components/common/Menubar/Menubar";

function MacJS() {
  const { mode } = useSelector((state) => state.mac);

  let container = useRef();
  const timer = useRef();
  const hasScrolledImplicit = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const element = document.getElementById("mac-container");
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
    } else {
      console.error("mac-container not found");
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []); // Empty dependency array ensures the effect runs once

  const handleMouseMove = (event) => {
    if (event.clientY <= 24) {
      dispatch(setShowMenubar(true));
    } else {
      dispatch(setShowMenubar(false));
    }
    console.log(`Cursor Position: X=${event.clientX}, Y=${event.clientY}`);
  };

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
      <div className="min-w-[100vw]">
        <Menubar fixedMenubar={false} />
        edede
      </div>
    </div>
  );
}

export default MacJS;
