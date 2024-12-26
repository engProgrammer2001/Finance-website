import React from "react";

const LoanService = () => {
  const cardData = [
    {
      title: "Loans For Household Emergency Needs",
      description:
        "Get a personal loan for household needs that are urgent and can’t be avoided. ",
      image: "/assets/loanService/e1.png",
    },
    {
      title: "Loans for Fix Financial Commitments",
      description:
        "Affordable home financing options to make your dreams a reality.",
      image: "/assets/loanService/s1.png",
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
      {/* Heading Section */}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-20 py-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition hover:scale-105 hover:shadow-xl min-h-[350px]"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-56 w-56 object-contain mb-4"
            />
            <h3 className="text-xl font-bold text-slate-700">{card.title}</h3>
            <p className="text-slate-600 mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanService;
