import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config/config";
import { loginSuccess } from "../../state/authSlice";
import { useDispatch } from "react-redux";
import { FaEye,FaEyeSlash } from "react-icons/fa";


export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    try {
      const response = await axios.post(`${API_BASE_URL}user/login`, {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        const { user, token, message } = response.data;
        dispatch(loginSuccess({ user, token }));

        setSuccessMessage(
          <div className="bg-green-100 text-green-600 text-center p-3 rounded-md">
            {message}
          </div>
        );

        // Redirect based on user role after a delay
        setTimeout(() => {
          if (user.role === "admin") {
            navigate("/admin/admin/dashboard");
          } else {
            navigate("/");
          }
        }, 1000);
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError(
        <div className="bg-red-100 text-red-600 text-center p-3 rounded-md">
          {err.response?.data?.message ||
            "Login failed. Please check your credentials."}
        </div>
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-400">Login</h2>
        {/* Success or Error Message */}
        {successMessage && <div>{successMessage}</div>}
        {error && <div>{error}</div>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-[70%] right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash/>}
            </button>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-bold text-white bg-yellow-400 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?
          <Link
            to="/sign-up"
            className="ml-1 font-medium text-blue-600 hover:text-blue-800"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
