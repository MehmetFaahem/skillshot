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
import {
  faCalendarDays,
  faCirclePlay,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../assets/profile.png";

const HeroSection = () => {
  return (
    <div className="bg-[#245D51] w-[100%] h-[680px] p-6">
      <Header />
      <div className="mt-[80px] flex flex-row place-content-center justify-between">
        <div className="w-[40%] relative">
          <img
            src={lineVector}
            className="w-[240px] absolute top-[80px] right-[120px]"
            alt=""
          />
          <h1 className="text-6xl font-semibold text-white leading-[90px]">
            There is always something new for us to learn
          </h1>
          <h4 className="text-xl font-normal text-[#b8b4b4] leading-[40px] mt-[20px]">
            we have created more than 100+ materials on various things that will
            help your career, with mentors who are experienced in their fields.
          </h4>
          <div className="mt-4 flex place-items-center space-x-5">
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
        <div className="w-[40%] relative">
          <div className="bg-[#F88C3D] absolute top-10 items-center flex place-content-center size-[60px] rounded-xl rotate-[-10deg]">
            <FontAwesomeIcon
              icon={faPencil}
              style={{
                color: "white",
                height: "25px",
                width: "25px",
              }}
            />
          </div>
          <div className="bg-[#7252A4] absolute top-[150px] left-[320px] items-center flex place-content-center size-[60px] rounded-xl rotate-[10deg]">
            <FontAwesomeIcon
              icon={faCirclePlay}
              style={{
                color: "white",
                height: "25px",
                width: "25px",
              }}
            />
          </div>
          <div className="bg-[#23BDEE] absolute bottom-12 left-[380px] items-center flex place-content-center size-[60px] rounded-xl rotate-[-10deg]">
            <FontAwesomeIcon
              icon={faCalendarDays}
              style={{
                color: "white",
                height: "25px",
                width: "25px",
              }}
            />
          </div>
          <img src={GenZ} alt="" className="size-auto" />
          <div className="bg-white/80 flex flex-col justify-center space-y-3 rounded-xl absolute top-[220px] left-[-130px] backdrop-blur-sm w-[260px] h-[140px]">
            <div className="flex justify-center  items-center space-x-3">
              <img src={profile} className="size-[40px]" alt="" />
              <div>
                <h1 className="text-[#2C2C2C] font-bold text-sm">
                  Learn basic ui ux design
                </h1>
                <h1 className="text-[#2C2C2C] font-light text-sm">
                  Today at 12 PM
                </h1>
              </div>
            </div>
            <a
              href="#"
              className="bg-[#FF4F8E] text-white px-4 py-2 w-[110px] ml-[71px] rounded-md"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
