import React from "react";
import insuranceData from "../data/InsuranceData";
import { Link, useNavigate } from "react-router-dom";

const Insurance = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/sb-finance/insurance/insurance-details/${id}`);
  };
  return (
    <>
      <div>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-zinc-800 text-4xl lg:text-5xl text-center my-10 font-extrabold">
          Choose Your Insurance Plan
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {insuranceData.map((insurance) => (
          <div
            key={insurance.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-between cursor-pointer hover:shadow-2xl transition-shadow"
            onClick={() => handleClick(insurance.id)}
          >
            <img
              src={insurance.image}
              alt={insurance.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 py-2">
              {insurance.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {insurance.shortDescription}
            </p>
            <div className="p-2 w-full bg-gradient-to-r from-green-400 to-blue-400 text-slate-900 text-center rounded-lg font-bold hover:from-green-500 hover:to-blue-500">
              <Link>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Insurance;
