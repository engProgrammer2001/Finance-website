import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const CreditCardDetails = ({ CreaditeCardData }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the credit card details by ID
  const cardDetails = CreaditeCardData.find((data) => data.id === parseInt(id));

  if (!cardDetails) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl font-semibold text-gray-600">
          Credit Card details not found!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative">
          <img
            src={cardDetails.image}
            alt={cardDetails.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-6">
            <h1 className="text-3xl lg:text-4xl text-white font-semibold drop-shadow-md">
              {cardDetails.title}
            </h1>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-6">
            About the Credit Card
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            {cardDetails.description}
          </p>

          {/* Features and Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-500">
                Features:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Annual Fee: {cardDetails.annualFee}</li>
                <li>Joining Fee: {cardDetails.joiningFee}</li>
                <li>Interest Rate: {cardDetails.interestRate}</li>
                <li>Credit Limit: {cardDetails.creditLimit}</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-500">
                Benefits:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {cardDetails.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Details */}
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold text-green-500">
              Additional Information
            </h3>
            <ul className="list-none text-gray-600 space-y-2">
              <li>Eligibility: {cardDetails.eligibility}</li>
              <li>Reward Rate: {cardDetails.rewardRate}</li>
              <li>Late Fee: {cardDetails.lateFee}</li>
            </ul>
          </div>
        </div>

        {/* Apply Button */}
        <div className="mt-12 text-center">
          <button className="w-full px-8 py-3 bg-yellow-500 text-white rounded-xl font-semibold shadow-lg hover:bg-yellow-600 transition duration-200">
            <Link to="tel:+91 9103521459">Apply for this Credit Card</Link>
          </button>
        </div>
      </div>

      {/* Apply for Credit Card Section */}
      <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-yellow-500 mb-6">
          How to Apply for this Credit Card
        </h3>
        <ul className="list-decimal list-inside space-y-2 text-gray-600">
          <li>Visit the official website of the bank.</li>
          <li>Fill in the application form with personal details.</li>
          <li>
            Submit the required documents (ID proof, address proof, etc.).
          </li>
          <li>Wait for approval notification from the bank.</li>
        </ul>
      </div>

      {/* Requirements for Applying Section */}
      <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-yellow-500 mb-6">
          Requirements for Applying
        </h3>
        <ul className="list-decimal list-inside space-y-2 text-gray-600">
          <li>Must be 21 years or older.</li>
          <li>Stable income or employment.</li>
          <li>Good credit score.</li>
          <li>Valid ID proof (e.g., Passport, Aadhar, etc.).</li>
          <li>
            Proof of address (e.g., utility bill, rental agreement, etc.).
          </li>
        </ul>
      </div>

      {/* Benefits of the Credit Card Section */}
      <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-yellow-500 mb-6">
          Benefits of this Credit Card
        </h3>
        <ul className="list-decimal list-inside space-y-2 text-gray-600">
          <li>Earn rewards points on every purchase.</li>
          <li>
            Cashback on specific categories (e.g., groceries, fuel, etc.).
          </li>
          <li>Exclusive offers and discounts for cardholders.</li>
          <li>Access to airport lounges and priority customer service.</li>
          <li>Zero liability for unauthorized transactions.</li>
        </ul>
      </div>

      {/* Back Button */}
      <div className="p-8 border-t flex justify-center">
        <button
          onClick={() => navigate(-1)}
          className="w-full px-10 py-4 bg-yellow-500 text-white text-xl rounded-xl font-semibold shadow-lg hover:bg-yellow-600 transition duration-200"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CreditCardDetails;
