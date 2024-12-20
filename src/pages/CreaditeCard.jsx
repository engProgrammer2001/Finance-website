import React from "react";
import CreaditeCardData from "../data/CreaditeCardData";
import { useNavigate } from "react-router-dom";
import BenifitsOfCreaditeCard from "../components/BenifitsOfCreaditeCard/BenifitsOfCreaditeCard";
import CrediteCardFaq from "../components/CreditCardFaq/CreditCardFaq";

const CreaditeCard = () => {
  const navigate = useNavigate();

  const handleRedirect = (id) => {
    navigate(`/credite-card-details/${id}`);
  };

  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-zinc-800 text-4xl lg:text-5xl text-center my-10 font-extrabold">
          Choose Your Credit Card
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CreaditeCardData.map((card) => (
            <div
              key={card.id}
              className="relative group bg-gradient-to-r from-yellow-500 to-green-500 text-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => handleRedirect(card.id)}
            >
              {/* Image Section */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              {/* Title and Short Description */}
              <div className="p-4">
                <h2 className="text-lg font-bold group-hover:text-yellow-300">
                  {card.title}
                </h2>
                <p className="text-sm mt-2">{card.shortDescription}</p>
              </div>
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                <button className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <BenifitsOfCreaditeCard />
      </div>
      <div className="my-12">
        <CrediteCardFaq />
      </div>
    </div>
  );
};

export default CreaditeCard;
