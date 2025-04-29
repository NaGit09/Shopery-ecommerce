import React from "react";
import "../styles/button.css";
const Button = (props) => {
  const { content, size, type } = props;
  const className = `${size || 'button-small'} ${type || 'filled'}`.trim();
  return (
    <button className={`${className} text-center rounded-full`}>
      {content}
    </button>
  );
};

export default Button;
