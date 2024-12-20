import React from "react";
import FaqSection from "../components/Faq/FaqSection";
import { Link } from "react-router-dom";

const FaqPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-[26vh] lg:h-[50vh]">
        <img
          src="/assets/faq/faq.png"
          alt="About us background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div>
        <FaqSection />
      </div>
      {/* book now section  */}
      <div>
        <div className="bg-[#e8f4f8] p-8 my-8">
          <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-14 gap-4">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-zinc-800 text-2xl lg:text-3xl font-extrabold text-center lg:text-left">
              Get A Loan Insurance & Credit Card In A Single Click And Fulfil <br /> All Your
              Requirements
            </h1>
            <Link
              to={"/sb-finance/apply-loan"}
              className="p-4 bg-gradient-to-tr from-yellow-500 to-green-500 font-bold text-2xl lg:text-4xl rounded-lg animate-bounce text-center mt-5 lg:mt-0"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
