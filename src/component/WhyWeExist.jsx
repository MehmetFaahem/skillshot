import React from "react";
import StatCard from "./snippets/StatCard";
import FeatureCard from "./snippets/FeatureCard";

const stats = [
  { value: "100+", label: "Updated Material" },
  { value: "15K", label: "Member Join" },
];

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa825a08c4180585dfc848ae3bf55f53ba72a3150402934d137cce87237ffeba?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    title: "Material Limitations",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45ea07d7db50231b6f6f320f241e90096d52c3abc982167901fc32ecd964b563?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    title: "Unprofessional Mentor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/55ada8372dce451b655c1c27fa36b3e2a09b01f6d4ad6cf76618847cdd3dd51d?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    title: "Video Quality",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a2af1e7b8ee23502edfe6f97d719ad74d364849d6ca47ceb50360886eeab0c9?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    title: "High Price",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function WhyWeExist() {
  return (
    <section className="flex gap-5 md:flex-row px-[7.5%] pb-[120px]">
      <div className="flex flex-col w-full md:ml-0 ">
        <div className="flex flex-col items-start w-[80%] md:mt-10">
          <h2 className="text-4xl font-semibold">
            <span className="text-zinc-800">Why do we</span>{" "}
            <span className="text-red-400">exist?</span>
          </h2>
          <p className="self-stretch mt-[30px] text-xl leading-[44px] text-zinc-500">
            Because we know that many people or companies have the same problem
            when it comes to how difficult it is to improve their skills
          </p>
          <div className="flex gap-3.5 mt-8 place-items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/031f2091102ffd288c173ff54da2efe1a996b9717bce3003aae0e8cd293ac703?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b"
              alt="Jerony Pulquosta"
              className="object-contain shrink-0 rounded-full aspect-square w-[71px]"
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
          <hr className="shrink-0 self-stretch mt-7 w-full h-px border border-solid border-zinc-800 border-opacity-20 md:mr-2.5" />
          <div className="flex gap-5 justify-between mt-8 w-[251px]">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[100%] md:ml-0 md:w-full">
        <div className="flex flex-col w-full md:mt-10">
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
