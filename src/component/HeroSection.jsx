import React from "react";
import Header from "./global/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import lineVector from "../assets/Vector.png";
import GenZ from "../assets/genz.png";
import PencilButton from "./buttons/PencilButton";
import PlayButton from "./buttons/PlayButton";
import CalendarButton from "./buttons/CalendarButton";
import JoinNowCard from "./snippets/JoinNowCard";

const HeroSection = () => {
  return (
    <div
      id="Home"
      className="bg-[#245D51] w-[100%] h-auto p-6 px-[24px] lg:px-[75px] overflow-hidden"
    >
      <Header />
      <div className="mt-[80px] flex flex-col lg:flex-row place-content-center justify-between">
        <div className="w-full lg:w-[40%] relative">
          <img
            src={lineVector}
            className="w-[130px] lg:w-[230px] absolute top-[50px] lg:top-[80px] right-[30px] lg:right-[80px]"
            alt=""
          />
          <h1 className="text-4xl lg:text-6xl text-center lg:text-left font-medium lg:font-semibold text-white leading-[60px] lg:leading-[90px]">
            There is always something new for us to learn
          </h1>
          <h4 className="text-[13px] lg:text-xl text-center lg:text-left font-normal text-[#b8b4b4] leading-[35px] lg:leading-[40px] mt-[20px]">
            we have created more than 100+ materials on various things that will
            help your career, with mentors who are experienced in their fields.
          </h4>
          <div className="mt-4 flex flex-col lg:flex-row place-items-center space-x-0 space-y-6 lg:space-y-0 lg:space-x-5">
            <a
              href="#"
              className="bg-[#CB8461] text-white w-[155px] font-bold px-2 py-2 rounded flex place-items-center space-x-3"
            >
              <span>Start Journey</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={15}
                width={15}
                fill="white"
                viewBox="0 0 512 512"
              >
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
              </svg>
            </a>
            <div className="flex place-items-center space-x-5">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{
                  color: "white",
                  height: "30px",
                  width: "30px",
                }}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                style={{
                  color: "white",
                  height: "30px",
                  width: "30px",
                }}
              />
              <FontAwesomeIcon
                icon={faDiscord}
                style={{
                  color: "white",
                  height: "30px",
                  width: "30px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] relative">
          <PencilButton
            fieldSize={"size-[40px]"}
            iconSize={"15px"}
            className="top-[-460px] lg:top-10 lg:right-[450px] lg:left-auto left-[0px]"
          />
          <PlayButton
            fieldSize={"size-[40px]"}
            iconSize={"15px"}
            className="top-[-50px] lg:top-[150px] right-[0px] lg:left-[350px]"
          />
          <CalendarButton
            fieldSize={"size-[40px]"}
            iconSize={"15px"}
            className="bottom-12 left-[0px] lg:left-[380px] "
          />
          <img
            src={GenZ}
            alt=""
            className="size-auto hidden lg:flex absolute bottom-[-30px]"
          />
          <JoinNowCard className="top-[220px] left-[-130px] hidden lg:flex" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
