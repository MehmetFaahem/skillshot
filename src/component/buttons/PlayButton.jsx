import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PlayButton = ({ className }) => {
  return (
    <div
      className={`bg-[#7252A4] absolute ${className} items-center flex place-content-center size-[60px] rounded-xl rotate-[10deg]`}
    >
      <FontAwesomeIcon
        icon={faCirclePlay}
        style={{
          color: "white",
          height: "25px",
          width: "25px",
        }}
      />
    </div>
  );
};

export default PlayButton;
