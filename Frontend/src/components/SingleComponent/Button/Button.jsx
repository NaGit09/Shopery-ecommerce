import React from "react";
import "../styles/button.css";
const Button = (props) => {
  const { content, size, type } = props;
  const className = `${size || 'button-small'} ${type || 'filled'} w-100 mb-2 text-sm font-semibold`.trim();
  return (
    <button className={`${className} text-center rounded-full`}>
      {content}
    </button>
  );
};

export default Button;
