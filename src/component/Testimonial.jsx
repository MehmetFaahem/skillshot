import React from "react";
import TestimonialCard from "./snippets/TestimonialCard";

const testimonials = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/76e41921589aa898ebd5d181b4085a789e1191178a289f435946a47c6e5dec85?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    name: "Jason Bay",
    review:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/07b0393185a8e942968eef92a498e6bf352d8d1b7a82dd75579901bec33cc7a4?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    name: "Nany Brugman",
    review:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
    isHighlighted: true,
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/765dfb90fad8412d9829f0ea01ac0e485e300824948b1c29805f416a3880ba68?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    name: "Alexa Nowan",
    review:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
];

const TestimonialSection = () => {
  return (
    <section className="flex flex-col justify-center items-center px-5 py-12 w-full bg-stone-50 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div className="flex flex-col items-center w-full max-w-[1174px]">
        <h2 className="text-3xl font-semibold text-center sm:text-4xl">
          <span className="text-zinc-800">What do they</span>{" "}
          <span className="text-[#CB8461]">say?</span>
        </h2>
        <p className="mt-2.5 text-base leading-9 text-center text-zinc-500 max-w-full">
          This is an honest review from members who have joined us
        </p>
        <div className="self-stretch mt-8 sm:mt-10 lg:mt-12">
          <div className="flex flex-col gap-5 sm:flex-row">
            {testimonials.map((testimonial, index) => (
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
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a297ebe052119760b7e1362de52777beb04b18b46d3406939dfaa09fa70d3f4?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b"
          alt=""
          className="object-contain mt-8 max-w-full aspect-[2.3] w-[154px] sm:mt-10 lg:mt-12"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
