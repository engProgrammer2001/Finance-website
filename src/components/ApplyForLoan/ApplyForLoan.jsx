import React from "react";

const ApplyForLoan = () => {
  return (
    <div className="bg-[#e8f4f8] min-h-screen">
      <div className="max-w-6xl mx-auto p-5">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-400 mb-2">
            How to Apply for a Personal Loan Online?
          </h1>
          <p className="text-slate-800">
            Follow our simple steps to start your financial journey with Samast
            Bharat Finace (sb-finace).
          </p>
        </header>
        {/* Online Application Process */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#223a72] mb-4">
            Online Application Process
          </h2>
          <p className="text-slate-800 mb-4">
            Apply for your loan online from anywhere in India and at any time to
            start your financial journey and discover a world of possibilities.
            Samast Bharat Finace (sb-finace) focuses on providing cost-effective
            solutions with great convenience.
          </p>
          <p className="text-slate-800 mb-4">
            With our online loan process, you can get the required eligible
            amount disbursed in your linked bank account within a few minutes
            with flexible tenures. Since it is an online process, you don’t need
            any paperwork and collateral.
          </p>
        </section>

        {/* Required Documentation */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#223a72] mb-4">
            Required Documentation
          </h2>
          <p className="text-slate-800 mb-4">
            We have a completely paperless process, however, you need to provide
            the following documents as proof of your identity, income, address,
            etc.
          </p>
          <ul className="list-disc list-inside space-y-3 text-slate-800">
            <li>
              <span className="font-semibold">Latest salary slips</span> and
              bank statements for the last three months.
            </li>
            <li>
              Driving license, PAN card, Aadhaar card, Passport, or Voter ID for
              KYC.
            </li>
            <li>
              Present address proof such as rent agreement, passport, or utility
              (electricity) bills.
            </li>
            <li>
              Employee ID card or official mail ID confirmation as employment
              proof.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ApplyForLoan;
