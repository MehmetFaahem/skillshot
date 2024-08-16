import React from "react";
import user from "../../assets/bx-user 1.png";

function CourseCard({
  title,
  image,
  icon,
  instructor,
  participants,
  price,
  videoCount,
}) {
  return (
    <article className="flex flex-col lg:w-[30%] w-full z-[999]">
      <div className="flex flex-col lg:pb-6 bg-white rounded-t-2xl h-[370px] lg:h-[430px]">
        <div className="flex  relative flex-col justify-center items-center px-16 py-20 w-full rounded-2xl aspect-[1.659] sm:px-5">
          <img
            loading="lazy"
            src={image}
            alt=""
            className="object-cover absolute inset-0 h-[230px] lg:h-[250px] w-full rounded-t-2xl"
          />
          <div className="flex relative gap-5 items-center p-3 bg-white bg-opacity-20 h-[84px] rounded-[200px] w-[84px]">
            <img
              loading="lazy"
              src={icon}
              alt=""
              className="object-contain aspect-square w-[60px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-start pr-4 lg:pr-16 pl-7 lg:mt-7 w-full sm:px-5">
          <h3 className="text-[18px] lg:text-2xl font-semibold text-zinc-800 h-[50px] lg:h-[70px]">
            {title}
          </h3>
          <div className="flex gap-5 justify-between mt-5 w-full">
            <div className="flex gap-2.5">
              <img
                loading="lazy"
                src={instructor.avatar}
                alt={`${instructor.name}'s avatar`}
                className="object-contain shrink-0 rounded-full aspect-square w-[30px] lg:w-[45px]"
              />
              <div className="flex flex-col my-auto">
                <div className="text-[12px] lg:text-sm font-medium text-zinc-800">
                  {instructor.name}
                </div>
                <div className="self-start text-xs text-zinc-500">
                  {instructor.role}
                </div>
              </div>
            </div>
            <div className="flex gap-1.5 my-auto font-medium whitespace-nowrap">
              <img
                loading="lazy"
                src={user}
                alt=""
                className="object-contain shrink-0 my-auto aspect-square w-[24px] lg:w-[35px]"
              />
              <div className="flex flex-col">
                <div className="self-start text-[12px] lg:text-base text-zinc-800">
                  {participants}
                </div>
                <div className="text-xs text-zinc-500">Participant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between px-8 py-3 lg:py-5 w-full font-semibold rounded-b-2xl bg-neutral-50 sm:px-5">
        <button className="gap-4 self-stretch px-3 lg:px-6 py-1 lg:py-3 text-xs leading-8 text-white bg-teal-800 rounded-xl sm:px-5">
          Buy Now
        </button>
        <div className="my-auto text-lg text-zinc-800">
          <span className="text-2xl leading-9">${price}</span>
          <span className="text-xs leading-8 text-zinc-500">
            {" "}
            /{videoCount} Video
          </span>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
