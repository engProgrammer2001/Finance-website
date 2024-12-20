import React, { useState } from "react";

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Message Sending....");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "c5692bb8-2483-4799-9546-6478d9a66479");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setResult("Failed to submit the form. Please try again.");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={onSubmit} className="space-y-2">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Number Field */}
          <div>
            <label
              htmlFor="number"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Your Number
            </label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-green-400 text-slate-800 font-bold rounded hover:from-yellow-500 hover:to-green-500 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
        {result && (
          <div className="bg-green-300 p-4 mt-2 text-gray-800 rounded-lg">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
