import React from 'react';

const BenifitsOfPersonalLoan = () => {
  const benefits = [
    {
      title: "Less documentation",
      description:
        "Since it is an unsecured loan, it requires less documentation, streamlining the loan application process.",
    },
    {
      title: "Flexible repayment tenure",
      description:
        "Enjoy the convenience of selecting a repayment duration that best fits your financial condition and goals.",
    },
    {
      title: "No security or collateral",
      description:
        "Secure your loan without pledging your security or property as collateral. You can borrow funds online while still enjoying the ownership of your assets or investment.",
    },
    {
      title: "Competitive interest rates",
      description:
        "Benefit from cost savings by getting a loan at affordable interest rates and paying lower EMIs.",
    },
    {
      title: "Quick approval and disbursement with no hassles",
      description:
        "We understand the hassles involved with applying for a loan offline. Thus, to save you time and effort, we have designed an online loan application, approval, and disbursed process. You can get your loan approved and credited in no time.",
    },
    {
      title: "Complete transparency and no hidden charges",
      description:
        "We mention all the crucial things in our terms and conditions to maintain transparency. You would never be charged with unexpected fees. You have to pay just what you have been asked to pay.",
    },
    {
      title: "No prepayment and pre-closure charges",
      description:
        "We don’t charge anything for prepaying a loan or pre-closure. You can reduce your debt burden by prepaying a loan with no additional charges.",
    },
  ];

  return (
    <div className="w-full p-4 mt-12 bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-yellow-500  mb-4 text-center">
        Benefits of Home Loan
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2 text-left">Benefit</th>
              <th className="px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {benefits.map((benefit, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } border-b`}
              >
                <td className="px-4 py-2 font-medium">{benefit.title}</td>
                <td className="px-4 py-2">{benefit.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BenifitsOfPersonalLoan;
