import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search, Star } from 'lucide-react';

const HotelBooking: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Adults, 1 Room');

  return (
    <div className="space-y-6">
      {/* Hotel Search Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Destination */}
        <div className="lg:col-span-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">City, Area or Landmark</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="e.g. Goa, Times Square, Taj Mahal"
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Check-in Date */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Check-out Date */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Guests & Rooms */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Guests & Rooms</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            >
              <option>1 Adult, 1 Room</option>
              <option>2 Adults, 1 Room</option>
              <option>2 Adults, 1 Child, 1 Room</option>
              <option>2 Adults, 2 Rooms</option>
              <option>4 Adults, 2 Rooms</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="lg:col-span-2">
          <div className="h-full flex items-end">
            <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
              <Search className="w-5 h-5" />
              <span>Search Hotels</span>
            </button>
          </div>
        </div>
      </div>

      {/* Popular Hotels */}
      <div className="bg-gray-50 p-6 rounded-xl">
        <h4 className="font-semibold text-gray-800 mb-4">Popular Hotels & Deals</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Luxury Beach Resort', location: 'Goa', rating: 4.8, price: '₹3,999', image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=300' },
            { name: 'Mountain View Hotel', location: 'Manali', rating: 4.6, price: '₹2,499', image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=300' },
            { name: 'City Center Grand', location: 'Mumbai', rating: 4.7, price: '₹4,999', image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=300' }
          ].map((hotel, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={hotel.image} alt={hotel.name} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h5 className="font-semibold text-gray-800">{hotel.name}</h5>
                <p className="text-sm text-gray-600 mb-2">{hotel.location}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{hotel.rating}</span>
                  </div>
                  <div className="font-semibold text-blue-600">{hotel.price}/night</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;