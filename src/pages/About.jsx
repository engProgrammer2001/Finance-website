import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

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
            <h2 className="text-5xl font-semibold underline text-pink-600 mb-4">
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
              With over a decade of experience in the finance industry,
              SB-Finance has built a strong reputation for reliability and
              customer-centric solutions. Our team of financial experts works
              closely with you to understand your unique requirements, ensuring
              a seamless experience. We specialize in a range of services,
              including micro-financing, loan restructuring, and financial
              planning for individuals and businesses. Our commitment to
              transparency, integrity, and innovation makes us a trusted partner
              in your financial journey.
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
          <div className="">
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
              className="w-full h-72 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-green-500 uppercase">
              Nandani Ma'am
            </h3>
            <h4 className="text-sm text-gray-900 font-bold mb-2">
              SALES MANAGER (2 Years of exp.)
            </h4>
            <p className="text-sm text-gray-700 text-center">
              Roshan is a visionary team leader with 7 year of hands-on
              experience in the finance industry, driving innovation and
              collaboration.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-4">
            <img
              src="/assets/Team/Chhaya suryavanshi.jpeg"
              alt="Chhaya Suryavanshi"
              className="w-full h-72 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-green-500 uppercase">
              Chhaya Suryavanshi
            </h3>
            <h4 className="text-sm text-gray-900 font-bold mb-2">
              Team Member (6 Months of exp.)
            </h4>
            <p className="text-sm text-gray-700 text-center">
              Chhaya brings 6 Months of experience in the finance sector,
              excelling in data analysis and project management.
            </p>
          </div>
          {/* Team Member 3 */}
          <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-4">
            <img
              src="/assets/Team/Simran Sonkar.jpeg"
              alt="Simran Sonkar"
              className="w-full h-72 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-green-500 uppercase">
              Simran Sonkar
            </h3>
            <h4 className="text-sm text-gray-900 font-bold mb-2">
              Team Member (1 yrs 2 Months exp.)
            </h4>
            <p className="text-sm text-gray-700 text-center">
              Simran has 1 year and 2 months of experience in finance, known for
              her problem-solving skills and attention to detail.
            </p>
          </div>
          {/* Team Member 4 */}
          <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-4">
            <img
              src="/assets/Team/Pooja Diwakar.jpeg"
              alt="Pooja Diwakar"
              className="w-full h-72 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-green-500 uppercase">
              Pooja Diwakar
            </h3>
            <h4 className="text-sm text-gray-900 font-bold mb-2">
              Team Member (1 year of experience)
            </h4>
            <p className="text-sm text-gray-700 text-center">
              Pooja is a dedicated team player with 1 year of experience in
              finance, specializing in client relations and operational
              efficiency.
            </p>
          </div>
        </div>
      </div>
      {/* countup section  */}
      <div>
        <div className="bg-gradient-to-tr from-yellow-500 to-green-500 p-8 my-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <img
                className="w-24 h-24 mb-4"
                alt="clients"
                src="/assets/about/countup.png"
              />
              <h2 className="text-5xl font-bold text-primary">
                <CountUp end={321} />+
              </h2>
              <p className="text-muted-foreground text-2xl mt-2">
                Our Happy Clients
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                className="w-24 h-24 mb-4"
                alt="shifting"
                src="/assets/about/amount.png"
              />
              <h2 className="text-5xl font-bold text-primary">
                <CountUp end={210} />+ Cr
              </h2>
              <p className="text-muted-foreground text-2xl mt-2">
                Disbursed Amount
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                className="w-24 h-24 mb-4"
                alt="branches"
                src="/assets/about/branch.png"
              />
              <h2 className="text-5xl font-bold text-primary">
                <CountUp end={13} />+
              </h2>
              <p className="text-muted-foreground text-2xl mt-2">
                Branches In India
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                className="w-24 h-24 mb-4"
                alt="countries"
                src="/assets/about/state_cover.png"
              />
              <h2 className="text-5xl font-bold text-primary">
                <CountUp end={30} />+
              </h2>
              <p className="text-muted-foreground text-2xl  mt-2">
                State Covered
              </p>
            </div>
          </div>
        </div>
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
