import React, { useState } from "react";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";

const Rules = () => {
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
      <div
        className=""
        style={{
          backgroundImage: "url('/assets/rules/r1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="py-24 text-transparent bg-clip-text bg-gradient-to-r from-[#ffeb3b] to-zinc-800 font-extrabold text-4xl lg:text-5xl text-center bg-opacity-75">
          6 Golden Rules For Taking A Loan
        </h1>
      </div>
      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        {/* Left Part - List of Rules */}
        <div className="flex-1 p-4 rounded-md text-center">
          <ul className="space-y-2">
            {rules.map((rule) => (
              <li
                key={rule.id}
                className={`flex justify-between items-center cursor-pointer p-2 py-3 lg:py-5 rounded-md border-2 border-slate-400 font-bold text-lg ${
                  selectedRule?.id === rule.id
                    ? "bg-[#fbc02d]"
                    : "hover:bg-[#f5f5f5]"
                }`}
                onClick={() => setSelectedRule(rule)}
              >
                {rule.title}
                <span className="text-[#66bb6a] text-4xl font-bold font-sans">{`${rule.number}`}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Middle Part - Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={
              window.innerWidth < 768
                ? "/assets/rules/r3.png"
                : "/assets/rules/r2.png"
            }
            alt="Loan Rules"
            className="max-w-full h-auto lg:h-[500px] "
          />
        </div>
        {/* Right Part - Rule Details */}
        <div className="flex-1 relative top-[-50px] lg:top-12 lg:right-8 h-[300px] bg-[#f5f5f5] p-8 rounded-md shadow-md">
          {selectedRule ? (
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-[#fbc02d]">
                {selectedRule.title} {selectedRule.number}
              </h3>
              <p className="text-slate-800 text-sm font-bold">
                {selectedRule.details}
              </p>
              {/* arrow icon */}
              <span className="relative lg:top-10 text-7xl text-[#66bb6a]">
                <TbCircleArrowUpRightFilled />
              </span>
            </div>
          ) : (
            <p className="text-slate-800 font-lg font-bold">
              Click on a rule to see the details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rules;
