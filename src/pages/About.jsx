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
      <div>
        <h2 className="text-4xl font-bold text-slate-800 text-center mt-8">
          Our Team
        </h2>
        <p className="p-4 lg:px-40 text-center text-slate-700">
          At SB-Finance, our team is the cornerstone of our success. We are a
          group of dedicated, skilled, and passionate professionals who bring
          diverse expertise to the table, united by a shared commitment to
          delivering exceptional financial solutions.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Left Section (Image) */}
        <div className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-6">
          <img
            src="/assets/Team/roshan copy.png"
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
              src="/assets/Team/Nandni.png"
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
              src="/assets/Team/simran.png"
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
              src="/assets/Team/chhaya.png"
              alt="Chhaya Suryavanshi"
              className="w-full h-96 object-cover rounded-md mb-4"
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
              src="/assets/Team/pooja.png"
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
      {/* Vision and Mission Section */}
      <div className="py-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 px-4 lg:px-16">
          {/* Mission Section */}
          <div className="flex flex-col bg-gray-100 p-4 rounded-lg hover:scale-105 transition duration-300 items-center justify-center w-full lg:w-1/2">
            <img
              src="/assets/about/m1.png"
              alt="Mission"
              className="w-full h-auto max-w-[300px] lg:max-w-[400px] object-contain"
            />
            <p className="text-lg text-center lg:text-left leading-7 py-5 text-slate-700 font-semibold ">
              At SB-Finance, our mission is to redefine the financial landscape
              by providing comprehensive, accessible, and innovative financial
              solutions that cater to the unique needs of individuals and
              businesses. We are committed to empowering our clients with the
              tools and resources they need to achieve financial stability and
              success. <br />
              Through our diverse range of services, including loans, credit
              cards, and insurance solutions, we aim to build lasting
              relationships founded on trust, transparency, and reliability. Our
              goal is to remove financial barriers and unlock opportunities for
              growth, enabling every client to turn their dreams into reality.
            </p>
          </div>
          {/* Vision Section */}
          <div className="flex flex-col bg-gray-100 p-4 rounded-lg hover:scale-105 transition duration-300 items-center justify-center w-full lg:w-1/2 ">
            <img
              src="/assets/about/vision.png"
              alt="Vision"
              className="w-full h-auto max-w-[300px] lg:max-w-[400px] object-contain"
            />
            <p className="text-xl text-center lg:text-left leading-7 py-5 text-slate-700 font-semibold ">
              At SB-Finance, our vision is to establish ourselves as a trusted
              and transformative leader in the financial industry, reshaping the
              standards of excellence, transparency, and customer satisfaction.
              We aspire to be the financial partner of choice for individuals
              and businesses by consistently delivering innovative, reliable,
              and tailored solutions that meet their ever-evolving needs. <br />
              Our commitment extends beyond providing financial services; we are
              dedicated to fostering financial inclusion and empowerment,
              ensuring that opportunities to grow and succeed are accessible to
              all, regardless of their background or circumstances.
            </p>
          </div>
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
