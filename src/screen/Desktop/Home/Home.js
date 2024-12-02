import React, { useEffect } from "react";
import Menubar from "../../../components/common/Menubar/Menubar";

function Home() {
  let container;

  useEffect(() => {
    container = document.getElementById("mac-container");
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const handleMouseMove = (event) => {
    console.log(`Cursor Position: X=${event.clientX}, Y=${event.clientY}`);
  };

  return (
    <div className="min-w-[100vw]">
      <Menubar fixedMenubar={true} />
    </div>
  );
}

export default Home;
