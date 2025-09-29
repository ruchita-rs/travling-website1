import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Search, Car } from 'lucide-react';

const CabBooking: React.FC = () => {
  const [tripType, setTripType] = useState('outstation');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  return (
    <div className="space-y-6">
      {/* Trip Type */}
      <div className="flex flex-wrap gap-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="tripType"
            value="outstation"
            checked={tripType === 'outstation'}
            onChange={(e) => setTripType(e.target.value)}
            className="text-blue-600"
          />
          <span className="text-gray-700 font-medium">Outstation</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="tripType"
            value="airport"
            checked={tripType === 'airport'}
            onChange={(e) => setTripType(e.target.value)}
            className="text-blue-600"
          />
          <span className="text-gray-700 font-medium">Airport Transfer</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="tripType"
            value="local"
            checked={tripType === 'local'}
            onChange={(e) => setTripType(e.target.value)}
            className="text-blue-600"
          />
          <span className="text-gray-700 font-medium">Local Rides</span>
        </label>
      </div>

      {/* Cab Booking Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Pickup Location */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup location"
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Drop Location */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">Drop Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              placeholder="Enter drop location"
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Pickup Date */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Pickup Time */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Time</label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="lg:col-span-2">
          <div className="h-full flex items-end">
            <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
              <Search className="w-5 h-5" />
              <span>Search Cabs</span>
            </button>
          </div>
        </div>
      </div>

      {/* Car Types */}
      <div className="bg-gray-50 p-6 rounded-xl">
        <h4 className="font-semibold text-gray-800 mb-4">Available Car Types</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { type: 'Hatchback', capacity: '4 Seater', price: '₹8/km', image: 'Maruti Swift, Hyundai i10' },
            { type: 'Sedan', capacity: '4 Seater', price: '₹10/km', image: 'Honda City, Maruti Dzire' },
            { type: 'SUV', capacity: '6-7 Seater', price: '₹14/km', image: 'Toyota Innova, Mahindra XUV' },
            { type: 'Luxury', capacity: '4 Seater', price: '₹20/km', image: 'BMW, Audi, Mercedes' }
          ].map((car, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center space-x-2 mb-2">
                <Car className="w-5 h-5 text-blue-600" />
                <div className="font-semibold text-gray-800">{car.type}</div>
              </div>
              <div className="text-sm text-gray-600 mb-1">{car.capacity}</div>
              <div className="text-sm text-gray-500 mb-2">{car.image}</div>
              <div className="font-semibold text-blue-600">{car.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CabBooking;