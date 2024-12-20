import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#e8f4f8] p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-goldenrod">
          Why Choose Samast Bharat Finance (SB-Finance)
        </h1>
        <p className="text-slate-800 mb-4">
          At Samast Bharat Finance (SB-Finance), we focus on making your
          financial journey easy and stress-free. Our platform offers a simple
          loan application process with quick approvals, so you can get the
          financial support you need without delays.
        </p>
        <p className="text-slate-800 mb-8">
          We provide flexible EMI options and secure online repayment
          facilities, ensuring you have the convenience to manage your payments
          effortlessly. Whether you need a personal loan, business loan, credit
          card, or insurance services, SB-Finance is here to deliver customized
          solutions that match your needs.
        </p>
        {/* Four Divs in One Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-40">
          {/* Feature 1 */}
          <div className=" bg-[#66bb6a] text-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-shadow">
            <img
              src="/assets/whyChoose/c7.png"
              alt="Easy Process"
              className="mx-auto mb-4 w-20 h-20 rounded-full "
            />
            <h3 className="text-lg font-semibold">Easy Loan Process</h3>
          </div>
          {/* Feature 2 */}
          <div className="bg-primary-green text-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-shadow">
            <img
              src="/assets/whyChoose/c1.png"
              alt="Quick Approval"
              className="mx-auto mb-4 w-20 h-20 rounded-full border-2 border-yellow-accent"
            />
            <h3 className="text-lg font-semibold">Quick Approvals</h3>
          </div>
          {/* Feature 3 */}
          <div className="bg-primary-green text-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-shadow">
            <img
              src="/assets/whyChoose/c4.png"
              alt="Flexible EMI"
              className="mx-auto mb-4 w-20 h-20 rounded-full border-2 border-yellow-accent"
            />
            <h3 className="text-lg font-semibold">Flexible EMI Options</h3>
          </div>
          {/* Feature 4 */}
          <div className="bg-primary-green text-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-shadow">
            <img
              src="/assets/whyChoose/c8.png"
              alt="Secure Payment"
              className="mx-auto mb-4 w-20 h-20 "
            />
            <h3 className="text-lg font-semibold">Secure Online Payments</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-40 mt-12">
          {/* Feature 1 */}
          <div className="bg-primary-green text-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-shadow">
            <img
              src="/assets/whyChoose/c6.png"
              alt="Easy Process"
              className="mx-auto mb-4 w-20 h-20 rounded-full border-2 border-yellow-accent"
            />
            <h3 className="text-lg font-semibold">Trusted Processes</h3>
          </div>
          {/* Feature 2 */}
          <div className="bg-primary-green text-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-shadow">
            <img
              src="/assets/whyChoose/c5.png"
              alt="Quick Approval"
              className="mx-auto mb-4 w-20 h-20 "
            />
            <h3 className="text-lg font-semibold">
              <span className="text-2xl">24X7 </span>Support and Guidance
            </h3>
          </div>
          {/* Feature 3 */}
          <div className="bg-primary-green text-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-shadow">
            <img
              src="/assets/whyChoose/c2.png"
              alt="Flexible EMI"
              className="mx-auto mb-4 w-20 h-20 rounded-full border-2 border-white"
            />
            <h3 className="text-lg font-semibold">
              Customer-Centric Solutions
            </h3>
          </div>
          {/* Feature 4 */}
          <div className="bg-primary-green text-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-shadow">
            <img
              src="/assets/whyChoose/c3.png"
              alt="Secure Payment"
              className="mx-auto mb-4 w-20 h-20  rounded-full border-2 border-yellow-accent"
            />
            <h3 className="text-lg font-semibold">Affordable Interest Rates</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
