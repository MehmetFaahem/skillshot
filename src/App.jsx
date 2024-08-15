import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./component/HeroSection";
import TrustedCompanies from "./component/TrustedCompanies";
import Discount from "./component/Discount";
import WhyWeExist from "./component/WhyWeExist";
import PopularCourses from "./component/PopularCourses";

function App() {
  return (
    <>
      <HeroSection />
      <TrustedCompanies />
      <Discount />
      <WhyWeExist />
      <PopularCourses />
    </>
  );
}

export default App;
