import React from "react";
import { Link } from "react-router-dom";

const ShortTermsLoan = () => {
  return (
    <div className="flex flex-wrap w-full min-h-[550px] bg-[#e8f4f8]">
      {/* Left Part */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4">
          {/* Image 1 */}
          <img
            src="/assets/shortTerms/m1.png"
            alt="Short-term loan option 1"
            className="w-full h-auto object-cover lg:hidden"
          />
          {/* Image 2 */}
          <img
            src="/assets/shortTerms/m2.png"
            alt="Short-term loan option 2"
            className="w-full h-auto object-cover lg:z-10"
          />
          {/* Image 3 */}
          <img
            src="/assets/shortTerms/side.png"
            alt="Additional loan information"
            className="hidden lg:block w-full lg:h-[650px] lg:relative lg:right-4 lg:z-0 lg:top-0"
          />
        </div>
      </div>

      {/* Right Part */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-zinc-800 text-4xl lg:text-5xl font-bold py-4">
            Short-Term Loans for Any Financial Requirements
          </h1>
          <p className="text-gray-600">
            Samast Bharat Finace (sb-finace) is a reliable online platform
            designed to provide quick and hassle-free financial solutions. With
            our loan schemes, you can easily manage your short-term loan
            repayments using simple EMI options. Our online payment system
            ensures that you can make payments anytime and from anywhere,
            offering you unmatched convenience and flexibility. We are dedicated
            to simplifying financial processes to save you time and effort. Our
            services are tailored to meet your needs, whether you are looking
            for a personal loan, business loan, or any other financial support.
            Everyday Loan India stands out by offering quick approvals and a
            seamless user experience, making us a preferred choice for many
            customers.
          </p>
          <ul className="text-slate-700 font-bold space-y-2 py-8">
            <li>
              <span>✔️</span> All Loans
            </li>
            <li>
              <span>✔️</span> All Banks Credit Card
            </li>
            <li>
              <span>✔️</span> All Type Insurance
            </li>
          </ul>
          <p className="text-gray-600">
            Our commitment to quality and efficiency has helped us build a
            strong reputation as one of the leading fintech companies. We work
            hard to provide innovative solutions that fit your financial needs
            while ensuring your experience remains smooth and stress-free.
          </p>
          <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-green-400 text-slate-800 font-bold rounded hover:from-yellow-500 hover:to-green-500 transition duration-300">
            <Link to={"/sb-finance/apply-loan"}>Apply Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortTermsLoan;
