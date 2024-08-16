import React from "react";
import profile from "../../assets/profile.png";

const JoinNowCard = ({ className }) => {
  return (
    <div
      className={`bg-white/80 flex flex-col justify-center space-y-3 rounded-xl absolute ${className} backdrop-blur-sm w-[260px] h-[140px]`}
    >
      <div className="flex justify-center  items-center space-x-3">
        <img src={profile} className="size-[40px]" alt="" />
        <div>
          <h1 className="text-[#2C2C2C] font-bold text-sm">
            Learn basic ui ux design
          </h1>
          <h1 className="text-[#2C2C2C] font-light text-sm">Today at 12 PM</h1>
        </div>
      </div>
      <a
        href="#"
        className="bg-[#FF4F8E] text-white px-4 py-2 w-[110px] ml-[71px] rounded-md"
      >
        Join Now
      </a>
    </div>
  );
};

export default JoinNowCard;
