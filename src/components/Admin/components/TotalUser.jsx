import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../config/config";
import Loader from "../../Loader/Loader";

const TotalUser = () => {
  const [candidate, setCandidate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const candidatePerPage = 10;

  const token = localStorage.getItem("token");

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
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
  }, [token]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

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

  const exportData = () => {
    const csvData = [["Full Name", "Email", "Number", "Role", "Joined"]];
    candidate.forEach((user) => {
      csvData.push([
        user.fullName || "N/A",
        user.email || "N/A",
        user.number || "N/A",
        user.role || "N/A",
        new Date(user.createdAt).toLocaleDateString() || "N/A",
      ]);
    });

    const csvContent = csvData.map((row) => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "candidates.csv";
    link.click();
  };
  if (loading)
    return (
      <p>
        <Loader />
      </p>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-center text-slate-800">
        Total Users
      </h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={exportData}
          className="px-4 py-2 border-2 border-slate-800 text-slate-800 font-bold rounded-sm hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Export Data
        </button>
      </div>
      {candidate.length === 0 ? (
        <p className="text-center text-slate-800">No candidate found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border-2 border-slate-800">
            <thead>
              <tr>
                <th className="border-2 border-slate-800 px-4 py-2">S.No.</th>
                <th className="border-2 border-slate-800 px-4 py-2">
                  Full Name
                </th>
                <th className="border-2 border-slate-800 px-4 py-2">Email</th>
                <th className="border-2 border-slate-800 px-4 py-2">Number</th>
                <th className="border-2 border-slate-800 px-4 py-2">Role</th>
                <th className="border-2 border-slate-800 px-4 py-2">Joined</th>
              </tr>
            </thead>
            <tbody>
              {currentCandidate.map((user, index) => (
                <tr key={index}>
                  <td className="border-2 border-slate-800 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border-2 border-slate-800 px-4 py-2">
                    {user.fullName}
                  </td>
                  <td className="border-2 border-slate-800 px-4 py-2">
                    {user.email}
                  </td>
                  <td className="border-2 border-slate-800 px-4 py-2">
                    {user.number}
                  </td>
                  <td className="border-2 border-slate-800 px-4 py-2">
                    {user.role}
                  </td>
                  <td className="border-2 border-slate-800 px-4 py-2">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
