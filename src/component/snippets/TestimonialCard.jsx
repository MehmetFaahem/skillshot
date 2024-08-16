import React from "react";
import star from "../../assets/star.png";

const TestimonialCard = ({ imageSrc, name, review, isHighlighted = false }) => {
  return (
    <div
      className={`flex flex-col items-center text-center ${
        isHighlighted ? "py-12 bg-white rounded-xl" : "self-stretch my-auto"
      }`}
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt={`Portrait of ${name}`}
        className="object-contain rounded-full aspect-square w-[75px]"
      />
      <img
        loading="lazy"
        src={star}
        alt=""
        className="object-contain mt-4 max-w-full aspect-[8.26] w-[107px]"
      />
      <h3 className="mt-6 text-2xl text-zinc-800">{name}</h3>
      <p
        className={`mt-2.5 text-[14px] lg:text-base leading-[35px] lg:leading-9 text-zinc-500 ${
          isHighlighted ? "w-[318px]" : "self-stretch"
        }`}
      >
        {review}
      </p>
      {isHighlighted && (
        <div className="flex shrink-0 self-stretch mt-3 h-1.5 bg-teal-800 rounded-xl" />
      )}
    </div>
  );
};

export default TestimonialCard;
