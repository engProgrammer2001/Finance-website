import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-wrap items-center justify-center bg-gradient-to-t from-green-400 via-yellow-500 to-slate-800 text-white h-[950px] lg:h-[750px] relative overflow-hidden z-10">
      {/* Left Part: Text */}
      <div className="w-full md:w-1/2 px-4 mt-10">
        <h3 className="text-xl font-semibold mb-4">
          <span className="text-green-500 p-1 bg-zinc-800 rounded font-bold mx-2">
            #01
          </span>
          Full fill Your Dreams with{" "}
          <span className="text-green-500 lg:text-zinc-800 lg:text-2xl">
            SB-Finance
          </span>
        </h3>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Financial Short-Term Loan Quickly Whenever You Need
        </h1>
        <p className="text-lg">
          SB-Finance (Samast Bharat Finance) is here to make your financial
          needs simple and easy. We provide all kinds of loans, credit cards,
          and insurance services to support you at every step. Our team works to
          give you the best options so you can focus on your dreams without
          worry.
        </p>
        <div className=" my-4">
          <Link
            to={"/sb-finance/apply-loan"}
            className="bg-green-500 lg:bg-slate-800 hover:bg-green-600 lg:hover:bg-slate-900 text-white text-lg px-8 py-3 font-bold rounded animate-bounce"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Right Part: Image */}
      <div className="w-full md:w-1/2 p-4 relative flex items-end justify-center">
        {/* Circle Background */}
        <div className="absolute flex items-center justify-center">
          <div className="w-[486px] h-[486px] sm:w-[400px] sm:h-[400px] md:w-[700px] md:h-[700px] bg-zinc-700 rounded-full opacity-50"></div>
        </div>
        {/* Image */}
        <img
          src="/assets/hero/img1.png"
          alt="Hero"
          className="w-[355px] h-[478px] sm:w-[300px] sm:h-[300px] md:w-[600px] md:h-[800px] object-cover rounded-lg relative z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
