// Import React and useState for toggling
import React, { useState } from "react";

const FaqSection = () => {
  const faqs = [
    {
      question: "What types of loans do you offer?",
      answer:
        "Samast Bharat Finance (SB-Finance) offers personal loans, home loans, car loans, business loans, and more.",
    },
    {
      question: "What is the eligibility criteria for a loan?",
      answer:
        "Eligibility criteria vary depending on the type of loan, but generally include factors like age, income, and credit score.",
    },
    {
      question: "How can I apply for a loan?",
      answer:
        "You can apply for a loan through our website or by visiting any of our branches. Our representatives will guide you through the process.",
    },
    {
      question: "What documents are required for loan approval?",
      answer:
        "The required documents include identity proof, address proof, income proof, and other relevant documents depending on the loan type.",
    },
    {
      question: "How long does it take to get a loan approved?",
      answer:
        "Loan approval time varies based on the type of loan and documentation. Generally, it takes 3-7 working days.",
    },
    {
      question: "Can I prepay or foreclose my loan?",
      answer:
        "Yes, you can prepay or foreclose your loan. Please refer to our terms and conditions for any applicable charges.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto p-6 my-4 bg-[#e8f4f8] rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-slate-800 mb-6">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4 max-w-7xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg bg-white shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
            >
              <span className="text-slate-800 font-bold text-xl">{faq.question}</span>
              <span className="text-slate-700">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-600 text-2xl border-t bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
