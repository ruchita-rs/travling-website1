import React, { useState } from 'react';
import { ArrowRightLeft, Calendar, Users, Search } from 'lucide-react';

const FlightBooking: React.FC = () => {
  const [tripType, setTripType] = useState('roundTrip');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState('1 Adult');
  const [flightClass, setFlightClass] = useState('Economy');

  const handleSwapCities = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="space-y-6">
      {/* Trip Type */}
      <div className="flex flex-wrap gap-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="tripType"
            value="oneWay"
            checked={tripType === 'oneWay'}
            onChange={(e) => setTripType(e.target.value)}
            className="text-blue-600"
          />
          <span className="text-gray-700 font-medium">One Way</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="tripType"
            value="roundTrip"
            checked={tripType === 'roundTrip'}
            onChange={(e) => setTripType(e.target.value)}
            className="text-blue-600"
          />
          <span className="text-gray-700 font-medium">Round Trip</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="tripType"
            value="multiCity"
            checked={tripType === 'multiCity'}
            onChange={(e) => setTripType(e.target.value)}
            className="text-blue-600"
          />
          <span className="text-gray-700 font-medium">Multi City</span>
        </label>
      </div>

      {/* Flight Search Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* From & To Cities */}
        <div className="lg:col-span-4 relative">
          <div className="grid grid-cols-2 gap-2 relative">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Delhi (DEL)"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Mumbai (BOM)"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />
            </div>
          </div>
          <button
            onClick={handleSwapCities}
            className="absolute right-2 top-12 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
          >
            <ArrowRightLeft className="w-4 h-4 text-blue-600" />
          </button>
        </div>

        {/* Dates */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Departure</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                />
              </div>
            </div>
            {tripType === 'roundTrip' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Return</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Passengers & Class */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                >
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>1 Adult, 1 Child</option>
                  <option>2 Adults, 1 Child</option>
                  <option>2 Adults, 2 Children</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
              <select
                value={flightClass}
                onChange={(e) => setFlightClass(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              >
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="lg:col-span-2">
          <div className="h-full flex items-end">
            <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
              <Search className="w-5 h-5" />
              <span>Search Flights</span>
            </button>
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-orange-800">Special Flight Offers</h4>
            <p className="text-sm text-orange-600">Save up to 30% on international flights</p>
          </div>
          <button className="text-orange-600 font-medium hover:text-orange-700">View All →</button>
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;