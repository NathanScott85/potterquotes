import React from "react";
import "./css/button.css";
const Button = props => {
  // we can use {...props} instead of giving  onClick={onClick} or style={style}
  return <button {...props}>{props.text}</button>;
};

export default Button;
