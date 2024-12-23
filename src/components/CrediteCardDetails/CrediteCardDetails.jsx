import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const CreditCardDetails = ({ CreditCardData }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the credit card details by ID
  const cardDetails = CreditCardData.find((data) => data.id === parseInt(id));

  if (!cardDetails) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl font-semibold text-gray-600">
          Credit Card details not found!
        </p>
        <button
          className="bg-yellow-400 hover:bg-yellow-400 text-white py-2 px-4 rounded mt-4"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-3 md:p-12">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Credit Card Banner & Image */}
        <div className="flex justify-center items-center bg-gray-200 p-4">
          <img
            src={cardDetails.image}
            alt={cardDetails.name}
            className="h-full md:h-full object-cover"
          />
        </div>

        {/* Card Details Section */}
        <div className="p-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            {cardDetails.name} - {cardDetails.details.CardName}
          </h2>

          {/* Card Type */}
          <p className="text-lg text-gray-600 mb-2">
            <strong>Card Type:</strong> {cardDetails.details.CardType}
          </p>

          {/* Sourcing Criteria */}
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Sourcing Criteria
          </h3>
          <ul className="space-y-2">
            <li className="text-gray-600">
              <strong>Age Criteria:</strong>{" "}
              {cardDetails.details.SourcingCriteria.AgeCriteria}
            </li>
            <li className="text-gray-600">
              <strong>Employment Type:</strong>{" "}
              {cardDetails.details.SourcingCriteria.EmploymentType}
            </li>
            <li className="text-gray-600">
              <strong>Min Monthly Income (Salaried):</strong>{" "}
              {cardDetails.details.SourcingCriteria.MinMonthlyIncomeSalaried}
            </li>
            <li className="text-gray-600">
              <strong>OBC Limit:</strong>{" "}
              {cardDetails.details.SourcingCriteria["OBC Limit"]}
            </li>
          </ul>

          {/* Fees Section */}
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Fees
          </h3>
          <p className="text-gray-600">
            <strong>First Year Fee:</strong> ₹
            {cardDetails.details.Fees.FirstYearFee}
          </p>
          <p className="text-gray-600">
            <strong>Renewal Fee:</strong> ₹{cardDetails.details.Fees.RenewalFee}
          </p>
          <p className="text-gray-600">
            <strong>Renewal Fee Waiver:</strong>{" "}
            {cardDetails.details.RenewalFeeWaiver}
          </p>

          {/* Welcome Benefits */}
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Welcome Benefits
          </h3>
          <p className="text-gray-600">{cardDetails.details.WelcomeBenefits}</p>

          {/* Rewards & Cashback Section */}
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Rewards and Cashback
          </h3>
          <ul className="space-y-2">
            <li className="text-gray-600">
              <strong>Online Spends:</strong>{" "}
              {cardDetails.details.RewardsAndCashback.OnlineSpends}
            </li>
            <li className="text-gray-600">
              <strong>Milestone Bonus:</strong>{" "}
              {cardDetails.details.RewardsAndCashback.MilestoneBonus}
            </li>
            <li className="text-gray-600">
              <strong>Usage Benefits:</strong>{" "}
              {cardDetails.details.RewardsAndCashback.UsageBenefits}
            </li>
            <li className="text-gray-600">
              <strong>Extra Category Benefits:</strong>{" "}
              {cardDetails.details.RewardsAndCashback.ExtraCategoryBenefits}
            </li>
          </ul>

          {/* Fuel Surcharge Waiver */}
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Fuel Surcharge Waiver
          </h3>
          <p className="text-gray-600">
            {cardDetails.details.Fuel.SurchargeWaiver}
          </p>

          {/* Reward Points Section */}
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Reward Points
          </h3>
          <ul className="space-y-2">
            <li className="text-gray-600">
              <strong>Base Rewards:</strong>{" "}
              {cardDetails.details.RewardPoints.BaseRewards}
            </li>
            <li className="text-gray-600">
              <strong>Redemption Rate:</strong>{" "}
              {cardDetails.details.RewardPoints.RedemptionRate}
            </li>
          </ul>

          {/* Complimentary Lounge Access */}
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Complimentary Lounge Access
          </h3>
          <ul className="space-y-2">
            <li className="text-gray-600">
              <strong>Domestic Lounge:</strong>{" "}
              {cardDetails.details.ComplimentaryLoungeAccess.DomesticLounge}
            </li>
            <li className="text-gray-600">
              <strong>International Lounge:</strong>{" "}
              {
                cardDetails.details.ComplimentaryLoungeAccess
                  .InternationalLounge
              }
            </li>
          </ul>
        </div>

        {/* Apply Button */}
        <div className="mt-12 text-center m-3">
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
