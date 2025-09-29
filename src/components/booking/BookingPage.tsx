import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { flight, searchParams } = location.state as {
    flight: {
      airline: string;
      from: string;
      to: string;
      departure: string;
      arrival: string;
      duration: string;
      price: string;
    };
    searchParams: {
      tripType: string;
      from: string;
      to: string;
      departureDate: string;
      returnDate?: string;
      passengers: string;
      flightClass: string;
    };
  };

  const handleConfirmBooking = () => {
    alert("Booking Confirmed!");
    navigate("/"); 
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-4">Booking Confirmation</h2>

      {/* Flight Info */}
      <div className="border rounded-xl p-4 shadow-sm bg-gray-50">
        <h3 className="font-semibold text-lg mb-2">{flight.airline}</h3>
        <p>
          {flight.from} → {flight.to}
        </p>
        <p>
          {flight.departure} → {flight.arrival} ({flight.duration})
        </p>
        <p className="font-bold mt-2">Price: {flight.price}</p>
      </div>

      
      <div className="border rounded-xl p-4 shadow-sm bg-white">
        <h4 className="font-medium mb-2">Passenger Details</h4>
        <p>
          <strong>Passengers:</strong> {searchParams.passengers}
        </p>
        <p>
          <strong>Class:</strong> {searchParams.flightClass}
        </p>
        <p>
          <strong>Departure Date:</strong> {searchParams.departureDate}
        </p>
        {searchParams.returnDate && (
          <p>
            <strong>Return Date:</strong> {searchParams.returnDate}
          </p>
        )}
        <p>
          <strong>Trip Type:</strong> {searchParams.tripType}
        </p>
      </div>

     
      <button
        onClick={handleConfirmBooking}
        className="w-full py-3 bg-[#40a1ef] text-white text-lg font-semibold rounded-lg hover:bg-[#40a1ef]"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingPage;
