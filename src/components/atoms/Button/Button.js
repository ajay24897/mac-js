import React from "react";
import { DESIGN } from "../../../utils/colors";

const Button = ({ title, ...props }) => {
  return (
    <button
      className={`py-1 px-2 rounded-md font-light text-md ${DESIGN.TEXT}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
