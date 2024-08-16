import React from "react";
import { span } from "../styles/color";
import SubscribeCourseButton from "./buttons/SubscribeCourseButton";
import SquareWithShadow from "./snippets/SquareWithShadow";
import RadialCorner from "./snippets/RadialCorner";

const JoinSubscribe = () => {
  return (
    <div className="bg-[#F2E7DB]  relative items-center justify-center flex rounded-md min-h-[300px] h-auto w-[85%] mx-auto lg:mt-[170px] my-[40px] lg:my-[100px] pb-[30px] lg:pb-0">
      <RadialCorner />

      <SquareWithShadow
        color={"#CB8461"}
        className={
          "right-[-20px] lg:right-[520px] top-[170px] lg:top-[270px] rotate-[120deg]"
        }
        size={"40px"}
      />

      <div className="flex flex-col lg:flex-row place-items-start justify-between">
        <h2
          className={`font-semibold mt-[45px] lg:mt-0 text-center mx-auto lg:mx-0 leading-[30px] lg:leading-[58px] text-lg lg:text-4xl text-black lg:text-left w-[90%] lg:w-[600px]`}
        >
          <span className={span}>Improve</span> your skills, and reach your
          career as soon as possible
        </h2>
        <div className=" flex flex-col lg:flex-row lg:space-x-[20px] items-center lg:items-start mx-auto lg:mx-0 lg:ml-[20px]">
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
