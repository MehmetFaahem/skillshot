import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PencilButton = ({ className, fieldSize, iconSize }) => {
  return (
    <div
      className={`bg-[#F88C3D] absolute ${className} items-center flex place-content-center ${
        fieldSize ?? "size-[60px]"
      } rounded-xl rotate-[-10deg]`}
    >
      <FontAwesomeIcon
        icon={faPencil}
        style={{
          color: "white",
          height: iconSize ?? "25px",
          width: iconSize ?? "25px",
        }}
      />
    </div>
  );
};

export default PencilButton;
