import React from "react";
import { useParams } from "react-router-dom";

const InsuranceDetailPage = ({ insuranceData }) => {
  const { id } = useParams();
  const insurance = insuranceData.find((item) => item.id === parseInt(id));

  if (!insurance) return <div>Insurance not found</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl lg:text-5xl font-bold text-green-400 mb-4">
          {insurance.title}
        </h1>

        <img
          src={insurance.image}
          alt={insurance.title}
          className="w-full h-full object-cover rounded-md mb-6"
        />
        
        {/* Description Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-400 mb-2">
            Description
          </h2>
          <p className="text-gray-700">{insurance.description}</p>
        </div>

        {/* Details Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-400 mb-2">
            Details
          </h2>
          <p className="text-gray-700">{insurance.details}</p>
        </div>

        {/* Premium Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-400 mb-2">
            Premium
          </h2>
          <p className="text-gray-700">{insurance.premium}</p>
        </div>

        {/* Coverage Amount Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-400 mb-2">
            Coverage Amount
          </h2>
          <p className="text-gray-700">{insurance.coverageAmount}</p>
        </div>

        {/* Policy Type Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-400 mb-2">
            Policy Type
          </h2>
          <p className="text-gray-700">{insurance.policyType}</p>
        </div>

        {/* Exclusions Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-400 mb-2">
            Exclusions
          </h2>
          <p className="text-gray-700">{insurance.exclusions}</p>
        </div>

        {/* Duration Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-400 mb-2">
            Duration
          </h2>
          <p className="text-gray-700">{insurance.duration}</p>
        </div>

        {/* Provider Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-400 mb-2">
            Provider
          </h2>
          <p className="text-gray-700">{insurance.provider}</p>
        </div>

        {/* Claim Process Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-400 mb-2">
            Claim Process
          </h2>
          <p className="text-gray-700">{insurance.claimProcess}</p>
        </div>

        {/* Why Insurance is Important */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Why Insurance is Important
          </h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Provides financial protection against unexpected events.</li>
            <li>Helps in managing risks and uncertainties in life.</li>
            <li>Offers peace of mind for the policyholder and their family.</li>
            <li>Can help reduce the financial burden of medical bills, accidents, etc.</li>
          </ul>
        </div>

        {/* Benefits of Insurance */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Benefits of Insurance
          </h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Provides coverage for medical emergencies, accidents, and illness.</li>
            <li>Life insurance ensures financial security for family members.</li>
            <li>Helps in covering repair or replacement costs for damaged property.</li>
            <li>Offers tax benefits on premiums paid in some policies.</li>
          </ul>
        </div>

        {/* Documents Required */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Documents Required
          </h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Proof of identity (Aadhaar card, passport, etc.)</li>
            <li>Proof of address (Utility bills, rental agreements, etc.)</li>
            <li>Recent passport-sized photographs</li>
            <li>Medical records (for health insurance)</li>
            <li>Bank details (for premium payments)</li>
          </ul>
        </div>

        {/* How to Apply */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            How to Apply
          </h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Visit the insurance provider's website or branch.</li>
            <li>Fill out the application form with necessary details.</li>
            <li>Submit the required documents (as mentioned above).</li>
            <li>Pay the premium to activate the insurance policy.</li>
            <li>Receive your policy document and keep it safe for future reference.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InsuranceDetailPage;
