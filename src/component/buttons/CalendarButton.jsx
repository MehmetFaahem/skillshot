import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CalendarButton = ({ className, fieldSize, iconSize }) => {
  return (
    <div
      className={`bg-[#23BDEE] ${className} absolute items-center flex place-content-center ${
        fieldSize ?? "size-[60px]"
      } rounded-xl rotate-[-10deg]`}
    >
      <FontAwesomeIcon
        icon={faCalendarDays}
        style={{
          color: "white",
          height: iconSize ?? "25px",
          width: iconSize ?? "25px",
        }}
      />
    </div>
  );
};

export default CalendarButton;
