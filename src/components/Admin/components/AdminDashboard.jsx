import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../config/config";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}user/get-all-user-profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Calculate the data to display for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Handle page change
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mx-auto p-4 max-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Dashboard</h1>
      <div>
        <h2 className="text-2xl font-bold my-8">Total Users: {users.length}</h2>
      </div>
      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">S.No</th>
              <th className="border border-gray-400 px-4 py-2">Full Name</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
              <th className="border border-gray-400 px-4 py-2">Phone Number</th>
              <th className="border border-gray-400 px-4 py-2">Role</th>
              <th className="border border-gray-400 px-4 py-2">Avatar</th>
              <th className="border border-gray-400 px-4 py-2">Created At</th>
              <th className="border border-gray-400 px-4 py-2">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr
                key={user._id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="border border-gray-400 px-4 py-2">
                  {indexOfFirstUser + index + 1}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.fullName}
                </td>
                <td className="border border-gray-400 px-4 py-2">{user.email}</td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.number}
                </td>
                <td className="border border-gray-400 px-4 py-2">{user.role}</td>
                <td className="border border-gray-400 px-4 py-2">
                  <img
                    src={user.avatar}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {new Date(user.createdAt).toLocaleString()}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {new Date(user.updatedAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            currentPage === totalPages && "opacity-50 cursor-not-allowed"
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
