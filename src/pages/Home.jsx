import React from "react";
import Hero from "../components/Hero/Hero";
import LoanService from "../components/LoanService/LoanService";
import ShortTemsLoan from "../components/ShortTemsLoan/ShortTemsLoan";
import CallBackRequest from "../components/CallBackRequest/CallBackRequest";
import LoanApprovalProcess from "../components/LoanAprovel/LoanApprovalProcess";
import Rules from "../components/Rules/Rules";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Testimonial from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <LoanService />
      <ShortTemsLoan />
      <CallBackRequest />
      <LoanApprovalProcess />
      <Rules />
      <WhyChooseUs />
      <div className="py-8 my-4">
        <h1 className="text-5xl text-center text-slate-800 font-semibold">
          What Our Customers Say
        </h1>
        <p className="lg:px-56 pt-4 text-center">
          At Samast Bharat Finance (SB-Finance), customer satisfaction is our
          top priority. Over the years, we have helped countless individuals and
          businesses achieve their financial goals through our reliable and
          efficient services.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row my-8">
        {/* Left Section: Image */}
        <div className="w-full md:w-1/2 p-4 relative flex items-end justify-center">
          {/* Circle Background */}
          <div className="absolute flex items-center justify-center">
            <div className=" relative top-4 w-[380px] h-[400px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[400px] bg-gradient-to-r from-green-300 to-pink-500  rounded-full opacity-50"></div>
          </div>
          {/* Image */}
          <img
            src="/assets/Testimonial/t1.png"
            alt="Hero"
            className="w-[322px] h-[438px] sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[400px] object-cover relative z-18 rounded-full"
          />
        </div>

        {/* Right Section: Slider */}
        <div className="lg:w-1/2 w-full">
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default Home;
