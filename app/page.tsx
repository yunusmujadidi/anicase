import React from "react";
import HeroSection from "./HeroSection";
import ReviewSection from "./ReviewSection";
import CheckSection from "./CheckSection";

const page = () => {
  return (
    <div className="bg-slate-50">
      <HeroSection />
      <ReviewSection />
      <CheckSection />
    </div>
  );
};

export default page;
