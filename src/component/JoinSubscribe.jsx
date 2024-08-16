import React from "react";
import { span } from "../styles/color";
import SubscribeCourseButton from "./buttons/SubscribeCourseButton";
import SquareWithShadow from "./snippets/SquareWithShadow";
import RadialCorner from "./snippets/RadialCorner";

const JoinSubscribe = () => {
  return (
    <div className="bg-[#F2E7DB]  relative items-center justify-center flex rounded-md min-h-[300px] h-auto w-[85%] mx-auto mt-[170px] my-[100px]">
      <RadialCorner />

      <SquareWithShadow
        color={"#CB8461"}
        className={"right-[520px] top-[270px] rotate-[120deg]"}
        size={"40px"}
      />

      <div className="flex place-items-start justify-between">
        <h2
          className={`font-semibold leading-[58px] text-4xl text-black text-left w-[600px]`}
        >
          <span className={span}>Improve</span> your skills, and reach your
          career as soon as possible
        </h2>
        <div className=" flex space-x-[20px] ml-[20px]">
          <button className="bg-[#CB8461] mt-[35px] rounded-md text-white font-semibold text-xl w-[180px] h-[60px] justify-center items-center">
            <p>Join Now</p>
          </button>
          <SubscribeCourseButton />
        </div>
      </div>
    </div>
  );
};

export default JoinSubscribe;
