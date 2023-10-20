import React from "react";

const Button = ({ image, text, style, clickFunc }) => {
  return (
    <button
      onClick={() => {
        clickFunc();
      }}
      style={style}
    >
      {image && image} {text}{" "}
    </button>
  );
};

export default Button;
