import React from "react";

const Paragraph = ({ text, className }) => {
  return (
    <h4
      className={`${className} text-[14px] lg:text-xl font-normal text-[#b8b4b4] leading-[30px] lg:leading-[40px] mt-[20px]`}
    >
      {text}
    </h4>
  );
};

export default Paragraph;
