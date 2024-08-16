import React, { useState } from "react";

function SubscriptionForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted email:", email);
  };

  return (
    <div className="flex relative flex-col items-center px-5 pt-14 pb-3 mt-2 w-full text-white leading-[50px] max-w-[1098px] min-h-[129px] sm:px-16 sm:max-w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mx-auto items-center lg:flex-row relative flex-wrap gap-4 max-w-full w-full lg:w-[555px]"
      >
        <label htmlFor="emailInput" className="sr-only">
          Enter your email
        </label>
        <input
          id="emailInput"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="grow outline-none border-2 text-white border-white/60 px-5 py-[6px] bg-[#245D51] rounded w-[100%] lg:w-fit sm:px-8 "
          aria-label="Enter your email"
          required
        />
        <button
          type="submit"
          className="px-7 py-[12px] lg:py-[20px] text-lg font-medium tracking-tight bg-[#CB8461] rounded sm:px-6"
        >
          Subscribe us
        </button>
      </form>
    </div>
  );
}

export default SubscriptionForm;
