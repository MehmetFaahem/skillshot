import React from "react";
import PlanCard from "./snippets/PlanCard";

const plans = [
  {
    title: "Base",
    price: "$50",
    duration: "1 month",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: [
      "Access all videos",
      "Get Certificate",
      "Chat support",
      "Update Notification",
      "Download material",
    ],
    buttonText: "Choose plan",
    buttonClass: "bg-transparent text-[#CB8461]",
    isPopular: false,
  },
  {
    title: "Pro",
    price: "$100",
    duration: "6 month",
    description: "Lorem Ipsum is simply dummy text of the printing",
    features: [
      "Access all videos",
      "Get Certificate",
      "Chat support",
      "Update Notification",
      "Download material",
    ],
    buttonText: "Choose plan",
    buttonClass: "bg-[#CB8461] text-white",
    isPopular: true,
  },
  {
    title: "Enterprise",
    price: "$200",
    duration: "12month",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: [
      "Access all videos",
      "Get Certificate",
      "Chat support",
      "Update Notification",
      "Download material",
    ],
    buttonText: "Choose plan",
    buttonClass: "bg-transparent text-[#CB8461]",
    isPopular: false,
  },
];

function SubscriptionPlans() {
  const sortedPlans =
    screen.availWidth < 600
      ? [...plans].sort((a, b) => b.isPopular - a.isPopular)
      : plans;

  return (
    <main className="flex flex-col mb-[50px] lg:mb-[160px] items-center rounded-none w-[85%] place-items-center place-content-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-[26px] lg:text-4xl font-semibold text-zinc-800">
          <span className="text-[#CB8461]">Subscribe</span>{" "}
          <span className="text-zinc-800">with us now</span>
        </h1>
        <p className="mt-[30px] lg:mt-2.5 text-[13px] lg:text-base leading-[34px] lg:leading-9 text-zinc-500 max-w-[545px] mx-auto">
          by subscribing now you will be able to access the material easily and
          cheaply, so you will be very efficient and benefit
        </p>
      </header>
      <section className="mt-7 w-full lg:mt-16 mx-auto flex">
        <div className="flex flex-col lg:flex-row gap-[80px] lg:gap-5 mx-auto place-items-end">
          {sortedPlans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default SubscriptionPlans;
