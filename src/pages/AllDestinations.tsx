// src/pages/AllDestinations.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AllDestinations: React.FC = () => {
  const navigate = useNavigate();

  const destinations = [
    {
      name: 'Goa',
      description: 'Beach paradise with vibrant nightlife, water sports, and beautiful sunsets.',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From ₹8,999',
      slug: 'goa'
    },
    {
      name: 'Kerala',
      description: 'Gods own country with backwaters, houseboats, and lush greenery.',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From ₹12,999',
      slug: 'kerala'
    },
    {
      name: 'Rajasthan',
      description: 'Royal heritage, desert culture, forts, and palaces.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From ₹9,999',
      slug: 'rajasthan'
    },
    {
      name: 'Himachal Pradesh',
      description: 'Mountain adventures, hill stations, and trekking spots.',
      image: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From ₹7,999',
      slug: 'himachal-pradesh'
    },
    {
      name: 'Tamil Nadu',
      description: 'Temple trails, cultural heritage, and historical monuments.',
      image: 'https://images.pexels.com/photos/3585004/pexels-photo-3585004.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From ₹6,999',
      slug: 'tamil-nadu'
    },
    {
      name: 'Karnataka',
      description: 'Tech hub, natural wonders, wildlife sanctuaries, and beaches.',
      image: 'https://images.pexels.com/photos/12974228/pexels-photo-12974228.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From ₹8,499',
      slug: 'karnataka'
    },
    // Add more destinations if needed
  ];

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore All Destinations
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover detailed travel packages across India. Plan your next adventure with us!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{destination.price}</span>
                  <button
                    onClick={() => navigate(`/packages/${destination.slug}`)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
                  >
                    View Packages
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">More destinations coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default AllDestinations;
