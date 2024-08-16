import React from "react";
import TestimonialCard from "./snippets/TestimonialCard";
import avatar1 from "../assets/profile4.png";
import avatar2 from "../assets/profile5.png";
import avatar3 from "../assets/profile6.png";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SquareWithShadow from "./snippets/SquareWithShadow";

const testimonials = [
  {
    imageSrc: avatar1,
    name: "Jason Bay",
    review:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
    isHighlighted: false,
  },
  {
    imageSrc: avatar2,
    name: "Nany Brugman",
    review:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
    isHighlighted: true,
  },
  {
    imageSrc: avatar3,
    name: "Alexa Nowan",
    review:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
    isHighlighted: false,
  },
];

const TestimonialSection = () => {
  const sorted =
    screen.availWidth < 600
      ? [...testimonials].filter((a) => a.isHighlighted)
      : testimonials;
  return (
    <section className="flex relative flex-col justify-center items-center px-5 py-[50px] lg:py-12 w-full bg-stone-50 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div className="flex lg:hidden opacity-100 rotate-[-30deg] absolute top-[20px] right-[40px] flex-col items-center self-end px-1 pt-2 mt-7 bg-green-800/90 rounded-full h-[22px] w-[22px]">
        <div className="flex z-10 shrink-0 rounded-full bg-green-800/60 bg-opacity-70 h-[17px] w-[17px] sm:-mr-0.2" />
      </div>
      <div className="flex flex-col items-center w-full max-w-[1174px]">
        <h2 className="text-[16px] lg:text-3xl font-semibold text-center sm:text-4xl">
          <span className="text-zinc-800">What do they</span>{" "}
          <span className="text-[#CB8461]">say?</span>
        </h2>
        <SquareWithShadow
          color={"#245D51"}
          className={"flex lg:hidden left-[35px] top-[43px] rotate-[100deg]"}
          size={"30px"}
        />
        <p className="mt-[30px] lg:mt-2.5 text-[14px] lg:text-base leading-[30px] lg:leading-9 text-center text-zinc-500 max-w-[90%]">
          This is an honest review from members who have joined us
        </p>
        <div className="self-stretch mt-8 sm:mt-10 lg:mt-12">
          <div className="flex flex-col gap-5 sm:flex-row">
            {sorted.map((testimonial, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index === 1 ? "sm:w-2/5" : "sm:w-[30%]"
                } w-full`}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex space-x-[20px] place-items-center mt-[50px]">
        <button className="cursor-pointer justify-center items-center flex bg-[#ffffff] size-[50px] rounded-full border-[#F5F5F5] border-[4px]">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{
              width: "25px",
              height: "25px",
              color: "black",
            }}
          />
        </button>
        <button className="justify-center items-center flex bg-[#CB8461] size-[50px] rounded-full border-[#F5F5F5] border-[4px]">
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{
              width: "25px",
              height: "25px",
              color: "white",
            }}
          />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
