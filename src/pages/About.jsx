import React from "react";
import { Link } from "react-router-dom";
import CountUpSection from "../components/Counter/Counter";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-[26vh] lg:h-[50vh]">
        <img
          src="https://www.sbfinance.com.ph/site/wp-content/uploads/2024/08/gcash-sb-finance-header-min.jpg"
          alt="About us background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      {/* About Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Section (Text) */}
          <div className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-5xl font-semibold underline text-slate-700 mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-700">
              At Samast Bharat Finance (SB-Finance), we are dedicated to
              empowering individuals and businesses by offering tailored
              financial solutions. Our mission is to make financial services
              accessible to everyone, helping our clients achieve their goals
              with ease and confidence. Whether you are looking for personal
              loans, business financing, or investment opportunities, we have
              the expertise and resources to assist you at every step.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              At SB-Finance, we believe in fostering financial inclusion and
              enabling economic growth. Whether you're planning to expand your
              business or secure your family's future, we are here to support
              you with customized solutions that fit your needs. Partner with
              Samast Bharat Finance and take the first step towards a brighter
              financial future!
            </p>
          </div>
          {/* Right Section (Images) */}
          <div className="hidden lg:block">
            <img
              src="/assets/about/about1.png"
              alt="Customer interaction"
              className="w-full h-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
      {/* Team Section */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Left Section (Image) */}
        <div className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-6">
          <img
            src="/assets/Team/Roshan Singh.jpeg"
            alt="Roshan Singh"
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
          <div className="my-4">
            <h1 className="text-2xl font-bold text-green-500 uppercase">
              Roshan Singh
            </h1>
            <h2 className="text-lg text-gray-900 font-bold mb-2">Director</h2>
          </div>
        </div>
        {/* Right Section (Team Members) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-4">
            <img
              src="/assets/Team/t4.jpeg"
              alt="Roshan Singh"
              className="w-full h-96 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-green-500 uppercase text-center">
              Nandani Ma'am
            </h3>
            <h4 className="text-sm text-gray-900 font-bold text-center">
              Sales Manager
            </h4>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-4">
            <img
              src="/assets/Team/Simran Sonkar.jpeg"
              alt="Simran Sonkar"
              className="w-full h-96 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-green-500 uppercase text-center">
              Simran Sonkar
            </h3>
            <h4 className="text-sm text-gray-900 font-bold text-center">
              Team Leader
            </h4>
          </div>
          {/* Team Member 3 */}
          <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-4">
            <img
              src="/assets/Team/Chhaya suryavanshi.jpeg"
              alt="Chhaya Suryavanshi"
              className="w-full h-80 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-green-500 uppercase text-center">
              Chhaya Suryavanshi
            </h3>
            <h4 className="text-sm text-gray-900 font-bold text-center">
              Team Member
            </h4>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-4">
            <img
              src="/assets/Team/Pooja Diwakar.jpeg"
              alt="Pooja Diwakar"
              className="w-full h-96 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-green-500 uppercase text-center">
              Pooja Diwakar
            </h3>
            <h4 className="text-sm text-gray-900 font-bold text-center">
              Team Member
            </h4>
          </div>
        </div>
      </div>
      {/* countup section  */}
      <div>
        <CountUpSection />
      </div>

      {/* vision and mission  */}
      <div className="py-10">
        <div className="flex items-center justify-center">
          <img src="/assets/about/vm.png" alt="" />
        </div>
        <div className="py-4 lg:px-44">
          <p className="text-2xl text-center leading-9 py-5 text-slate-700 font-bold">
            At Samast Bharat Finance (SB-Finance), our mission is to empower
            individuals and businesses with accessible, reliable, and innovative
            financial solutions, helping them achieve their goals with ease. Our
            vision is to become a trusted leader in the financial industry,
            setting new standards for customer satisfaction, transparency, and
            excellence while fostering financial inclusion for a better and more
            prosperous future.
          </p>
        </div>
      </div>

      {/* book now section  */}
      <div>
        <div className="bg-[#e8f4f8] p-8 my-8">
          <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-14 gap-4">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-zinc-800 text-2xl lg:text-5xl font-extrabold text-center lg:text-left">
              Get A Loan In A Single Click And Fulfil <br /> All Your
              Requirements
            </h1>
            <Link
              to={"/sb-finance/apply-loan"}
              className="p-4 bg-gradient-to-tr from-yellow-500 to-green-500 font-bold text-2xl lg:text-4xl rounded-lg animate-bounce text-center mt-5 lg:mt-0"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
