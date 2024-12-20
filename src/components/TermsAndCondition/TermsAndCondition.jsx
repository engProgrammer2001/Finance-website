import React from "react";

const TermsAndCondition = () => {
  return (
    <div className="terms-and-conditions-container p-6 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to SB-Finance. These Terms and Conditions apply to our loan,
        insurance, and credit card services. By using our services, you agree to
        the terms outlined below. Please read them carefully before proceeding.
      </p>

      {/* Section: Loans */}
      <h2 className="text-2xl font-semibold mb-2">
        1. Terms and Conditions for Loans
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Eligibility:</strong> Loans are available to individuals aged
          18 and above with valid identification and income proof.
        </li>
        <li>
          <strong>Repayment:</strong> Loans must be repaid in the agreed tenure.
          Late payments may attract penalties.
        </li>
        <li>
          <strong>Interest Rate:</strong> Interest rates are subject to change
          as per market conditions and regulatory guidelines.
        </li>
        <li>
          <strong>Processing Fee:</strong> A non-refundable processing fee will
          be charged during loan application.
        </li>
        <li>
          <strong>Default:</strong> Non-repayment may lead to legal actions and
          affect your credit score.
        </li>
      </ul>

      {/* Section: Credit Cards */}
      <h2 className="text-2xl font-semibold mb-2">
        2. Terms and Conditions for Credit Cards
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Card Issuance:</strong> Credit cards are issued based on
          creditworthiness and income verification.
        </li>
        <li>
          <strong>Usage:</strong> Credit cards can be used for purchases and
          cash withdrawals within the approved credit limit.
        </li>
        <li>
          <strong>Interest Charges:</strong> Interest is applied on outstanding
          balances as per the card’s terms.
        </li>
        <li>
          <strong>Fees:</strong> Annual fees, late payment fees, and over-limit
          charges may apply.
        </li>
        <li>
          <strong>Liability:</strong> Cardholders are responsible for securing
          their card details to avoid fraudulent use.
        </li>
      </ul>

      {/* Section: Insurance */}
      <h2 className="text-2xl font-semibold mb-2">
        3. Terms and Conditions for Insurance
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Policy Issuance:</strong> Insurance policies are issued based
          on eligibility and premium payment.
        </li>
        <li>
          <strong>Coverage:</strong> Insurance coverage is as per the terms
          mentioned in the policy document.
        </li>
        <li>
          <strong>Claims:</strong> Claims must be filed with supporting
          documents within the stipulated time.
        </li>
        <li>
          <strong>Premium:</strong> Premiums must be paid on time to ensure
          uninterrupted coverage.
        </li>
        <li>
          <strong>Exclusions:</strong> Certain events or conditions may not be
          covered under the policy. Refer to the policy document for details.
        </li>
      </ul>

      {/* General Terms */}
      <h2 className="text-2xl font-semibold mb-2">4. General Terms</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Amendments:</strong> SB-Finance reserves the right to amend
          these terms and conditions at any time.
        </li>
        <li>
          <strong>Disputes:</strong> Any disputes arising will be subject to the
          jurisdiction of the courts in [Your Location].
        </li>
        <li>
          <strong>Confidentiality:</strong> Personal information shared with
          SB-Finance will be handled as per our Privacy Policy.
        </li>
      </ul>

      {/* Contact Information */}
      <h2 className="text-2xl font-semibold mb-2">5. Contact Us</h2>
      <p className="mb-4">
        For any queries or concerns regarding these terms and conditions, please
        contact us:
      </p>
      <address className="ml-4">
        SB-Finance Advisor
        <br />
        Email: loanadvisor.roshan@gmail.com
        <br />
        Phone: +91 9103521459
      </address>
    </div>
  );
};

export default TermsAndCondition;
