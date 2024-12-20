// Import React and useState for toggling
import React, { useState } from "react";

const CrediteCardFaq = () => {
  const faqs = [
    {
      question: "What is a credit card?",
      answer:
        "A credit card is a payment card that allows users to borrow funds up to a pre-approved limit for purchases, with the condition of repayment at a later date.",
    },
    {
      question: "How do I apply for a credit card?",
      answer:
        "You can apply for a credit card by visiting our website or your nearest branch. Simply fill out the application form and submit the required documents.",
    },
    {
      question: "What are the benefits of using a credit card?",
      answer:
        "Credit cards offer benefits such as convenience, rewards, cashback, travel perks, and improved credit score when used responsibly.",
    },
    {
      question: "What is the eligibility criteria for a credit card?",
      answer:
        "Eligibility criteria include age, income level, employment status, and a good credit score.",
    },
    {
      question: "Are there any annual fees for credit cards?",
      answer:
        "Some credit cards have annual fees, while others are free. Fee details depend on the card type you choose.",
    },
    {
      question: "Can I increase my credit card limit?",
      answer:
        "Yes, you can request a credit limit increase after demonstrating consistent and responsible card usage over time.",
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
              <span className="text-slate-800 font-bold text-xl">
                {faq.question}
              </span>
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

export default CrediteCardFaq;
