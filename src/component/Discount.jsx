import React from "react";
import Child from "../assets/child.png";
import Title from "./global/Title";
import { span } from "../styles/color";
import SubscribeCourseButton from "./buttons/SubscribeCourseButton";
import RadialCorner from "./snippets/RadialCorner";
import SquareWithShadow from "./snippets/SquareWithShadow";

const Discount = () => {
  return (
    <div className="bg-[#F2E7DB] p-8 relative rounded-md min-h-[300px] h-auto w-[85%] mx-auto lg:mt-[170px] my-[50px] lg:my-[100px]">
      <div className="flex lg:hidden absolute bottom-[30px] left-[40px] flex-col items-center self-end px-1 pt-2 mt-7 bg-orange-300 rounded-full h-[22px] w-[22px]">
        <div className="flex z-10 shrink-0 rounded-full bg-red-500 bg-opacity-70 h-[17px] w-[17px] sm:-mr-0.5" />
      </div>
      <RadialCorner />
      <SquareWithShadow
        color={"#14463A"}
        className={"hidden lg:flex right-[480px] top-[70px]"}
        size={"60px"}
      />
      <SquareWithShadow
        color={"#CB8461"}
        className={"hidden lg:flex  right-[120px] top-[70px] rotate-[120deg]"}
        size={"40px"}
      />
      <SquareWithShadow
        color={"#347366"}
        className={"hidden lg:flex right-[160px] bottom-[30px] rotate-[120deg]"}
        size={"40px"}
      />
      <div className="absolute bottom-[0px] right-[0px] bg-transparent size-[50px] lg:size-[130px] rounded-md overflow-hidden">
        <div className="bg-[#245D51] absolute bottom-[-24px] right-[-24px] size-[67px] lg:size-[100px] rounded-full" />
      </div>
      <div className="mt-6 lg:pl-7 flex flex-col lg:items-start lg:justify-start justify-center items-center">
        <h2
          className={`font-semibold leading-[30px] lg:leading-[58px] text-center text-xl lg:text-4xl text-black lg:text-left w-full lg:w-[40vw]`}
        >
          Happy <span className={span}>Chinese New Year</span>, 20% discount for
          you today
        </h2>
        <SubscribeCourseButton />
      </div>
      <img
        src={Child}
        className="size-auto hidden lg:flex absolute right-[200px] top-[-133px]"
        alt=""
      />
    </div>
  );
};

export default Discount;
