import React from 'react';
import { ArrowRight } from 'lucide-react';

const PopularDestinations: React.FC = () => {
  const destinations = [
    {
      name: 'Goa',
      description: 'Beach paradise with vibrant nightlife',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From ₹8,999'
    },
    {
      name: 'Kerala',
      description: 'Gods own country with backwaters',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From ₹12,999'
    },
    {
      name: 'Rajasthan',
      description: 'Royal heritage and desert culture',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From ₹9,999'
    },
    {
      name: 'Himachal Pradesh',
      description: 'Mountain adventures and hill stations',
      image: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From ₹7,999'
    },
    {
      name: 'Tamil Nadu',
      description: 'Temple trails and cultural heritage',
      image: 'https://images.pexels.com/photos/3585004/pexels-photo-3585004.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From ₹6,999'
    },
    {
      name: 'Karnataka',
      description: 'Tech hub with natural wonders',
      image: 'https://images.pexels.com/photos/12974228/pexels-photo-12974228.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From ₹8,499'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing places across India with our curated travel packages
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
                  <span className="text-2xl font-bold text-[#40a1ef]">{destination.price}</span>
                  <button className="bg-[#40a1ef] text-white px-6 py-2 rounded-full hover:bg-[#40a1ef] transition-colors font-medium">
                    View Packages
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#40a1ef] to-teal-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;