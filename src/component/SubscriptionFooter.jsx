import React from "react";
import SubscriptionForm from "./snippets/SubscriptionForm";
import Footer from "./snippets/Footer";
import prettier from "../assets/prettier.png";
import prettierforphone from "../assets/ornamen.png";

function SubscriptionFooter() {
  return (
    <section className="flex flex-col rounded-none relative">
      <img
        loading="lazy"
        src={screen.availWidth < 600 ? prettierforphone : prettier}
        alt=""
        className="object-cover absolute inset-0 size-auto lg:top-[200px] top-[500px] lg:left-[200px] left-[45px]"
      />
      <div className="flex flex-col items-center px-5 pt-24 pb-10 w-full bg-[#245D51] sm:px-20 sm:pt-28 sm:max-w-full">
        <h1 className="text-[26px] lg:text-4xl text-center text-white sm:max-w-full">
          Subscribe to get notified about update
        </h1>
        <p className="text-[13px] lg:text-base leading-6 mt-[30px] lg:mt-0 lg:leading-9 text-center text-white opacity-60 sm:max-w-full">
          By subscribing with your mail, you will accept our privacy policy
        </p>
        <SubscriptionForm />
        <Footer />
      </div>
    </section>
  );
}

export default SubscriptionFooter;
