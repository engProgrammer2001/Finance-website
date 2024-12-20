import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaUserCircle,
  FaCaretDown,
  FaWhatsapp,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../state/authSlice";
import axios from "axios";
import { API_BASE_URL } from "../../config/config";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userMenuRef = useRef(null);
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [logoUrl, setLogoUrl] = useState([]);

  const handleSubMenu = (menuName) => {
    setActiveSubMenu((prevState) => (prevState === menuName ? "" : menuName));
  };

  // Handle clicks outside the user dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setActiveSubMenu("");
      }
    };
    if (activeSubMenu === "userMenu") {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeSubMenu]);

  const activeStyleDesktop =
    "block text-green-500 font-bold bg-white px-4 py-2 rounded-lg";
  const activeStyleMobile =
    "block text-green-500 font-bold bg-white px-2 py-3 rounded-lg";

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}logo/get-all-logo`);
        setLogoUrl(response.data);
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };

    fetchLogo();
  }, []);

  return (
    <>
      {/* Social Media and Contact Info */}
      <div className="hidden md:flex justify-between items-center bg-slate-900 text-white px-10 py-2">
        {/* Contact Info */}
        <div className="flex space-x-6 items-center">
          <span className="text-lg text-[#fbc02d] font-bold">
            Get Instant Any Loan from Top BANKS and NBFCS :{" "}
          </span>
          <div className="flex flex-col gap-2">
            <div className="flex items-center text-lg font-semibold gap-6">
              <IoCall className="text-blue-500 text-2xl" />
              <span>+91 9103521459</span>
              <MdEmail className="text-red-500 text-2xl" />
              <span>loanadvisor.roshan@gmail.com</span>
            </div>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex space-x-5">
          <a
            href="https://www.facebook.com/profile.php?id=100008257113720"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="bg-[#66bb6a] p-2 rounded-full transform transition-all duration-100 hover:scale-110"
          >
            <FaFacebook className="text-3xl text-blue-600 hover:text-blue-800 cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/roshan_singh4092?igsh=MTg0NHM3ZzJxdHBpMw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-[#66bb6a] p-2 rounded-full transform transition-all duration-100 hover:scale-110"
          >
            <FaInstagram className="text-3xl text-red-600 hover:text-red-700 cursor-pointer" />
          </a>
          <a
            href="https://www.youtube.com/@roshansingh-rw1ir"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="bg-[#66bb6a] p-2 rounded-full transform transition-all duration-100 hover:scale-110"
          >
            <FaYoutube className="text-3xl text-red-500 hover:text-red-600 cursor-pointer" />
          </a>
        </div>
      </div>
      {/* WhatsApp and Call Icons */}
      <div className="fixed top-48 right-0 flex flex-col items-end gap-3 z-[1000]">
        {/* WhatsApp Background */}
        <div className="bg-white px-3 p-1 hover:px-6 transition-all duration-200 rounded-l-full shadow-lg flex items-center">
          <a
            href="https://wa.link/0byup8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
          >
            <FaWhatsapp className="text-white text-xl" />
          </a>
        </div>
        {/* Call Background */}
        <div className="bg-white px-3 p-1 hover:px-6 transition-all duration-200 ease-in-out rounded-l-full shadow-lg flex items-center">
          <a
            href="tel:+919103521459"
            aria-label="Call"
            className="bg-blue-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
          >
            <IoCall className="text-white text-xl" />
          </a>
        </div>
      </div>
      <nav className="bg-[#66bb6a] p-2 sticky">
        <div className="flex justify-between items-center">
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
          {/* Toggle Button for Mobile */}
          <button
            className="text-slate-800 text-4xl md:hidden bg-white rounded-lg p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          {/* Menu Items for Desktop */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? activeStyleDesktop
                  : "text-white font-bold hover:text-gray-300 px-3 py-2"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? activeStyleDesktop
                  : "text-white font-bold hover:text-gray-300 px-3 py-2"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/our-loans"
              className={({ isActive }) =>
                isActive
                  ? activeStyleDesktop
                  : "text-white font-bold hover:text-gray-300 px-3 py-2"
              }
            >
              Loans
            </NavLink>
            <NavLink
              to="/sb-finance/credit-card"
              className={({ isActive }) =>
                isActive
                  ? activeStyleDesktop
                  : "text-white font-bold hover:text-gray-300 px-3 py-2"
              }
            >
              Credit Card
            </NavLink>
            <NavLink
              to="/sb-finance/insurance"
              className={({ isActive }) =>
                isActive
                  ? activeStyleDesktop
                  : "text-white font-bold hover:text-gray-300 px-3 py-2"
              }
            >
              Insurance
            </NavLink>
            <NavLink
              to="/our-faq"
              className={({ isActive }) =>
                isActive
                  ? activeStyleDesktop
                  : "text-white font-bold hover:text-gray-300 px-3 py-2"
              }
            >
              FAQ's
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? activeStyleDesktop
                  : "text-white font-bold hover:text-gray-300 px-3 py-2"
              }
            >
              Contact Us
            </NavLink>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/sb-finance/apply-loan"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? activeStyleMobile
                  : "block text-slate-700 font-bold hover:text-slate-800 text-center px-4 py-3 bg-white hover:bg-gray-100 rounded-lg"
              }
            >
              Apply Loan
            </NavLink>
          </div>

          {user ? (
            <div
              className="relative flex items-center gap-4 z-[9999]"
              ref={userMenuRef}
            >
              <div className="flex items-center">
                <Link to="/user-profile">
                  <FaUserCircle className="h-12 w-12 text-gray-700" />
                </Link>
                <div className="relative">
                  <button onClick={() => handleSubMenu("userMenu")}>
                    <FaCaretDown className="ml-1" />
                  </button>
                  {activeSubMenu === "userMenu" && (
                    <div
                      className="absolute top-12 right-0 bg-white shadow-lg w-48 z-[9999] border border-gray-200 rounded"
                      style={{ transform: "translateY(-100%)" }}
                    >
                      <Link
                        to="/user-profile"
                        className="block w-full py-2 px-4 hover:bg-gray-200"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left py-2 px-4 text-red-500 hover:bg-red-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex space-x-6">
              <NavLink
                to="/sign-up"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? activeStyleMobile
                    : "block text-white font-bold hover:text-gray-300 text-center px-4 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg"
                }
              >
                Sign Up
              </NavLink>
              <NavLink
                to="/login"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? activeStyleMobile
                    : "block text-slate-800 font-bold text-center px-4 py-3 bg-[#fbc02d] hover:bg-[#ffeb3b] rounded-lg"
                }
              >
                Login
              </NavLink>
            </div>
          )}
        </div>

        {/* Toggle Menu for Mobile */}
        {isOpen && (
          <div className="md:hidden mt-8 space-y-2">
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? activeStyleMobile
                  : "block text-white hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? activeStyleMobile
                  : "block text-white hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/our-loans"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? activeStyleMobile
                  : "block text-white hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg"
              }
            >
              Loans
            </NavLink>
            <NavLink
              to="/sb-finance/credit-card"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? activeStyleMobile
                  : "block text-white hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg"
              }
            >
              Credit Card
            </NavLink>
            <NavLink
              to="/sb-finance/insurance"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? activeStyleMobile
                  : "block text-white hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg"
              }
            >
              Insurance
            </NavLink>
            <NavLink
              to="/our-faq"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? activeStyleMobile
                  : "block text-white hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg"
              }
            >
              FAQ's
            </NavLink>
            <NavLink
              to="/contact"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? activeStyleMobile
                  : "block text-white hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg"
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/sb-finance/apply-loan"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? activeStyleMobile
                  : "block text-white font-bold hover:text-gray-300 text-center px-4 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg"
              }
            >
              Apply Loan
            </NavLink>
            {user ? (
              <NavLink
                onClick={handleLogout}
                className="block text-white font-bold hover:text-gray-300 text-center px-4 py-3 bg-red-600 hover:bg-red-500 rounded-lg"
              >
                Logout
              </NavLink>
            ) : (
              <div>
                <NavLink
                  to="/sign-up"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? activeStyleMobile
                      : "block text-white font-bold hover:text-gray-300 text-center px-4 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg"
                  }
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/login"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? activeStyleMobile
                      : "block text-slate-800 font-bold text-center px-4 py-3 bg-[#fbc02d] hover:bg-[#ffeb3b] rounded-lg"
                  }
                >
                  Login
                </NavLink>
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
