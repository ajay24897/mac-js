import React from "react";

const Text = ({ className = "", style = {}, variant = "p", ...props }) => {
  const Tag = variant; // Dynamically set the HTML tag, e.g., 'h1', 'h2', 'p', etc.`

  return (
    <Tag
      className={
        "text-gray-700 dark:text-gray-300 font-light" + " " + className
      }
      style={style}
      {...props}
    >
      {props.children}
    </Tag>
  );
};

export default Text;
