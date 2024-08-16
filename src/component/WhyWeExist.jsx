import React from "react";
import StatCard from "./snippets/StatCard";
import FeatureCard from "./snippets/FeatureCard";
import solid1 from "../assets/solid1.png";
import solid2 from "../assets/solid2.png";
import solid3 from "../assets/solid3.png";
import solid4 from "../assets/solid4.png";
import profile from "../assets/profile2.png";

const stats = [
  { value: "100+", label: "Updated Material" },
  { value: "15K", label: "Member Join" },
];

const features = [
  {
    icon: solid1,
    title: "Material Limitations",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: solid2,
    title: "Unprofessional Mentor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: solid3,
    title: "Video Quality",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: solid4,
    title: "High Price",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function WhyWeExist() {
  return (
    <section className="flex text-center lg:text-left gap-5 flex-col lg:flex-row px-[20px] lg:px-[7.5%] pb-[120px]">
      <div className="flex flex-col w-full md:ml-0 ">
        <div className="flex flex-col items-start w-full lg:w-[80%] md:mt-10">
          <h2 className="text-xl lg:mx-0 mx-auto lg:text-4xl font-semibold">
            <span className="text-zinc-800">Why do we</span>{" "}
            <span className="text-red-400">exist?</span>
          </h2>
          <p className="self-stretch mt-[20px] lg:mt-[30px] text-[14px] lg:text-xl leading-[30px] lg:leading-[44px] text-zinc-500">
            Because we know that many people or companies have the same problem
            when it comes to how difficult it is to improve their skills
          </p>
          <div className="flex gap-3.5 mt-8 place-items-center mx-auto lg:mx-0 text-left">
            <img
              loading="lazy"
              src={profile}
              alt="Jerony Pulquosta"
              className="object-contain shrink-0 rounded-full aspect-square w-[56px] lg:w-[71px]"
            />
            <div>
              <p className="self-start mt-3 basis-auto text-lg font-semibold text-zinc-800">
                Jerony Pulquosta
              </p>
              <p className="self-stretch mt-[0px] text-md text-zinc-500">
                CEO Skill Shoot
              </p>
            </div>
          </div>
          <hr className="shrink-0 self-stretch mt-7 w-[250px] mx-auto lg:mx-0 lg:w-full h-px border border-solid border-zinc-800 border-opacity-20 md:mr-2.5" />
          <div className="flex gap-5 justify-between mt-8 mx-auto lg:mx-0 w-[220px] lg:w-[251px]">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[100%] md:ml-0 md:w-full">
        <div className="flex flex-col w-full mt-12 lg:mt-10">
          <div className="w-full">
            <div className="flex gap-7 flex-wrap">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyWeExist;
