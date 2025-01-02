import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import axios from "axios";
import { API_BASE_URL } from "../../config/config";
import { FaLock } from "react-icons/fa6";

const Footer = () => {
  const [logoUrl, setLogoUrl] = useState([]);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}footerlogo/get-all-footer-logo`
        );
        console.log("Fetched logos:", response.data);
        setLogoUrl(response.data);
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };

    fetchLogo();
  }, []);
  return (
    <>
      <footer className="py-8 relative bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          {/* First Row with 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">About Us</h3>
              {/* Logo */}
              <div>
                {logoUrl && logoUrl.length > 0 ? (
                  <NavLink to="/">
                    <img
                      src={`${API_BASE_URL}${logoUrl[0].image}`}
                      alt="First Logo"
                      className="h-20 rounded-full cursor-pointer"
                    />
                  </NavLink>
                ) : (
                  <p>Loading logo...</p>
                )}
              </div>
              <p className="text-lg">
                SB-Finance (Samast Bharat Finance) is a trusted financial
                services company that helps you achieve your dreams. We offer
                all types of loans, credit cards, and insurance plans to meet
                your needs. Our goal is to provide easy, secure, and affordable
                solutions to make your financial journey smooth and successful.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Services</h3>
              <ul className="text-lg space-y-2">
                <li className="text-lg font-bold underline">Loans</li>
                <li>Personal Loan</li>
                <li>Business Loan</li>
                <li>Home Loan</li>
                <li>Loan against property</li>
                <li>Gold Loan</li>
                <li>Car Loan</li>
                <li className="text-lg font-bold underline">Credit Card</li>
                <li>HDFC Credit Card</li>
                <li>Axis Bank Credit Card</li>
                <li>SBI Credit Card</li>
                <li>Indusind Bank</li>
                <li>HSBC</li>
                <li>SCB (Standard Chartered Bank )</li>
                <li className="text-lg font-bold underline">Insurance</li>
                <li>Motor Insurance</li>
                <li>Health Insurance</li>
                <li>Life Insurance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="text-lg space-y-4">
                <li>
                  <Link to="/" className="hover:text-yellow-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-yellow-500">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/our-loans" className="hover:text-yellow-500">
                    Loan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sb-finance/credit-card"
                    className="hover:text-yellow-500"
                  >
                    Credit Card
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sb-finance/insurance"
                    className="hover:text-yellow-500"
                  >
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link to="/our-faq" className="hover:text-yellow-500">
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-yellow-500">
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/sb-finance/apply-loan"
                    className="hover:text-yellow-500"
                  >
                    Apply Loan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-and-policy"
                    className="hover:text-yellow-500"
                  >
                    Privacy and Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-and-policy"
                    className="hover:text-yellow-500"
                  >
                    Terms and Condition
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact</h3>
              <p className="text-lg">
                <span className="font-semibold text-orange-400">
                  Address :{" "}
                </span>
                Office No - 123B, Jaina Tower 2nd, 1st Floor, District Center
                Janakpuri , Delhi 110058
              </p>
              <p className="text-lg">
                <span className="font-semibold text-orange-400">
                  Total branches :{" "}
                </span>
                01
              </p>
              <p className="text-lg">
                <span className="font-semibold text-orange-400">Email : </span>
                loanadvisor.roshan@gmail.com
              </p>
              <p className="text-lg">
                <span className="font-semibold text-orange-400">Phone :</span>{" "}
                +91 9103521459
              </p>
              <p className="text-lg">
                <span className="font-semibold text-orange-400">
                  Whatsapp :
                </span>{" "}
                +91 9103521459
              </p>
              <h2 className="py-3 font-bold text-lg underline">
                Social Medial Link :{" "}
              </h2>
              <div className="flex space-x-4 items-start mt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61571059146673&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full transform transition-all duration-100 hover:scale-110"
                >
                  <FaFacebook className="text-3xl text-blue-500 cursor-pointer " />
                </a>
                <a
                  href="https://www.instagram.com/sbfinance4092/profilecard/?igsh=MWZpeXhqaGZoNmltbA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full transform transition-all duration-100 hover:scale-110"
                >
                  <FaInstagram className="text-3xl text-red-400 cursor-pointer" />
                </a>
                <a
                  href="https://youtube.com/@roshansingh-z3t?si=hqHooOj9fVfQ3wEn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full transform transition-all duration-100 hover:scale-110"
                >
                  <FaYoutube className="text-3xl text-red-600 cursor-pointer" />
                </a>
              </div>
              <h2 className="py-3 font-bold text-lg ">
                <span className="text-orange-400">
                  UDYAM REGISTRATION NUMBER :
                </span>{" "}
                UDYAM-DL-03-0047404
              </h2>
              <p></p>

              <div className="flex items-center space-x-2 border mt-11 border-gray-300 rounded p-2">
                <FaLock className="text-blue-500 text-4xl" />
                <span>SSL Encryption <br /> secure connection</span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All rights reserved. Developed
              by
              <a
                href="https://divywebb.com/"
                className="text-orange-400 font-bold"
              >
                Divy Webb Creation
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
