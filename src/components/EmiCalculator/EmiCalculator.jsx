import React, { useState } from "react";

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(11);
  const [loanTenure, setLoanTenure] = useState(5);
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
    <div className=" flex items-center justify-center bg-gray-100 py-12">
      <div className="bg-white w-full max-w-lg shadow-lg rounded-lg p-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6">
          EMI Calculator
        </h1>
        {/* Loan Amount */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Loan Amount (₹)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="50000"
              max="10000000"
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="flex-grow appearance-none h-3 bg-gray-200 rounded-lg outline-none"
              style={{
                background: `linear-gradient(to right, #4CAF50 ${
                  ((loanAmount - 50000) / (10000000 - 50000)) * 100
                }%, #e5e7eb ${
                  ((loanAmount - 50000) / (10000000 - 50000)) * 100
                }%)`,
              }}
            />
            <input
              type="number"
              min="50000"
              max="10000000"
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-24 p-2 border rounded-md text-center"
            />
          </div>
        </div>

        {/* Interest Rate */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Annual Interest Rate (%)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="1"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="flex-grow appearance-none h-3 bg-gray-200 rounded-lg outline-none"
              style={{
                background: `linear-gradient(to right, #4CAF50 ${
                  ((interestRate - 1) / (20 - 1)) * 100
                }%, #e5e7eb ${
                  ((interestRate - 1) / (20 - 1)) * 100
                }%)`,
              }}
            />
            <input
              type="number"
              min="1"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-24 p-2 border rounded-md text-center"
            />
          </div>
        </div>

        {/* Loan Tenure */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Loan Tenure (Years)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              className="flex-grow appearance-none h-3 bg-gray-200 rounded-lg outline-none"
              style={{
                background: `linear-gradient(to right, #4CAF50 ${
                  ((loanTenure - 1) / (30 - 1)) * 100
                }%, #e5e7eb ${
                  ((loanTenure - 1) / (30 - 1)) * 100
                }%)`,
              }}
            />
            <input
              type="number"
              min="1"
              max="30"
              step="1"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              className="w-24 p-2 border rounded-md text-center"
            />
          </div>
        </div>

        <button
          className="w-full bg-green-500 text-white font-bold py-3 rounded-md hover:bg-green-600 transition duration-200"
          onClick={calculateEMI}
        >
          Calculate EMI
        </button>

        {emi && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold text-gray-800">
              Estimated EMI Per Month: ₹{emi}
            </h2>
            <p className="text-gray-600 mt-2">
              Total Interest: <span className="font-bold text-yellow-500">₹{totalInterest}</span>
            </p>
            <p className="text-gray-600 mt-2">
              Total Payment (with Interest): <span className="font-bold text-green-500">₹{totalPayment}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmiCalculator;
