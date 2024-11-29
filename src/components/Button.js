import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const Button = ({ title, ...props }) => {
  const hasDarkMode = useDarkMode();
  return (
    <button
      className={`py-1 px-2 rounded-md font-light text-sm transition duration-300 ${
        hasDarkMode ? "bg-gray-500 text-gray-300" : "bg-gray-100 text-gray-700"
      }`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
