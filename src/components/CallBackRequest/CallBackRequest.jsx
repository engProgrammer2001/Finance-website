import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CallBackRequest = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-green-500 text-[#ffeb3b] h-[50vh]">
        <img
          src="/assets/about/about.png"
          alt="About us background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 p-8 pt-16 flex flex-col md:flex-row items-center md:items-start justify-between space-y-6 md:space-y-0 lg:pt-32">
          {/* Left side for the text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mt-4">
              Looking for a First-Class Loan Consultant?
            </h1>
            <p className="mt-2 text-lg text-white">
              We are committed to delivering the best services to our clients.
              Our team works diligently to bring innovative solutions to life.
            </p>
          </div>

          {/* Right side for the button with animation */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Link
              to="tel:+91 9103521459"
              className="px-6 py-5 bg-gradient-to-r from-yellow-400 to-green-400 text-slate-800 font-bold rounded hover:from-yellow-500 hover:to-green-500 transition duration-300 hover:scale-110 focus:scale-95 focus:outline-none flex items-center space-x-2 animate-bounce"
            >
              <FaArrowCircleRight />
              <span>Request a Callback</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallBackRequest;
