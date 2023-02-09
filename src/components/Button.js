import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ size, color, children }) => {
  let style = {};
  if (size === "small") {
    style = {
      padding: "8px 16px",
      fontSize: "12px",
    };
  } else if (size === "medium") {
    style = {
      padding: "12px 24px",
      fontSize: "14px",
    };
  } else if (size === "large") {
    style = {
      padding: "16px 32px",
      fontSize: "16px",
    };
  }

  if (color === "primary") {
    style.color = "white";
    style.backgroundColor = "blue";
    style.border = "blue";
  } else if (color === "secondary") {
    style.backgroundColor = "white";
    style.color = "blue";
    style.border = "blue";
  } else if (color === "Text") {
    style.color = "blue";
  }

  return (
    <button
      className={color === "Text" ? "Button_Link" : "Button"}
      style={style}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "Text"]),
  children: PropTypes.node,
};

Button.defaultProps = {
  size: "medium",
  color: "primary",
  children: "Button",
};

export default Button;
