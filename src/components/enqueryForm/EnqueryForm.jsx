import React, { useState, useEffect } from "react";

const ExqueryForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [result, setResult] = useState("");

  // To close the modal when the close button is clicked
  const handleClose = () => {
    setIsFormVisible(false);
  };

  // Form submission handler
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

  // Delay form visibility by 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isFormVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      {/* Modal container */}
      <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Close button positioned relative to the modal container */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-600 text-3xl"
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4 text-center font-bold text-slate-700 font-serif">
          Query Form
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block text-gray-700">
              Number<span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="+91 XXXXXXXXXX"
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your query"
              className="w-full p-2 mt-1 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-green-400 to-blue-400 text-slate-700 rounded-lg font-bold"
          >
            Submit
          </button>
          <span className="block mt-2 text-center text-gray-700">{result}</span>
        </form>
      </div>
    </div>
  );
};

export default ExqueryForm;
