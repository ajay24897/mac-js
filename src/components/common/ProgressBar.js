import React from "react";

function ProgressBar() {
  return (
    <div className="w-[20%]  h-2 rounded-lg border-[0.2px] border-slate-200">
      <div
        className={"h-full rounded-lg"}
        style={{ animation: `animated-progress 3s ease-in-out forwards` }}
      />
    </div>
  );
}

export default ProgressBar;
