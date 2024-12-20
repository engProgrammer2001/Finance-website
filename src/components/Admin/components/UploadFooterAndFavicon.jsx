import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../config/config";

const UploadFooterAndFavicon = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [logos, setLogos] = useState([]); // State to store fetched logos

  // Handle file input change
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle form submission
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setMessage("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        `${API_BASE_URL}footerlogo/upload-footer-logo`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("upload logo : ",response.data);
      setMessage(response.data.message || "Logo uploaded successfully!");
      setSelectedFile(null); 
      fetchLogos();
    } catch (error) {
      console.error("Upload Error:", error);
      setMessage(
        error.response?.data?.message ||
          "An error occurred while uploading the file"
      );
    }
  };

  // Fetch all logos
  const fetchLogos = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}footerlogo/get-all-footer-logo`
      );
      console.log("get all logo response", response);
      setLogos(response.data); // Update the logos state with fetched data
    } catch (error) {
      console.error("Error fetching logos:", error);
      setMessage(
        error.response?.data?.message || "Failed to fetch logos. Try again!"
      );
    }
  };

  // Handle logo deletion
  const handleDeleteLogo = async (id) => {
    try {
      const response = await axios.delete(
        `${API_BASE_URL}footerlogo/delete-footer-logo/${id}`
      );
      console.log("delete logo response", response);
      setMessage(response.data.message || "Logo deleted successfully!");
      // Remove the deleted logo from the state without refreshing the page
      setLogos(logos.filter((logo) => logo._id !== id));
    } catch (error) {
      console.error("Delete Error:", error);
      setMessage(
        error.response?.data?.message ||
          "An error occurred while deleting the logo"
      );
    }
  };

  // Fetch logos when the component mounts
  useEffect(() => {
    fetchLogos();
  }, []);

  return (
    <div className="p-5 text-slate-800 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Upload Footer Logo</h1>
      <form
        onSubmit={handleUpload}
        className="mb-4 flex flex-col items-center gap-4 bg-gray-400 p-4 rounded-lg"
      >
        <input
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleFileChange}
          className="block w-64 border border-gray-300 p-2 rounded text-slate-800"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-gray-200 text-slate-800 font-semibold rounded hover:bg-gray-300 transition"
        >
          Upload
        </button>
      </form>

      {/* Backend Message */}
      {message && (
        <div className="text-center mb-4 bg-green-300 p-2 text-slate-800 font-semibold">
          {message}
        </div>
      )}

      {/* Display all logos in table */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">All Logos</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-slate-800 text-left">
                <th className="p-3 border">S.No</th>
                <th className="p-3 border">Logo</th>
                <th className="p-3 border">Created At</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {logos.length > 0 ? (
                logos.map((logo, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="p-3 border text-center">{index + 1}</td>
                    <td className="p-3 border text-center">
                      <img
                        src={`${API_BASE_URL}${logo.image}`} // Assuming 'imagePath' contains the relative path
                        alt="Logo"
                        className="w-16 h-16 object-cover mx-auto rounded"
                      />
                    </td>
                    <td className="p-3 border text-center">
                      {new Date(logo.createdAt).toLocaleString()}{" "}
                      {/* Format date */}
                    </td>
                    <td className="p-3 border text-center">
                      <button
                        onClick={() => handleDeleteLogo(logo._id)}
                        className="text-red-500 hover:text-red-700 font-semibold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="p-3 border text-center text-gray-500"
                  >
                    No logos available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UploadFooterAndFavicon;
