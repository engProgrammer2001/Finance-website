import React from "react";

const EligibilityCriteria = () => {
  const criteria = [
    { label: "Citizenship", detail: "Indian" },
    {
      label: "Age",
      detail: "At least 21 years when applying and a maximum of 55 years.",
    },
    {
      label: "Employment",
      detail:
        "Full-time job at MNC, private limited companies, central government, unlisted public limited companies, PSU, LLP, or companies specified internally.",
    },
    {
      label: "Monthly Income",
      detail:
        "Minimum salary of Rs. 30,000 as monthly net income (varies by lender).",
    },
    {
      label: "Work Experience",
      detail:
        "Minimum one year of job experience and 1 month of stable employment in the current company.",
    },
    {
      label: "CIBIL Score",
      detail: "650 or above, including ongoing EMIs and existing debt status.",
    },
  ];

  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full shadow-lg rounded-lg p-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-center text-green-500 mb-6">
          Eligibility Criteria for Personal Loan
        </h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="py-3 px-4 text-left">Criteria</th>
              <th className="py-3 px-4 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            {criteria.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } border-b`}
              >
                <td className="py-3 px-4">{item.label}</td>
                <td className="py-3 px-4">{item.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EligibilityCriteria;
