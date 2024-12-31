import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../config/config";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loanData, setLoanData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const usersPerPage = 7; // Display only 7 users initially
  const loansPerPage = 8; // Display only 8 loans initially
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Fetch Users
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
      } catch (err) {
        setError(err.message);
      }
    };

    // Fetch Loan Data
    const fetchLoanData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}loans/get-loan-data`);
        setLoanData(response.data.data);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);  // Set loading to false after data is fetched
      }
    };

    fetchUsers();
    fetchLoanData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Handle "View More Users" button click
  const handleViewMoreUsers = () => {
    navigate("/admin/admin/total-user-admin");
  };

  // Handle "View More Loans" button click
  const handleViewMoreLoans = () => {
    navigate("/admin/admin/loan-form-data");
  };

  return (
    <div className="container mx-auto p-4 min-h-screen"> 
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Dashboard</h1>
      <div>
        <h2 className="text-2xl font-bold my-8">Total Users: {users.length}</h2>
      </div>

      {/* Users Data */}
      <div className="overflow-x-auto mb-8">
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
            {users.slice(0, usersPerPage).map((user, index) => (
              <tr
                key={user._id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="border border-gray-400 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-400 px-4 py-2">{user.fullName}</td>
                <td className="border border-gray-400 px-4 py-2">{user.email}</td>
                <td className="border border-gray-400 px-4 py-2">{user.number}</td>
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
        <button
          onClick={handleViewMoreUsers}
          className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
        >
          View More Users
        </button>
      </div>

      {/* Loan Data */}
      <div>
        <h2 className="text-2xl font-bold my-8">Loan Data</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-400 mb-6">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">S.No</th>
                <th className="border border-gray-400 px-4 py-2">Full Name</th>
                <th className="border border-gray-400 px-4 py-2">Loan Amount</th>
                <th className="border border-gray-400 px-4 py-2">Loan Purpose</th>
                <th className="border border-gray-400 px-4 py-2">Employment Status</th>
                <th className="border border-gray-400 px-4 py-2">Phone</th>
                <th className="border border-gray-400 px-4 py-2">City</th>
                <th className="border border-gray-400 px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {loanData.slice(0, loansPerPage).map((loan, index) => (
                <tr
                  key={loan.aadharNumber}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-400 px-4 py-2">{loan.fullName}</td>
                  <td className="border border-gray-400 px-4 py-2">{loan.loanAmount}</td>
                  <td className="border border-gray-400 px-4 py-2">{loan.loanPurpose}</td>
                  <td className="border border-gray-400 px-4 py-2">{loan.employmentStatus}</td>
                  <td className="border border-gray-400 px-4 py-2">{loan.phone}</td>
                  <td className="border border-gray-400 px-4 py-2">{loan.city}</td>
                  <td className="border border-gray-400 px-4 py-2">{loan.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={handleViewMoreLoans}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          View More Loans
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
