import React, { useState } from "react";
import ApplyLoanForm from "../components/ApplyLoanForm/ApplyLoanForm";
import CheckEligibility from "../components/CheckEligibility/CheckEligibility";

const ApplyLoan = () => {
  const rules = [
    {
      id: 1,
      title: "RULE",
      number: "01",
      details:
        "Follow what our elders taught us: Don't live beyond your means. And Ask your every doubts.",
    },
    {
      id: 2,
      title: "RULE",
      number: "02",
      details:
        "Take a loan that is right for you. But never take a loan that you can't repay.",
    },
    {
      id: 3,
      title: "RULE",
      number: "03",
      details:
        "Technology has changed several things for the lending industry..but for the customer, prudent borrowing is the wisest option.",
    },
    {
      id: 4,
      title: "RULE",
      number: "04",
      details:
        "Loans typically come with interest rates that accumulate over time. When you borrow for non-essential items, you're not only paying for the product but also significantly more due to interest charges.",
    },
    {
      id: 5,
      title: "RULE",
      number: "05",
      details:
        "It helps you avoid problems and keeps things in control. Paying your dues on time shows that you are responsible.",
    },
    {
      id: 6,
      title: "RULE",
      number: "06",
      details:
        "Missing an EMI or delaying a payment are among the key factors that can impact your credit profile and hinder your chances of taking a loan for other needs later in life.",
    },
  ];
  const [selectedRule, setSelectedRule] = useState(null);
  return (
    <div>
      <div className="">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-zinc-800 text-4xl lg:text-5xl text-center py-2 mt-8 font-extrabold">
          Apply for a Loan
        </h1>
        <h2 className="text-center pb-8 text-xl text-orange-400 font-bold">
          Instant Loan Amount Upto Rs.2,00,000
        </h2>
      </div>
      <div className="bg-[#ffe0b4] py-8 ">
        <h1 className=" to-zinc-800 text-4xl text-center py-2 font-extrabold">
          Get connected with most trustworthy lender. Get the approval and
          disbursal in a few minutes
        </h1>
        <h2 className="text-center pb-8 text-xl text-orange-400 font-bold">
          Instant Loan Amount Upto Rs.2,00,000
        </h2>
      </div>
      <div className="flex flex-wrap mx-auto mt-8">
        {/* First Div */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="rounded-md text-center">
            <ul className="space-y-2">
              {rules.map((rule) => (
                <li
                  key={rule.id}
                  className={`flex justify-between cursor-pointer p-2 py-3 lg:py-5 rounded-md border-2 border-slate-400 font-bold text-lg ${
                    selectedRule?.id === rule.id
                      ? "bg-[#fbc02d]"
                      : "hover:bg-[#f5f5f5]"
                  }`}
                  onClick={() => setSelectedRule(rule)}
                >
                  {rule.details}
                  <span className="text-[#66bb6a] text-4xl font-bold font-sans">{`${rule.number}`}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Second Div */}
        <div className="w-full lg:w-1/2 p-4">
          <ApplyLoanForm />
        </div>
      </div>

      <div id="features" className="p-4 py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto ">
          <div className="py-12">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-zinc-800 text-2xl lg:text-3xl font-bold text-center">
              Some Unique Features That You Get in Our Lending Process.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-8 p-4 border-orange-400">
              <img
                src="/assets/applyloan/la1.png"
                alt="loan_apply"
                className="h-24 rounded-full "
              />
              <h2 className="text-2xl text-slate-800  py-4 font-bold">
                Smooth and Easy Application
              </h2>
              <p>
                The loan application is extremely easy, and it can be applied
                from anywhere therefore, you don’t have to wait longer or visit
                the office physically. So, it imparts an easy and hassle-free
                lending experience.
              </p>
            </div>
            <div className="border-8 p-4 border-orange-400">
              <img
                src="/assets/applyloan/la2.png"
                alt="loan_apply"
                className="h-24 rounded-full "
              />
              <h2 className="text-2xl text-slate-800  py-4 font-bold">
                Multipurpose Usage
              </h2>
              <p>
                The personal loan can be used for any purpose and therefore,
                there are no restrictions on the expenses of the loan amount at
                all. Our easy loan applications help you get freedom from the
                cash crunch at any time.
              </p>
            </div>
            <div className="border-8 p-4 border-orange-400">
              <img
                src="/assets/applyloan/al3.png"
                alt="loan_apply"
                className="h-24 rounded-full "
              />
              <h2 className="text-2xl text-slate-800 py-4 font-bold">
                Easy Repayment
              </h2>
              <p>
                One of the best components to enhance the credit score is the
                easy repayment of personal loan and our lending services provide
                an efficient way to present the personal loan.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CheckEligibility />
      </div>
    </div>
  );
};

export default ApplyLoan;
