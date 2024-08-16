import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col w-[90%] lg:w-[40%] md:ml-0">
      <div className="flex flex-col grow items-center lg:items-start md:mt-10">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain aspect-square w-[50px]"
        />
        <h3 className="mt-8 text-xl font-semibold text-teal-800">{title}</h3>
        <p className="self-stretch mt-[10px] text-[14px] lg:text-xl leading-[30px] lg:leading-[44px] text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
