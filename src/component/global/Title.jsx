import React from "react";

const Title = ({ text, className }) => {
  return (
    <h2
      className={`${className} font-semibold text-4xl text-black text-center mt-[80px]`}
    >
      {text}
    </h2>
  );
};

export default Title;
