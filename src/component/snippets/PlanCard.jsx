import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PlanCard({
  title,
  price,
  duration,
  description,
  features,
  buttonText,
  buttonClass,
  isPopular,
}) {
  const cardClass = isPopular
    ? "flex flex-col pt-5 pb-8 w-full text-white bg-[#245D51] rounded-3xl shadow-[0px_42px_34px_rgba(36,93,81,0.296)]"
    : "flex flex-col items-start w-full";
  const textClass = isPopular ? "text-white" : "text-black";

  return (
    <article
      className={`flex flex-col w-full lg:w-[340px] ${
        isPopular ? "lg:-mt-4" : "lg:mt-4"
      }`}
    >
      <div className={`${cardClass} h-full`}>
        {isPopular && (
          <div className="self-end mb-5 px-5 py-1.5 text-white mr-5 text-xs font-semibold tracking-wider text-center bg-[#CB8461] rounded-2xl">
            MOST POPULAR
          </div>
        )}
        <div
          className={`flex flex-col items-start ${
            isPopular ? "px-8" : "px-4"
          } w-full h-full`}
        >
          <div className={`flex gap-2.5 ${textClass}`}>
            <div className="text-4xl font-bold">{price}</div>
            <div
              className={`self-start mt-4 text-base leading-9 ${
                isPopular ? "text-white" : "text-black/60"
              }`}
            >
              / {duration}
            </div>
          </div>
          <h2
            className={`${
              isPopular ? "mt-3" : "mt-1"
            } text-3xl font-bold ${textClass}`}
          >
            {title}
          </h2>
          <p
            className={`my-4 text-xl leading-9 ${
              isPopular ? "text-white" : "text-black/60"
            }`}
          >
            {description}
          </p>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex gap-2.5 mt-4 text-base place-items-center ${textClass}`}
            >
              <div
                className={`${
                  isPopular ? "bg-[#EEECF9]/30" : "bg-[#EEECF9]"
                } flex justify-center items-center size-[30px] rounded-full`}
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{
                    height: "12px",
                    width: "12px",
                    color: isPopular ? "white" : "#245D51",
                  }}
                />
              </div>
              <div className="flex-1">{feature}</div>
            </div>
          ))}
          <button
            className={`w-full px-4 py-2 mt-6 text-base font-semibold leading-9 text-center ${buttonClass} rounded-3xl transition-colors duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${
              isPopular ? "#CB8461" : "transparent"
            }-400`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  );
}

export default PlanCard;
