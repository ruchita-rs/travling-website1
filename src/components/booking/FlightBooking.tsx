import React, { useState } from "react";
import { ArrowRightLeft, Calendar, Users, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const airports = [
  { code: "DEL", city: "Delhi", country: "India" },
  { code: "BOM", city: "Mumbai", country: "India" },
  { code: "BLR", city: "Bangalore", country: "India" },
  { code: "MAA", city: "Chennai", country: "India" },
  { code: "LHR", city: "London", country: "UK" },
  { code: "JFK", city: "New York", country: "USA" },
  { code: "DXB", city: "Dubai", country: "UAE" },
  { code: "NRT", city: "Tokyo", country: "Japan" },
];

const FlightBooking: React.FC = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("roundTrip");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("1 Adult");
  const [flightClass, setFlightClass] = useState("Economy");
  const [showOffers, setShowOffers] = useState(false);
  const [filteredFrom, setFilteredFrom] = useState<typeof airports>([]);
  const [filteredTo, setFilteredTo] = useState<typeof airports>([]);

  const handleSwapCities = () => {
    setFrom(to);
    setTo(from);
  };

  const offers = [
    { id: 1, title: "Save 30% on International Flights", desc: "Limited time deal" },
    { id: 2, title: "Flat ₹2000 OFF on Domestic Flights", desc: "Use code FLY2000" },
    { id: 3, title: "Business Class Special", desc: "Up to 25% OFF" },
    { id: 4, title: "Festive Season Offer", desc: "Get cashback up to ₹5000" },
  ];

  const handleSearchFlights = () => {
    if (!from || !to || !departureDate || (tripType === "roundTrip" && !returnDate)) {
      alert("Please fill all required fields.");
      return;
    }

    // Navigate to results page with state
    navigate("/results", {
      state: {
        tripType,
        from,
        to,
        departureDate,
        returnDate: tripType === "roundTrip" ? returnDate : null,
        passengers,
        flightClass,
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      {/* Trip Type Tabs */}
      <div className="flex bg-white rounded-xl shadow-md p-1 w-full md:w-fit mx-auto">
        {[
          { value: "oneWay", label: "One Way" },
          { value: "roundTrip", label: "Round Trip" },
          { value: "multiCity", label: "Multi City" },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setTripType(tab.value)}
            className={`px-6 py-2 rounded-xl font-medium transition-colors ${tripType === tab.value
                ? "bg-[#40a1ef] text-white"
                : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* From & To Section */}
      <div className="md:col-span-4 relative flex items-center gap-2">
        {/* From */}
        <div className="flex-1 relative">
          <label className="block text-xs font-medium text-gray-500 mb-1">From</label>
          <input
            type="text"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
              setFilteredFrom(
                airports.filter(
                  (a) =>
                    a.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
                    a.code.toLowerCase().includes(e.target.value.toLowerCase())
                )
              );
            }}
            placeholder="Delhi (DEL)"
            className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {filteredFrom.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded-lg max-h-48 overflow-y-auto z-50">
              {filteredFrom.map((airport) => (
                <li
                  key={airport.code}
                  onClick={() => {
                    setFrom(`${airport.city} (${airport.code})`);
                    setFilteredFrom([]);
                  }}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {airport.city} ({airport.code}) - {airport.country}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Swap Button in Middle */}
        <button
          onClick={handleSwapCities}
          className="flex-shrink-0 bg-white border  border-gray-300 rounded-full p-2 shadow hover:bg-gray-50 transition-colors"
        >
          <ArrowRightLeft className="w-5 h-5  text-blue-600 " />
        </button>

        {/* To */}
        <div className="flex-1 relative">
          <label className="block text-xs font-medium text-gray-500 mb-1">To</label>
          <input
            type="text"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
              setFilteredTo(
                airports.filter(
                  (a) =>
                    a.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
                    a.code.toLowerCase().includes(e.target.value.toLowerCase())
                )
              );
            }}
            placeholder="Mumbai (BOM)"
            className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {filteredTo.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded-lg max-h-48 overflow-y-auto z-50">
              {filteredTo.map((airport) => (
                <li
                  key={airport.code}
                  onClick={() => {
                    setTo(`${airport.city} (${airport.code})`);
                    setFilteredTo([]);
                  }}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {airport.city} ({airport.code}) - {airport.country}
                </li>
              ))}
            </ul>
          )}
        </div>


        {/* Dates */}
        <div className="md:col-span-3 grid grid-cols-1 gap-2">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-500 mb-1">Departure</label>
            <Calendar className="absolute left-3 top-11 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {tripType === "roundTrip" && (
            <div className="relative">
              <label className="block text-xs font-medium text-gray-500 mb-1">Return</label>
              <Calendar className="absolute left-3 top-11 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
        </div>

        {/* Passengers & Class */}
        <div className="md:col-span-3 grid grid-cols-1 gap-2">
          <div className="relative">
            <label className="block text-xs font-medium text-gray-500 mb-1">Passengers</label>
            <Users className="absolute left-3 top-11 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>1 Adult, 1 Child</option>
              <option>2 Adults, 1 Child</option>
              <option>2 Adults, 2 Children</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Class</label>
            <select
              value={flightClass}
              onChange={(e) => setFlightClass(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#40a1ef]"
            >
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="md:col-span-2 flex items-end">
          <button
            onClick={handleSearchFlights}
            className="w-full bg-gradient-to-r from-[#40a1ef] to-teal-600 text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold"
          >
            <Search className="w-5 h-5" />
            <span>Search Flights</span>
          </button>
        </div>
      </div>

      {/* Special Offers */}
      <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <h4 className="font-semibold text-orange-800">Special Flight Offers</h4>
            <p className="text-sm text-orange-600">Save up to 30% on international flights</p>
          </div>
          <button
            onClick={() => setShowOffers(!showOffers)}
            className="text-orange-600 font-medium hover:text-orange-700"
          >
            {showOffers ? "Hide Offers ↑" : "View All →"}
          </button>
        </div>
        {showOffers && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {offers.map((offer) => (
              <div key={offer.id} className="p-3 bg-white rounded-lg shadow-sm border border-orange-100">
                <h5 className="font-medium text-orange-800">{offer.title}</h5>
                <p className="text-sm text-orange-600">{offer.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightBooking;
