import React from "react";

function BlureBackground(props) {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex p-1 backdrop-opacity-95 backdrop-blur-md">
      {props.children}
    </div>
  );
}

export default BlureBackground;
