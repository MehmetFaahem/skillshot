import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./component/HeroSection";
import TrustedCompanies from "./component/TrustedCompanies";
import Discount from "./component/Discount";
import WhyWeExist from "./component/WhyWeExist";
import PopularCourses from "./component/PopularCourses";
import LetUs from "./component/LetUs";
import JoinSubscribe from "./component/JoinSubscribe";
import SubscriptionPlans from "./component/SubscriptionsPlans";
import Testimonial from "./component/Testimonial";
import SubscriptionFooter from "./component/SubscriptionFooter";

function App() {
  return (
    <>
      <HeroSection />
      <TrustedCompanies />
      <Discount />
      <WhyWeExist />
      <PopularCourses />
      <LetUs />
      <JoinSubscribe />
      <SubscriptionPlans />
      <Testimonial />
      <SubscriptionFooter />
    </>
  );
}

export default App;
