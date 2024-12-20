import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config/config";
import { FaEye,FaEyeSlash } from "react-icons/fa";

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    email: "",
    password: "",
    about: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}user/register`,
        formData
      );
      setSuccess(response.data.message);
      setError("");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
      setSuccess("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-400">
          Register
        </h2>
        {/* Success Message */}
        {success && <p className="text-green-600 mb-4">{success}</p>}

        {/* Error Message */}
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700"
            >
              Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="number"
              id="number"
              value={formData.number}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="+91 XXXXXXXXXX"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500 focus:outline-none"
              >
                {showPassword ? <FaEye/> : <FaEyeSlash/>}
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              About Us
            </label>
            <textarea
              name="about"
              id="about"
              value={formData.about}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write About Yourself"
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-bold text-white bg-yellow-400 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="ml-1 font-medium text-blue-600 hover:text-blue-800"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
