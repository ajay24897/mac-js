import PropTypes from "prop-types";
import React from "react";
import { DESIGN } from "../../../utils/colors";

const Text = ({ className = "", style = {}, variant = "p", ...props }) => {
  const Tag = variant; // Dynamically set the HTML tag, e.g., 'h1', 'h2', 'p', etc.`

  return (
    <Tag
      className={`${DESIGN.TEXT} font-light select-none ${className}`}
      style={style}
      {...props}
    >
      {props.children}
    </Tag>
  );
};

Text.defaultProps = {
  className: "text-8xl",
  children: "",
};

// Prop types
Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Text;
