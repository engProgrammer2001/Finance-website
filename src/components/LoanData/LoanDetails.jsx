import React from "react";
import { Link, useParams } from "react-router-dom";
import EmiCalculator from "../EmiCalculator/EmiCalculator";
import BenifitsOfPersonalLoan from "../BenifitsOfPersonalLoan/BenifitsOfPersonalLoan";
import ContactForm from "../ContactForm/ContactForm";

const LoanDetail = ({ loanOptions }) => {
  const { id } = useParams();
  const loanOption = loanOptions.find(
    (loanOption) => loanOption.id === parseInt(id)
  );

  if (!loanOption) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-600">
          Loan Option not found!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Loan Image Section */}
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12">
          <div className="flex-1">
            <img
              src={loanOption.image}
              alt={loanOption.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <EmiCalculator />
          </div>
          {/* Loan Details */}
          <div className="flex-1 space-y-6">
            {/* Loan Title */}
            <h1 className="text-3xl lg:text-5xl font-bold text-yellow-400">
              {loanOption.title}
            </h1>

            {/* Short Description */}
            <p className="text-lg text-gray-600">
              {loanOption.shortDescription}
            </p>

            {/* Detailed Description */}
            <div>
              <p className="text-gray-700 leading-relaxed">
                {loanOption.description}
              </p>
            </div>

            {/* Loan Features Section */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-green-500">
                Loan Features
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {loanOption.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Loan Terms Section */}
            <div className="mt-6 space-y-4">
              <div>
                <p className="font-semibold text-gray-800">Loan Amount:</p>
                <p className="text-gray-700">{loanOption.loanAmount}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Loan Tenure:</p>
                <p className="text-gray-700">{loanOption.loanTenure}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Interest Rate:</p>
                <p className="text-gray-700">{loanOption.interestRate}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Eligibility:</p>
                <p className="text-gray-700">{loanOption.eligibility}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Processing Fee:</p>
                <p className="text-gray-700">{loanOption.processingFee}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Repayment Mode:</p>
                <p className="text-gray-700">{loanOption.repaymentMode}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">
                  Prepayment Charges:
                </p>
                <p className="text-gray-700">{loanOption.prepaymentCharges}</p>
              </div>
            </div>

            {/* Documents Required Section */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Documents Required
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {loanOption.documentsRequired.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
            </div>

            {/* Customer Support */}
            <div className="mt-6">
              <p className="font-semibold text-gray-800">Customer Support:</p>
              <p className="text-gray-700">{loanOption.customerSupport}</p>
            </div>

            {/* apply button  */}
            <div className="mt-6">
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-2xl font-semibold py-2 px-4 rounded">
                <Link to="/sb-finance/apply-loan">Apply Now</Link>
              </button>
            </div>
          </div>
        </div>
        {/* Benifits of Personal Loan  */}
      </div>
      <div>
        <BenifitsOfPersonalLoan />
      </div>
      <div className="my-8">
        <h1 className="text-3xl text-yellow-400 font-bold text-center">
          Contact Today
        </h1>
        <ContactForm />
      </div>
    </>
  );
};

export default LoanDetail;
