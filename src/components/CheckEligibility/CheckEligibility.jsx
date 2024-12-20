import React from "react";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { MdScore } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";


const CheckEligibility = () => {
  return (
    <div id="check_eligibility" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto ">
        <div className="py-12">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-zinc-800 text-2xl lg:text-3xl font-bold text-center">
            <span className="text-4xl">Personal Loan</span> Eligibility Criteria
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Eligibility Item */}
          <div className="flex flex-col items-center border-8 p-6 bg-orange-400 rounded-full">
            <FaAmericanSignLanguageInterpreting className="text-5xl text-slate-800" />
            <h2 className="text-2xl text-slate-800 py-4 font-bold text-center">
              Your Age should be 21 Years to 65 Years
            </h2>
          </div>

          {/* Employment */}
          <div className="flex flex-col items-center border-8 p-6 bg-orange-400 rounded-full">
            <RiMoneyRupeeCircleFill className="text-5xl text-slate-800" />
            <h2 className="text-2xl text-slate-800 py-4 font-bold text-center">
              Employment Salaried Employees
            </h2>
          </div>

          {/* CIBIL Score */}
          <div className="flex flex-col items-center border-8 p-6 bg-orange-400 rounded-full">
            <MdScore className="text-5xl text-slate-800" />
            <h2 className="text-2xl text-slate-800 py-4 font-bold text-center">
              CIBIL score 650 or above to get any Loan
            </h2>
          </div>

          {/* Monthly Salary */}
          <div className="flex flex-col items-center border-8 p-6 bg-orange-400 rounded-full">
            <FaMoneyCheckAlt className="text-5xl text-slate-800" />
            <h2 className="text-2xl text-slate-800 py-4 font-bold text-center">
              Starting Monthly salary should be Rs. 30,000 For Banks and Rs. 15,000 for
              NBFCS
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEligibility;
