import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search, Mountain, Waves, Camera, Music } from 'lucide-react';

const ActivitiesBooking: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [activityDate, setActivityDate] = useState('');
  const [participants, setParticipants] = useState('2 Adults');
  const [category, setCategory] = useState('All');

  return (
    <div className="space-y-6">
      {/* Activities Search Form */}
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
              placeholder="City or landmark"
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Activity Date */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Activity Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="date"
              value={activityDate}
              onChange={(e) => setActivityDate(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Participants */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Participants</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            >
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>2 Adults, 1 Child</option>
              <option>Family (4+)</option>
              <option>Group (6+)</option>
            </select>
          </div>
        </div>

        {/* Category */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          >
            <option>All Categories</option>
            <option>Adventure Sports</option>
            <option>Water Sports</option>
            <option>City Tours</option>
            <option>Cultural Shows</option>
            <option>Food & Dining</option>
            <option>Photography</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="lg:col-span-2">
          <div className="h-full flex items-end">
            <button className="w-full bg-gradient-to-r from-[#40a1ef] to-teal-600 text-white py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
              <Search className="w-5 h-5" />
              <span>Search Activities</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Activities */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-800 text-lg">Popular Activities & Experiences</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              category: 'Adventure',
              title: 'Paragliding in Manali',
              duration: '2-3 hours',
              price: '₹2,999',
              image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400',
              icon: Mountain,
              rating: 4.8
            },
            {
              category: 'Water Sports',
              title: 'Scuba Diving in Goa',
              duration: '4-5 hours',
              price: '₹3,499',
              image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400',
              icon: Waves,
              rating: 4.7
            },
            {
              category: 'Cultural',
              title: 'Heritage Walk Jaipur',
              duration: '3-4 hours',
              price: '₹1,299',
              image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400',
              icon: Camera,
              rating: 4.6
            },
            {
              category: 'Entertainment',
              title: 'Bollywood Show Mumbai',
              duration: '2-3 hours',
              price: '₹1,999',
              image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=400',
              icon: Music,
              rating: 4.9
            }
          ].map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={activity.image} alt={activity.title} className="w-full h-40 object-cover" />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#40a1ef] flex items-center space-x-1">
                    <Icon className="w-4 h-4" />
                    <span>{activity.category}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium">
                    ★ {activity.rating}
                  </div>
                </div>
                <div className="p-4">
                  <h5 className="font-bold text-gray-800 mb-2">{activity.title}</h5>
                  <p className="text-gray-600 text-sm mb-3">{activity.duration}</p>
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-lg text-[#40a1ef]">{activity.price}</div>
                    <button className="bg-[#40a1ef] text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Book Now
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

export default ActivitiesBooking;