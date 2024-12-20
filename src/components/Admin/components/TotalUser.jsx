import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../config/config";

const TotalUser = () => {
  const [candidate, setCandidate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const candidatePerPage = 6;

  const token = localStorage.getItem("token");

  // Fetch users from API and filter for employers
  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true); // Ensure loading state is set before fetching data
      const response = await axios.get(
        `${API_BASE_URL}user/get-all-user-profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const users = response.data;
      const employerList = users.filter(
        (user) => user.role && user.role.toLowerCase().includes("candidate")
      );
      setCandidate(employerList);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch data");
      setLoading(false);
    }
  }, [token]); // Include 'token' as dependency since it's used in the function

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Pagination logic
  const indexOfLastEmployer = currentPage * candidatePerPage;
  const indexOfFirstEmployer = indexOfLastEmployer - candidatePerPage;
  const currentCandidate = candidate.slice(
    indexOfFirstEmployer,
    indexOfLastEmployer
  );

  const totalPages = Math.ceil(candidate.length / candidatePerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (loading) return <p>Loading candidates...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-center text-slate-800">
        Total Users
      </h1>
      {candidate.length === 0 ? (
        <p className="text-center text-slate-800">No candidate found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCandidate.map((employer, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full bg-slate-600 flex items-center justify-center shadow-inner">
                  <span className="text-2xl font-bold text-white">
                    {employer.fullName
                      ? employer.fullName[0].toUpperCase()
                      : "E"}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {employer.fullName}
                  </h2>
                  <p className="text-gray-500">{employer.email}</p>
                  <p className="text-gray-500">{employer.number}</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-800">
                  <span className="font-bold">Role:</span> {employer.role}
                </p>
                <p className="text-gray-800">
                  <span className="font-bold">Joined:</span>{" "}
                  {new Date(employer.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-slate-800 rounded-lg font-semibold text-gray-100 hover:bg-slate-900 disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <p className="text-slate-800">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-slate-800 rounded-lg font-semibold text-gray-100 hover:bg-slate-900 disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TotalUser;
