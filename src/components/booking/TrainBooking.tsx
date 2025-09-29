import React, { useState } from 'react';
import { ArrowRightLeft, Calendar, Users, Search } from 'lucide-react';

const TrainBooking: React.FC = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [journeyDate, setJourneyDate] = useState('');
  const [trainClass, setTrainClass] = useState('3AC');

  const handleSwapStations = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="space-y-6">
      {/* Train Search Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* From & To Stations */}
        <div className="lg:col-span-4 relative">
          <div className="grid grid-cols-2 gap-2 relative">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From Station</label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="New Delhi (NDLS)"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To Station</label>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Mumbai Central (BCT)"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />
            </div>
          </div>
          <button
            onClick={handleSwapStations}
            className="absolute right-2 top-12 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
          >
            <ArrowRightLeft className="w-4 h-4 text-blue-600" />
          </button>
        </div>

        {/* Journey Date */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">Journey Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="date"
              value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Train Class */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
          <select
            value={trainClass}
            onChange={(e) => setTrainClass(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          >
            <option>Sleeper (SL)</option>
            <option>Third AC (3AC)</option>
            <option>Second AC (2AC)</option>
            <option>First AC (1AC)</option>
            <option>AC Chair Car (CC)</option>
            <option>Second Sitting (2S)</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="lg:col-span-2">
          <div className="h-full flex items-end">
            <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
              <Search className="w-5 h-5" />
              <span>Search Trains</span>
            </button>
          </div>
        </div>
      </div>

      {/* Train Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <div className="text-green-800 font-semibold mb-2">Live Train Running Status</div>
          <p className="text-sm text-green-600">Track your train in real-time</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
          <div className="text-blue-800 font-semibold mb-2">PNR Status Check</div>
          <p className="text-sm text-blue-600">Check your booking confirmation</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
          <div className="text-purple-800 font-semibold mb-2">Seat Availability</div>
          <p className="text-sm text-purple-600">Check available seats instantly</p>
        </div>
      </div>
    </div>
  );
};

export default TrainBooking;