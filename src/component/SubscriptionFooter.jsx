import React from "react";
import SubscriptionForm from "./snippets/SubscriptionForm";
import Footer from "./snippets/Footer";

function SubscriptionFooter() {
  return (
    <section className="flex flex-col rounded-none">
      <div className="flex flex-col items-center px-5 pt-24 pb-10 w-full bg-[#245D51] sm:px-20 sm:pt-28 sm:max-w-full">
        <h1 className="text-4xl text-center text-white sm:max-w-full">
          Subscribe to get notified about update
        </h1>
        <p className="text-base leading-9 text-center text-white opacity-60 sm:max-w-full">
          By subscribing with your mail, you will accept our privacy policy
        </p>
        <SubscriptionForm />
        <Footer />
      </div>
    </section>
  );
}

export default SubscriptionFooter;
