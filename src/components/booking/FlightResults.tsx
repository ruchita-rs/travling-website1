import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FlightResults: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = location.state as {
    tripType: string;
    from: string;
    to: string;
    departureDate: string;
    returnDate?: string;
    passengers: string;
    flightClass: string;
  };

  // Agar flights array me data fix nahi hai to yeh dummy bana lo
  const availableFlights = [
    {
      id: 1,
      airline: "Air India",
      from: searchParams.from,
      to: searchParams.to,
      departure: "08:00",
      arrival: "10:30",
      duration: "2h 30m",
      price: "₹4,500",
    },
    {
      id: 2,
      airline: "IndiGo",
      from: searchParams.from,
      to: searchParams.to,
      departure: "12:00",
      arrival: "14:20",
      duration: "2h 20m",
      price: "₹4,800",
    },
    {
      id: 3,
      airline: "Vistara",
      from: searchParams.from,
      to: searchParams.to,
      departure: "18:00",
      arrival: "20:40",
      duration: "2h 40m",
      price: "₹5,200",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-4">
        Flights: {searchParams.from} → {searchParams.to}
      </h2>

      {availableFlights.map((flight) => (
        <div
          key={flight.id}
          className="border p-4 rounded-xl shadow-sm flex justify-between items-center"
        >
          <div>
            <h3 className="font-medium">{flight.airline}</h3>
            <p>
              {flight.departure} → {flight.arrival} ({flight.duration})
            </p>
            <p className="text-sm text-gray-500">
              {flight.from} → {flight.to} | {searchParams.flightClass} |{" "}
              {searchParams.passengers} Passengers
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold">{flight.price}</p>
            <button
              onClick={() =>
                navigate("/book", { state: { flight, searchParams } })
              }
              className="mt-2 px-4 py-2 bg-[#40a1ef] text-white rounded-lg hover:bg-[#40a1ef]"
            >
              Book
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightResults;
