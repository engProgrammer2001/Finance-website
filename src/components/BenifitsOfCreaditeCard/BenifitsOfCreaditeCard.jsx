import React from "react";

const benefits = [
  {
    title: "Convenience",
    description: "Credit cards offer a convenient way to make purchases without carrying cash.",
    icon: "💳",
  },
  {
    title: "Rewards",
    description: "Earn cashback, points, or travel miles on your spending.",
    icon: "🎁",
  },
  {
    title: "Build Credit History",
    description: "Using credit cards responsibly can improve your credit score.",
    icon: "📈",
  },
  {
    title: "Security",
    description: "Credit cards provide fraud protection and ease of replacing lost cards.",
    icon: "🔒",
  },
  {
    title: "Emergency Funds",
    description: "Access funds during emergencies when cash is not available.",
    icon: "🚨",
  },
  {
    title: "Purchase Protection",
    description: "Get extended warranties and purchase protection on items bought with credit cards.",
    icon: "🛍️",
  },
];

const BenifitsOfCreaditeCard = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-10 bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Benefits of Credit Cards
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="text-8xl mb-4">{benefit.icon}</div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {benefit.title}
            </h2>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenifitsOfCreaditeCard;
