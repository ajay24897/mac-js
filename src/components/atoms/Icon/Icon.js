import PropTypes from "prop-types";
import React from "react";
import { FaApple } from "react-icons/fa";
import { DESIGN } from "../../../utils/colors";

function Icon(props) {
  const { className, children } = props;
  return (
    <div className={`${DESIGN.TEXT} ${className} cursor-pointer`}>
      {children}
    </div>
  );
}

Icon.defaultProps = {
  className: "text-lg",
  children: <FaApple />,
};

// Prop types
Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Icon;
