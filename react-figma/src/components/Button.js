import React from "react";

const Button = ({
  backgroundColor = "#0075ff",
  textColor = "white",
  text,
  isRounded = "rounded-full rounded-tl-none",
  width = "w-full md:w-[204px]",
  isOutlined,
}) => {
  return (
    <>
      <button
        className={`${backgroundColor} ${width} h-14 ${isRounded} ${textColor} ${
          isOutlined ? "border border-[#0075ff]" : ""
        }`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
