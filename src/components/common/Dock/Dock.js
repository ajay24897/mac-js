import React, { useState } from "react";
import { SVG } from "../../../media/image/svg/svg";

function Dock() {
  const list = [
    { key: "appStore", svg: SVG.AppStore },
    { key: "setting", svg: SVG.Setting },
    { key: "calender", svg: SVG.Calender },
    { key: "notes", svg: SVG.Notes },
  ];
  const [clicked, setClicked] = useState({});

  function onClickDocItem(item) {
    setClicked((prec) => ({ ...prec, ...{ [item.key]: true } }));
  }
  return (
    <div className="absolute bottom-1 min-h-10 bg-white/5  shadow-2xl border-[0.1px] rounded-2xl w-auto left-1/2 transform -translate-x-1/2 overflow-visible">
      <div className="flex overflow-visible">
        {list.map((item) => (
          <div className="flex overflow-visible">
            <img
              src={item.svg}
              width={50}
              height={50}
              className={`m-2 relative ${clicked[item.key] && "bounce"}`}
              onClick={() => {
                onClickDocItem(item);
              }}
            />
            <div className="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dock;
