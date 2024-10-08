import React from "react";
import { theme_color } from "../styles/color";
import GenZ from "../assets/genX.png";
import lineVector from "../assets/Vector.png";
import PlayButton from "./buttons/PlayButton";
import CalendarButton from "./buttons/CalendarButton";
import PencilButton from "./buttons/PencilButton";
import JoinNowCard from "./snippets/JoinNowCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons/faUserAlt";
import { faUserCheck, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

const cardData = [
  {
    icon: faUserAlt,
    text: "15K People Join",
  },
  {
    icon: faUserCheck,
    text: "Trusted Mentor",
  },
  {
    icon: faVideo,
    text: "30+ Free Videos",
  },
  {
    icon: faPlayCircle,
    text: "100+ Premium Videos",
  },
];

const Card = ({ data }) => {
  return (
    <div className="flex place-items-center space-x-4 w-[140px] lg:w-[270px]">
      <div className="bg-[#F6E8E1] flex justify-center items-center size-[40px] lg:size-[58px] rounded-full">
        <FontAwesomeIcon
          icon={data.icon}
          style={{
            height: "24px",
            width: "24px",
            color: "#CB8461",
          }}
        />
      </div>
      <h2 className="font-bold text-[12px] lg:text-md text-black ">
        {data.text}
      </h2>
    </div>
  );
};

const LetUs = () => {
  return (
    <div
      id="About"
      className="h-auto bg-[#ffffff] px-[7.5%] flex justify-between my-[10px] pb-[20px] lg:pb-0 lg:my-[120px] place-items-end"
    >
      <div
        className={`bg-[${theme_color}] hidden lg:flex relative w-[500px] h-[340px] rounded-t-full`}
      >
        <PlayButton className={"left-[30px] top-[-170px]"} />
        <CalendarButton className={"left-[10px] top-[90px]"} />
        <PencilButton className={"left-[450px] top-[-90px]"} />
        <JoinNowCard className={"z-[999] left-[210px] top-[170px]"} />
        <img
          src={GenZ}
          className="size-auto absolute bottom-0 left-[50px]"
          alt=""
        />
      </div>
      <div className="relative w-full lg:w-[50%]">
        <img
          src={lineVector}
          className="w-[140px] absolute top-[60px] right-[130px]"
          alt=""
        />
        <h1 className="text-[26px] lg:text-6xl font-semibold text-black leading-[90px]">
          Let us <span className="text-[#245D51]">Skill Shoot</span>
        </h1>
        <h4 className="text-[14px] lg:text-xl font-normal text-[#b8b4b4] leading-[30px] lg:leading-[40px] lg:mt-[40px] w-[90%]">
          We are a company engaged in education with the aim of improving the
          skills of many people and so that younger people can reach the career
          paths they want.
        </h4>
        <h4 className="text-[14px] lg:text-xl font-normal text-[#b8b4b4] leading-[30px] lg:leading-[40px] mt-[15px] lg:mt-[30px] w-[90%]">
          we have been around since 2019 with currently 100+ updated materials
          and 15K members who have joined.
        </h4>
        <div className="mt-[40px] flex flex-wrap gap-10">
          {cardData.map((data) => (
            <Card data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LetUs;
