import React, { useState } from 'react';
import { ArrowRightLeft, Calendar, Filter, Search } from 'lucide-react';

const BusBooking: React.FC = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [busType, setBusType] = useState('All');

  const handleSwapCities = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="space-y-6">
      {/* Bus Search Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* From & To Cities */}
        <div className="lg:col-span-4 relative">
          <div className="grid grid-cols-2 gap-2 relative">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From City</label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Delhi"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To City</label>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Jaipur"
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

        {/* Travel Date */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Bus Type Filter */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">Bus Type</label>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={busType}
              onChange={(e) => setBusType(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            >
              <option>All Bus Types</option>
              <option>AC</option>
              <option>Non-AC</option>
              <option>Sleeper</option>
              <option>Semi-Sleeper</option>
              <option>Volvo</option>
              <option>Luxury</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="lg:col-span-2">
          <div className="h-full flex items-end">
            <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
              <Search className="w-5 h-5" />
              <span>Search Buses</span>
            </button>
          </div>
        </div>
      </div>

      {/* Popular Routes */}
      <div className="bg-gray-50 p-6 rounded-xl">
        <h4 className="font-semibold text-gray-800 mb-4">Popular Bus Routes</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { route: 'Delhi → Jaipur', duration: '5h 30m', price: 'From ₹599' },
            { route: 'Mumbai → Pune', duration: '3h 45m', price: 'From ₹399' },
            { route: 'Bangalore → Chennai', duration: '6h 15m', price: 'From ₹699' },
            { route: 'Hyderabad → Vijayawada', duration: '4h 20m', price: 'From ₹499' }
          ].map((route, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
              <div className="font-semibold text-gray-800 mb-2">{route.route}</div>
              <div className="text-sm text-gray-600 mb-1">{route.duration}</div>
              <div className="font-semibold text-blue-600">{route.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusBooking;