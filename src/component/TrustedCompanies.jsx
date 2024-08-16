import React from "react";
import Paragraph from "./global/Paragraph";
import Logo1 from "../assets/image 11.png";
import Logo2 from "../assets/image 12.png";
import Logo3 from "../assets/image 13.png";
import Logo4 from "../assets/image 14.png";
import Logo5 from "../assets/image 15.png";

const TrustedCompanies = () => {
  return (
    <div className="flex flex-col justify-center items-center h-auto lg:h-[400px]">
      <h2 className="font-semibold text-xl lg:text-4xl text-black text-center mt-[50px] lg:mt-[80px]">
        Trusted more than <span className="text-[#CB8461]">100+</span> in the
        world
      </h2>
      <Paragraph
        className="text-center w-[90%] lg:w-[50%]"
        text="
        they have asked us more than 3 times to teach their employees about
        various things. to improve their skills"
      />
      <div className="flex flex-wrap place-items-center place-content-center justify-center items-center gap-[50px] lg:gap-[80px] mt-8 lg:mt-14">
        {[Logo1, Logo2, Logo3, Logo4, Logo5].map((img) => (
          <img src={img} alt="" className="w-[140px]" />
        ))}
      </div>
    </div>
  );
};

export default TrustedCompanies;
