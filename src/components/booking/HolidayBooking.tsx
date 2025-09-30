import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search, Heart, Mountain, Waves } from 'lucide-react';

const HolidayBooking: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelers, setTravelers] = useState('2 Adults');
  const [packageType, setPackageType] = useState('All');

  return (
    <div className="space-y-6">
      {/* Package Search Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Destination */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Goa, Kerala, Himachal..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Travel Date */}
        <div className="lg:col-span-2">
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

        {/* Travelers */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            >
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>2 Adults, 1 Child</option>
              <option>2 Adults, 2 Children</option>
              <option>Family (4+)</option>
            </select>
          </div>
        </div>

        {/* Package Type */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">Package Type</label>
          <select
            value={packageType}
            onChange={(e) => setPackageType(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          >
            <option>All Packages</option>
            <option>Honeymoon</option>
            <option>Family Trip</option>
            <option>Adventure</option>
            <option>Beach</option>
            <option>Hill Station</option>
            <option>Heritage</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="lg:col-span-2">
          <div className="h-full flex items-end">
            <button className="w-full bg-gradient-to-r from-[#40a1ef] to-teal-600 text-white py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
              <Search className="w-5 h-5" />
              <span>Search Packages</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Packages */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-800 text-lg">Featured Holiday Packages</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              type: 'Honeymoon',
              title: 'Romantic Goa Getaway',
              duration: '4 Days / 3 Nights',
              price: '₹25,999',
              image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
              icon: Heart,
              features: ['Beach Resort', 'Candlelight Dinner', 'Couple Spa']
            },
            {
              type: 'Adventure',
              title: 'Himalayan Trekking',
              duration: '6 Days / 5 Nights',
              price: '₹18,999',
              image: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=400',
              icon: Mountain,
              features: ['Guided Trek', 'Mountain Views', 'Camping']
            },
            {
              type: 'Family',
              title: 'Kerala Backwaters',
              duration: '5 Days / 4 Nights',
              price: '₹32,999',
              image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=400',
              icon: Waves,
              features: ['Houseboat Stay', 'Cultural Shows', 'Ayurveda Spa']
            }
          ].map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#40a1ef] flex items-center space-x-1">
                    <Icon className="w-4 h-4" />
                    <span>{pkg.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="font-bold text-lg text-gray-800 mb-2">{pkg.title}</h5>
                  <p className="text-gray-600 mb-4">{pkg.duration}</p>
                  <div className="space-y-2 mb-4">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-gray-600">• {feature}</div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-xl text-[#40a1ef]">{pkg.price}</div>
                    <button className="bg-[#40a1ef] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HolidayBooking;