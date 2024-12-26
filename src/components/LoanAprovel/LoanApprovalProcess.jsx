// Importing required modules
import React from "react";

const LoanApprovalProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Submit Application and Documents",
      description: "Fill out the application form and submit all required documents.",
      image: "/assets/Approvelmage/a1.png", 
    },
    {
      id: 2,
      title: "3 Days Cooling Period",
      description: "Wait for 3 days while we review your application.",
      image: "/assets/Approvelmage/a2.png", 
    },
    {
      id: 3,
      title: "Getting Approval",
      description: "Once reviewed, your loan will be approved.",
      image: "/assets/Approvelmage/a3.png", 
    },
    {
      id: 4,
      title: "Disbursement",
      description: "Receive the loan amount in your bank account.",
      image: "/assets/Approvelmage/a4.png", 
    },
  ];

  return (
    <div className="bg-soft-gray py-16 px-4" style={{ backgroundColor: "#f5f5f5" }}>
      <h2 className="text-4xl font-extrabold text-center " style={{ color: "#fbc02d" }}>
        Loan Approval Process
      </h2>
      <p className="text-center mb-16 pt-2 text-slate-800 ">SB-Finance have some key steps to follow when applying for a loan.</p>
      <div className="relative mx-auto max-w-5xl">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex items-center mb-10 last:mb-0 relative"
          >
            {/* Line connecting steps */}
            {index < steps.length - 1 && (
              <div
                className="absolute left-8 top-16 h-full w-1 bg-gray-300 z-0"
                style={{ backgroundColor: "#66bb6a" }}
              ></div>
            )}

            <div className="relative z-10 flex-shrink-0">
              <div
                className="w-16 h-16 bg-primary-green text-white rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white shadow-md"
                style={{ backgroundColor: "#66bb6a" }}
              >
                {step.id}
              </div>
            </div>

            <div className=" ml-8 lg:ml-10 p-6 bg-white shadow-lg rounded-xl flex-1">
              <img
                src={step.image}
                alt={step.title}
                className="w-24 h-24 float-left mr-4"
              />
              <h2
                className="text-lg lg:text-xl font-bold mb-2"
                style={{ color: "#fbc02d" }}
              >
                {step.title}
              </h2>
              <p className="text-gray-700 text-sm lg:text-lg" style={{ color: "#66bb6a" }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanApprovalProcess;
