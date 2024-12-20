import React, { useState } from "react";
import emailjs from "emailjs-com";

const ApplyLoanForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    pancardNumber: "",
    aadhaarNumber: "",
    loanAmount: "",
    monthlySalary: "",
    dateOfBirth: "",
    gender: "",
    state: "",
    city: "",
    pincode: "",
    employmentType: "",
    purpose: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    // Prepare the form data to be sent
    const emailTemplateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phoneNumber,
      pancard_number: formData.pancardNumber,
      aadhaar_number: formData.aadhaarNumber,
      loan_amount: formData.loanAmount,
      monthly_salary: formData.monthlySalary,
      date_of_birth: formData.dateOfBirth,
      gender: formData.gender,
      state: formData.state,
      city: formData.city,
      pincode: formData.pincode,
      employment_type: formData.employmentType,
      purpose: formData.purpose,
    };

    // Send the email using EmailJS
    emailjs
      .send(
        "service_agyuyct",
        "template_lw7chdg",
        emailTemplateParams,
        "NCfF_zstaIDryFmz_"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Application Submitted Successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("There was an error submitting the form.");
        }
      );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Loan Application Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name as PAN Card"
            value={formData.name}
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
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          />
          <input
            type="text"
            name="pancardNumber"
            placeholder="PAN Card Number"
            value={formData.pancardNumber}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          />
          <input
            type="text"
            name="aadhaarNumber"
            placeholder="Aadhaar Number"
            value={formData.aadhaarNumber}
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
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          />
          {/* Select Fields */}
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
            name="employmentType"
            value={formData.employmentType}
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
            name="purpose"
            placeholder="Enter Purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full p-4 border rounded"
            required
          />
        </div>

        {/* Terms and Conditions */}
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
            I agree to the everydayloanindia{" "}
            <span className="text-blue-500">
              <a href="/term-and-conditions">Terms and Conditions</a>
            </span>{" "}
            and{" "}
            <span className="text-blue-500">
              <a href="/privacy-and-policy">Privacy Policy</a>
            </span>
            .
          </label>
        </div>

        {/* Submit Button */}
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
