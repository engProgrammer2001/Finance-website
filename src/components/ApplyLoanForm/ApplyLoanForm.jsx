import axios from "axios";
import React, { useState } from "react";
import { API_BASE_URL } from "../../config/config";

const ApplyLoanForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    panNumber: "",
    aadharNumber: "",
    loanAmount: "",
    monthlySalary: "",
    date: "",
    gender: "",
    state: "",
    city: "",
    pincode: "",
    employmentStatus: "",
    loanPurpose: "",
    agree: false,
  });

  const [message, setMessage] = useState(null); // State to store the message
  const [messageType, setMessageType] = useState(""); // State to store the message type ('success' or 'error')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${API_BASE_URL}loans/apply-loan`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setMessage("Loan application submitted successfully!");
        setMessageType("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          panNumber: "",
          aadharNumber: "",
          loanAmount: "",
          monthlySalary: "",
          date: "",
          gender: "",
          state: "",
          city: "",
          pincode: "",
          employmentStatus: "",
          loanPurpose: "",
          agree: false,
        });
      } else {
        setMessage("Failed to submit loan application. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage(
        "An error occurred while submitting the form. Please try again."
      );
      setMessageType("error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-3 bg-gray-100 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-4 text-center text-orange-400">
        Loan Application Form
      </h2>

      {/* Display the message */}
      {message && (
        <div
          className={`text-center p-2 mb-4 rounded ${
            messageType === "success"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Name as PAN Card"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          />
          <input
            type="text"
            name="panNumber"
            placeholder="PAN Card Number"
            value={formData.panNumber}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          />
          <input
            type="text"
            name="aadharNumber"
            placeholder="Aadhaar Number"
            value={formData.aadharNumber}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          />
          <input
            type="number"
            name="loanAmount"
            placeholder="Loan Amount"
            value={formData.loanAmount}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          />
          <input
            type="number"
            name="monthlySalary"
            placeholder="Monthly Salary"
            value={formData.monthlySalary}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            name="state"
            placeholder="Enter State"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          />
          <input
            type="text"
            name="pincode"
            placeholder="Enter Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          />
          <select
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          >
            <option value="">Select Employment Type</option>
            <option value="Salaried">Salaried</option>
            <option value="Self-Employed">Self-Employed</option>
          </select>
          <input
            type="text"
            name="loanPurpose"
            placeholder="Enter Loan Purpose"
            value={formData.loanPurpose}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          />
        </div>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <label className="text-sm">
            I agree to the <a className="text-blue-600" href="/privacy-and-policy">terms Conditions</a>{" "}
            and <a className="text-blue-600" href="/privacy-and-policy">Privacy and Policy</a>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-slate-700 p-2 mt-6 rounded hover:bg-yellow-500 font-bold"
        >
          Apply Loan
        </button>
      </form>
    </div>
  );
};

export default ApplyLoanForm;
