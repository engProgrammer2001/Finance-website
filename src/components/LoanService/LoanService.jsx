import React from "react";

const LoanService = () => {
  const cardData = [
    {
      title: "Loans For Household Emergency Needs",
      description:
        "Get a personal loan for household needs that are urgent and can’t be avoided. Our loan for household emergency needs is available for your convenience and it is available at any time.",
      image: "/assets/loanService/e1.png",
    },
    {
      title: "Loans for Fix Financial Commitments",
      description:
        "Affordable home financing options to make your dreams a reality.",
      image: "/assets/loanService/e2.png",
    },
    {
      title: "Quick Loans For Medical Emergency",
      description:
        "Easily confront a medical emergency with a quick medical loan",
      image: "/assets/loanService/e3.png",
    },
    {
      title: "Loans For Holidays / Travel And Leisure",
      description: "Get the loan for almost all the financial commitment",
      image: "/assets/loanService/e4.png",
    },
    {
      title: "Loans For Purchase And Shopping Needs",
      description:
        "Go for shopping with financial strength through a shopping loan.",
      image: "/assets/loanService/e5.png",
    },
    {
      title: "Loans To Clear Credit Bills",
      description:
        "Get rid of penalties and protect your CIBIL score with the loan for credit bills which is instantly available with flexible tenure and affordable interest. Apply now with ease and pay your bills.",
      image: "/assets/loanService/e6.png",
    },
  ];

  return (
    <div>
      <div className="lg:px-[90px] text-center p-4">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-zinc-800 text-4xl lg:text-5xl text-center font-bold py-3 mt-12">
          Different Types of Loan Services, Including Short-Term Loan
        </h2>
        <p className="text-lg text-slate-900 italic pb-3">
          Samast Bharat Finance (SB-Finance) offers a wide range of loan
          services designed to meet the diverse financial needs of our
          customers. Whether you need funds for personal reasons, business
          expansion, or emergencies, we have the perfect loan options for you.
          Our loan services include short-term loans, long-term loans, personal
          loans, business loans, and more.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 lg:px-20 py-8">
        {/* Row 1 */}
        <div className="lg:col-span-6 col-span-12 bg-[#f4e5ff] shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center transform transition hover:scale-105 hover:shadow-xl">
          <div className="text-4xl mb-4 flex justify-center">
            <img
              src={cardData[0].image}
              alt={cardData[0].title}
              className="h-56 w-56 object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-slate-700">
            {cardData[0].title}
          </h3>
          <p className="text-slate-800 mt-2">{cardData[0].description}</p>
        </div>
        <div className="lg:col-span-3 col-span-12 bg-[#fef1e9] shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center transform transition hover:scale-105 hover:shadow-xl">
          <div className="text-4xl mb-4 flex justify-center">
            <img
              src={cardData[1].image}
              alt={cardData[1].title}
              className="h-56 w-56 object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            {cardData[1].title}
          </h3>
          <p className="text-gray-600 mt-2">{cardData[1].description}</p>
        </div>
        <div className="lg:col-span-3 col-span-12 bg-[#e2f7f3] shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center transform transition hover:scale-105 hover:shadow-xl">
          <div className="text-4xl mb-4 flex justify-center">
            <img
              src={cardData[2].image}
              alt={cardData[2].title}
              className="h-56 w-56 object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            {cardData[2].title}
          </h3>
          <p className="text-gray-600 mt-2">{cardData[2].description}</p>
        </div>
        {/* Row 2 */}
        <div className="lg:col-span-3 col-span-12 bg-[#ff8d8e] shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center transform transition hover:scale-105 hover:shadow-xl">
          <div className="text-4xl mb-4 flex justify-center">
            <img
              src={cardData[3].image}
              alt={cardData[3].title}
              className="h-56 w-56 object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            {cardData[3].title}
          </h3>
          <p className="text-gray-600 mt-2">{cardData[3].description}</p>
        </div>
        <div className="lg:col-span-3 col-span-12 bg-[#e2f7f3] shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center transform transition hover:scale-105 hover:shadow-xl">
          <div className="text-4xl mb-4 flex justify-center">
            <img
              src={cardData[4].image}
              alt={cardData[4].title}
              className="h-56 w-56 object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            {cardData[4].title}
          </h3>
          <p className="text-gray-600 mt-2">{cardData[4].description}</p>
        </div>
        <div className="lg:col-span-6 col-span-12 bg-[#ffd2a6] shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center transform transition hover:scale-105 hover:shadow-xl">
          <div className="text-4xl mb-4 flex justify-center">
            <img
              src={cardData[5].image}
              alt={cardData[5].title}
              className="h-56 w-56 object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            {cardData[5].title}
          </h3>
          <p className="text-gray-600 mt-2">{cardData[5].description}</p>
        </div>
      </div>
    </div>
  );
};

export default LoanService;
