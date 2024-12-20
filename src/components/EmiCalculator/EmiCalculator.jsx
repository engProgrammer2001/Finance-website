import React, { useState } from "react";

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(11);
  const [loanTenure, setLoanTenure] = useState(3);
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const calculateEMI = () => {
    const monthlyInterestRate = interestRate / 12 / 100;
    const tenureInMonths = loanTenure * 12;
    const emiValue =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, tenureInMonths)) /
      (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1);
    const totalPaymentValue = emiValue * tenureInMonths;
    const totalInterestValue = totalPaymentValue - loanAmount;

    setEmi(emiValue.toFixed(2));
    setTotalPayment(totalPaymentValue.toFixed(2));
    setTotalInterest(totalInterestValue.toFixed(2));
  };

  return (
    <div className="flex items-center justify-center p-4 my-6 py-8 bg-[#e8f4f8]">
      <div className="bg-white w-full shadow-lg rounded-lg p-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-center mb-4">
          EMI Calculator
        </h1>
        {/* Loan Amount Slider */}
        <div className="mb-4">
          <label className="block text-green-700 mb-2 font-medium">
            Loan Amount (₹)
          </label>
          <input
            type="range"
            min="50000"
            max="10000000"
            step="10000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full appearance-none h-3 bg-gray-200 rounded-lg outline-none"
            style={{
              background: `linear-gradient(to right, #f97316 ${
                ((loanAmount - 100000) / (10000000 - 100000)) * 100
              }%, #e5e7eb ${
                ((loanAmount - 100000) / (10000000 - 100000)) * 100
              }%)`,
            }}
          />
          <div className="text-center mt-2 font-extrabold text-green-600 text-2xl">
            ₹{loanAmount}
          </div>
        </div>
        {/* Interest Rate Slider */}
        <div className="mb-4">
          <label className="block text-green-700 mb-2 font-medium">
            Annual Interest Rate (%)
          </label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full appearance-none h-3 bg-gray-200 rounded-lg outline-none"
            style={{
              background: `linear-gradient(to right, #f97316 ${
                ((interestRate - 1) / (20 - 1)) * 100
              }%, #e5e7eb ${((interestRate - 1) / (20 - 1)) * 100}%)`,
            }}
          />
          <div className="text-center mt-2 font-extrabold  text-green-600">
            {interestRate}%
          </div>
        </div>
        {/* Loan Tenure Slider */}
        <div className="mb-4 bg-white p-4 rounded-md shadow-md">
          <label className="block text-green-700 mb-2 font-medium">
            Loan Tenure (Years)
          </label>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="w-full appearance-none h-3 bg-gray-200 outline-none"
            style={{
              background: `linear-gradient(to right, #f97316 ${
                ((loanTenure - 1) / (30 - 1)) * 100
              }%, #e5e7eb ${((loanTenure - 1) / (30 - 1)) * 100}%)`,
            }}
          />
          <div className="text-center mt-2 font-extrabold text-green-600">
            {loanTenure} Years
          </div>
        </div>

        <button
          className="w-full bg-orange-400 text-white font-bold py-3 rounded-md hover:bg-orange-500 transition duration-200"
          onClick={calculateEMI}
        >
          Calculate EMI
        </button>

        {emi && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold text-green-500">
              Estimated EMI Per Month : ₹{emi}
            </h2>
            <p className="text-blue-500 mt-2 text-2xl font-bold ">
              Total Interest : ₹{totalInterest}
            </p>
            <p className="text-yellow-500 text-2xl font-bold mt-2">
              Total Payment (with Interest): ₹{totalPayment}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmiCalculator;
