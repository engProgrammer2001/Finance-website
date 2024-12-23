import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { logout } from "../../../state/authSlice";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <div className="bg-gray-800 text-white rounded-lg lg:h-full ">
        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-4 text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <span className="text-white font-bold text-center text-2xl ">
          Dashboard Navigation
        </span>
        {/* Sidebar */}
        <div
          className={`bg-card text-foreground p-4 w-64 h-full lg:block ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <h2 className="text-lg font-semibold mb-4">Main</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <Link
                to="/admin/admin/dashboard"
                className="hover:bg-orange-300 hover:text-white p-2 rounded-lg block"
              >
                Dashboard
              </Link>
            </li>
            <li className="flex justify-between items-center">
              <Link
                to="/admin/admin/total-user-admin"
                className="hover:bg-orange-300 hover:text-white p-2 rounded-lg block"
              >
                Total User
              </Link>
            </li>
            <li className="flex justify-between items-center">
              <Link
                to="/admin/admin/loan-form-data"
                className="hover:bg-orange-300 hover:text-white p-2 rounded-lg block"
              >
                Loan Form Data
              </Link>
            </li>
            <li className="flex justify-between items-center">
              <Link
                to="/admin/admin/upload-logo-admin"
                className="hover:bg-orange-300 hover:text-white p-2 rounded-lg block"
              >
                Update Logo
              </Link>
            </li>
            <li className="flex justify-between items-center">
              <Link
                to="/admin/admin/upload-footer-and-favicon-admin"
                className="hover:bg-orange-300 hover:text-white p-2 rounded-lg block"
              >
                Update footer Logo
              </Link>
            </li>
          </ul>

          <h2 className="text-lg font-semibold mt-6 mb-4">Account</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <Link
                to="/admin/admin/admin-profile"
                className="hover:bg-orange-300 hover:text-white p-2 rounded-lg block"
              >
                My Profile
              </Link>
            </li>
            <li className="flex justify-between items-center">
              <Link
                onClick={handleLogout}
                className="hover:bg-orange-300 hover:text-white p-2 rounded-lg block"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
