import { Fragment } from "react";
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
    <Fragment>
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
    </Fragment>
  );
}

export default App;
