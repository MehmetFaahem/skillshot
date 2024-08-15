import React from "react";

const SquareWithShadow = ({ className, color, size }) => {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        width: size,
        height: size,
      }}
    >
      <div
        style={{
          backgroundColor: color,
          width: size,
          height: size,
        }}
      />
      <div
        style={{
          borderColor: color,
          borderWidth: "2px",
          position: "absolute",
          bottom: "-10px",
          right: "-7px",
          width: size,
          height: size,
          zIndex: 1000,
        }}
      />
    </div>
  );
};

export default SquareWithShadow;
