import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../config/config";
import Loader from "../../Loader/Loader";

const LoanData = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLoan, setSelectedLoan] = useState(null);

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}loans/get-loan-data`);
        setLoans(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchLoanData();
  }, []);

  const handleViewDetails = (loan) => {
    setSelectedLoan(loan);
  };
  const closeModal = () => {
    setSelectedLoan(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}loans/delete-loan-data/${id}`);
      setLoans(loans.filter((loan) => loan._id !== id));
      closeModal();
    } catch (err) {
      setError(err.message || "An error occurred while deleting the loan");
    }
  };

  const exportData = () => {
    const headers = [
      "S.No.",
      "Full Name",
      "Email",
      "Phone",
      "Loan Amount",
      "PanNumber",
      "aadharNumber",
      "monthlySalary",
      "Gender",
      "State",
      "City",
      "Employment Status",
      "Pincode",
      "Date",
    ];
    const rows = loans.map((loan, index) => [
      index + 1,
      loan.fullName,
      loan.email,
      loan.phone,
      loan.loanAmount,
      loan.panNumber,
      loan.aadharNumber,
      loan.monthlySalary,
      loan.gender,
      loan.state,
      loan.city,
      loan.employmentStatus,
      loan.pincode,
      loan.date,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.href = url;
    link.download = "loan_data.csv";
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (error) return <div>Error: {error}</div>;

  return (
    <div
      className="loan-data-container min-h-screen"
      style={{ padding: "20px" }}
    >
      <h1 className="text-3xl font-bold text-center my-8 ">Loan Data</h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={exportData}
          className=" border-2 border-slate-800 px-4 py-2 rounded-sm hover:bg-blue-500 hover:text-white font-bold transition duration-300"
        >
          Export Data
        </button>
      </div>

      {loans.length === 0 ? (
        <p>No loans available.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table
            className="loan-data-table"
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "900px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f4f4f4" }}>
                <th style={tableHeaderStyles}>S.No.</th>
                <th style={tableHeaderStyles}>Full Name</th>
                <th style={tableHeaderStyles}>Email</th>
                <th style={tableHeaderStyles}>Phone</th>
                <th style={tableHeaderStyles}>Loan Amount</th>
                <th style={tableHeaderStyles}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan, index) => (
                <tr key={loan._id}>
                  <td style={tableCellStyles}>{index + 1}</td>
                  <td style={tableCellStyles}>{loan.fullName}</td>
                  <td style={tableCellStyles}>{loan.email}</td>
                  <td style={tableCellStyles}>{loan.phone}</td>
                  <td style={tableCellStyles}>{loan.loanAmount}</td>
                  <td style={tableCellStyles}>
                    <button
                      onClick={() => handleViewDetails(loan)}
                      className=" border border-slate-800 px-4 py-2 rounded-sm hover:bg-blue-500 hover:text-white font-bold transition duration-300"
                    >
                      View More Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedLoan && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full overflow-y-auto max-h-[90vh] p-6">
            <h2 className="text-center text-xl font-bold text-gray-800 mb-4">
              Loan Details
            </h2>

            <div className="space-y-2">
              <p>
                <strong>Full Name:</strong> {selectedLoan.fullName}
              </p>
              <p>
                <strong>Email:</strong> {selectedLoan.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedLoan.phone}
              </p>
              <p>
                <strong>PAN Number:</strong> {selectedLoan.panNumber}
              </p>
              <p>
                <strong>Aadhar Number:</strong> {selectedLoan.aadharNumber}
              </p>
              <p>
                <strong>Loan Amount:</strong> {selectedLoan.loanAmount}
              </p>
              <p>
                <strong>Monthly Salary:</strong> {selectedLoan.monthlySalary}
              </p>
              <p>
                <strong>Loan Purpose:</strong> {selectedLoan.loanPurpose}
              </p>
              <p>
                <strong>Gender:</strong> {selectedLoan.gender}
              </p>
              <p>
                <strong>State:</strong> {selectedLoan.state}
              </p>
              <p>
                <strong>City:</strong> {selectedLoan.city}
              </p>
              <p>
                <strong>Employment Status:</strong>{" "}
                {selectedLoan.employmentStatus}
              </p>
              <p>
                <strong>Pincode:</strong> {selectedLoan.pincode}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(selectedLoan.date).toLocaleDateString()}
              </p>
            </div>

            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Close
              </button>
              <button
                onClick={() => handleDelete(selectedLoan._id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const tableHeaderStyles = {
  border: "2px solid #191a19",
  padding: "8px",
  textAlign: "center",
  fontWeight: "bold",
};

const tableCellStyles = {
  border: "2px solid #191a19",
  padding: "8px",
  textAlign: "center",
};

const buttonStyles = {
  color: "#21262B",
  fontWeight: "bold",
  border: "2px solid #21262B",
  padding: "8px 12px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
};

buttonStyles[":hover"] = {
  backgroundColor: "#2196F3",
};

export default LoanData;
