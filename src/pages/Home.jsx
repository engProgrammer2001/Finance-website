import React from "react";
import Hero from "../components/Hero/Hero";
import LoanService from "../components/LoanService/LoanService";
import ShortTemsLoan from "../components/ShortTemsLoan/ShortTemsLoan";
import CallBackRequest from "../components/CallBackRequest/CallBackRequest";
import LoanApprovalProcess from "../components/LoanAprovel/LoanApprovalProcess";
import Rules from "../components/Rules/Rules";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Testimonial from "../components/Testimonials/Testimonials";
import ContactForm from "../components/ContactForm/ContactForm";

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
      <div className="py-8">
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
      <div className="flex flex-col lg:flex-row">
        {/* Left Section: Image */}
        <div className="w-full md:w-1/2 p-4 relative flex items-end justify-center">
          {/* Circle Background */}
          <div className="absolute flex items-center justify-center">
            <div className=" relative top-4 w-[400px] h-[400px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-green-300 to-pink-500  rounded-full opacity-50"></div>
          </div>
          {/* Image */}
          <img
            src="/assets/Testimonial/t1.png"
            alt="Hero"
            className="w-[330px] h-[478px] sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[400px] object-cover relative z-18 rounded-full"
          />
        </div>

        {/* Right Section: Slider */}
        <div className="lg:w-1/2 w-full">
          <Testimonial />
        </div>
      </div>
      <div className="bg-[#e8f4f8] mt-6">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffeb3b] to-zinc-800 text-4xl lg:text-5xl text-center font-extrabold pt-16">
          Reach out to me{" "}
        </h1>
        <div className="flex flex-col lg:flex-row">
          {/* Left Section: Image */}
          <div className="w-full md:w-1/2 p-4 relative flex items-end justify-center">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409377.0553719105!2d-74.30932477148002!3d40.69701929469058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sin!4v1733999701658!5m2!1sen!2sin"
              width="660"
              height="560"
              className="bg-white p-4 rounded-lg "
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Right Section: Slider */}
          <div className="lg:w-1/2 w-full mr-4 mb-4 ">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
