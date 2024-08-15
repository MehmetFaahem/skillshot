import React from "react";
import Child from "../assets/child.png";
import Title from "./global/Title";
import { span } from "../styles/color";
import SubscribeCourseButton from "./buttons/SubscribeCourseButton";
import RadialCorner from "./snippets/RadialCorner";
import SquareWithShadow from "./snippets/SquareWithShadow";

const Discount = () => {
  return (
    <div className="bg-[#F2E7DB] p-8 relative rounded-md min-h-[300px] h-auto w-[85%] mx-auto mt-[170px] my-[100px]">
      <RadialCorner />
      <SquareWithShadow
        color={"#14463A"}
        className={" right-[480px] top-[70px]"}
        size={"60px"}
      />
      <SquareWithShadow
        color={"#CB8461"}
        className={"right-[120px] top-[70px] rotate-[120deg]"}
        size={"40px"}
      />
      <SquareWithShadow
        color={"#347366"}
        className={"right-[160px] bottom-[30px] rotate-[120deg]"}
        size={"40px"}
      />
      <div className="absolute bottom-[0px] right-[0px] bg-transparent size-[130px] rounded-md overflow-hidden">
        <div className="bg-[#245D51] absolute bottom-[-24px] right-[-24px] size-[100px] rounded-full" />
      </div>
      <div className="mt-6 pl-7">
        <h2
          className={`font-semibold leading-[58px] text-4xl text-black text-left w-[40vw]`}
        >
          Happy <span className={span}>Chinese New Year</span>, 20% discount for
          you today
        </h2>
        <SubscribeCourseButton />
      </div>
      <img
        src={Child}
        className="size-auto absolute right-[200px] top-[-133px]"
        alt=""
      />
    </div>
  );
};

export default Discount;
