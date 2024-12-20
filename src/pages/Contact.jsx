import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-[50vh]">
        <img
          src="/assets/contactUs/contact.png"
          alt="About us background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 p-8 flex flex-col items-center">
          <nav className="flex space-x-4 text-sm">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/contact" className="text-gray-300 hover:text-white">
              Contact Us
            </Link>
          </nav>
          <h1 className="text-4xl font-bold mt-4">Contact US</h1>
        </div>
      </div>
      <div className="w-full mx-auto bg-gray-200 p-6 shadow-lg flex flex-col items-center my-12">
        <h2 className="text-4xl font-bold text-yellow-500 mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-lg">
        At Samast Bharat Finance (SB-Finance), we are always here to assist you with your financial needs. Whether you have questions about our loan services, credit card options, or insurance plans, our team is ready to provide you with the information and support you need.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full my-10">
          {/* Our Office */}
          <div className="text-center flex flex-col items-center">
            <div className="w-40 h-40 border-2 border-slate-700 rounded-full hover:bg-yellow-500 flex justify-center items-center">
              <img
                alt="Office location"
                src="/assets/contactUs/office.png"
                className="w-36 h-36 object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl text-green-500 font-semibold text-secondary mt-2">
              Our Office
            </h3>
            <p className="text-muted-foreground text-slate-800 font-bold">
              Office No - 123B, Jaina Tower 2nd, 1st Floor, District Center
              Janakpuri , Delhi 110058
            </p>
          </div>
          {/* Call Us */}
          <div className="text-center flex flex-col items-center">
            <div className="w-40 h-40 border-2 border-slate-700 rounded-full hover:bg-yellow-500 flex justify-center items-center">
              <img
                alt="Phone icon"
                src="/assets/contactUs/call.png"
                className="w-40 h-40 object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl text-green-500 font-semibold text-secondary mt-2">
              Call Us
            </h3>
            <p className="text-muted-foreground text-slate-800 font-bold">
              +91 9103521459 <br /> +91 9103521459
            </p>
          </div>
          {/* Email Us */}
          <div className="text-center flex flex-col items-center">
            <div className="w-40 h-40 border-2 border-slate-700 rounded-full hover:bg-yellow-500 flex justify-center items-center">
              <img
                alt="Email icon"
                src="/assets/contactUs/email.png"
                className="w-36 h-36 object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl text-green-500 font-semibold text-secondary mt-2">
              Email Us
            </h3>
            <p className="text-muted-foreground text-slate-800 font-bold">
              loanadvisor.roshan@gmail.com <br /> contact@sbfinance.com
            </p>
          </div>
          {/* Work Hours */}
          <div className="text-center flex flex-col items-center">
            <div className="w-40 h-40 border-2 border-slate-700 rounded-full hover:bg-yellow-500 flex justify-center items-center">
              <img
                alt="Clock icon"
                src="/assets/contactUs/working-hours.png"
                className="w-36 h-36 object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl text-green-500 font-semibold text-secondary mt-2">
              Work Hours
            </h3>
            <p className="text-muted-foreground text-slate-800 font-bold">
              Mon - Sun 07:00 AM - 22:00 PM
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#e8f4f8] mt-6">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffeb3b] to-zinc-800 text-4xl lg:text-5xl text-center font-extrabold pt-16">
          Share Your Doubts With Us{" "}
        </h1>
        <div className="flex flex-col lg:flex-row">
          {/* Left Section: Image */}
          <div className="w-full md:w-1/2 p-4 relative flex items-end justify-center">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409377.0553719105!2d-74.30932477148002!3d40.69701929469058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sin!4v1733999701658!5m2!1sen!2sin"
              width="660"
              height="560"
              className="bg-white p-4 rounded-lg "
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Right Section: Slider */}
          <div className="lg:w-1/2 w-full mr-4 mb-4 ">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
