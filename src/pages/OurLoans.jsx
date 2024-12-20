import React from "react";
import { Link, useNavigate } from "react-router-dom";
import loanOptions from "../data/LoanData";
import EmiCalculator from "../components/EmiCalculator/EmiCalculator";
import EligibilityCriteria from "../components/EligibilityCriteria/EligibilityCriteria";
import ApplyForLoan from "../components/ApplyForLoan/ApplyForLoan";
import FaqSection from "../components/Faq/FaqSection";

const OurLoans = () => {
  const navigate = useNavigate();

  const handleRedirect = (id) => {
    navigate(`/loan-detail/${id}`);
  };

  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-zinc-800 text-4xl lg:text-5xl text-center my-10 font-extrabold">
          Choose Your Loans
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loanOptions.map((loan) => (
            <div
              key={loan.id}
              className="relative group bg-gradient-to-r from-yellow-500 to-green-500 text-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => handleRedirect(loan.id)}
            >
              <img
                src={loan.image}
                alt={loan.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold group-hover:text-yellow-300">
                  {loan.title}
                </h2>
                <p className="text-sm mt-2">{loan.shortDescription}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                <button className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* emi calculator  */}
      <div>
        <EmiCalculator />
      </div>
      {/* eligiibilty criteria */}
      <div>
        <EligibilityCriteria />
      </div>
      {/* ApplyForLoan section  */}
      <div>
        <ApplyForLoan />
      </div>
      {/* Faq section  */}
      <div>
        <FaqSection />
      </div>
      <div>
        <div
          className="p-8 my-8"
          style={{
            backgroundImage: "url('/assets/loanImaes/l1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-14 gap-4">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-zinc-800 text-2xl lg:text-5xl font-extrabold text-center lg:text-left">
              Get A Loan In A Single Click And Fulfil <br /> All Your
              Requirements
            </h1>
            <Link
              to="/sb-finance/apply-loan"
              className="p-4 bg-gradient-to-tr from-yellow-500 to-green-500 font-bold text-2xl lg:text-4xl rounded-lg animate-bounce text-center mt-5 lg:mt-0"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurLoans;
