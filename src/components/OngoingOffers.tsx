import React from 'react';
import { Percent, CreditCard, Gift, Clock, ArrowRight } from 'lucide-react';

const OngoingOffers: React.FC = () => {
  const offers = [
    {
      type: 'Flight Offer',
      title: 'Flat 30% OFF on International Flights',
      description: 'Book international flights and save big on your next adventure',
      code: 'INTFLY30',
      validity: 'Valid till 31st March',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Percent,
      color: 'from-blue-500 to-blue-700'
    },
    {
      type: 'Hotel Deal',
      title: 'Book Hotels & Get 25% Cashback',
      description: 'Stay in premium hotels with maximum savings',
      code: 'HOTEL25',
      validity: 'Valid for 7 days',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Gift,
      color: 'from-green-500 to-green-700'
    },
    {
      type: 'Train Offer',
      title: 'IRCTC Booking - Zero Convenience Fee',
      description: 'Book train tickets without any extra charges',
      code: 'TRAINZERO',
      validity: 'Limited time offer',
      image: 'https://images.pexels.com/photos/3572920/pexels-photo-3572920.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Clock,
      color: 'from-purple-500 to-purple-700'
    },
    {
      type: 'Bank Offer',
      title: 'Extra 15% OFF with HDFC Cards',
      description: 'Additional savings on all bookings with HDFC Bank',
      code: 'HDFC15',
      validity: 'Valid on weekends',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: CreditCard,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const quickOffers = [
    { text: 'Flat ₹500 OFF on Bus bookings', code: 'BUS500' },
    { text: 'Holiday Packages starting ₹9,999', code: 'HOLIDAY99' },
    { text: 'Free cancellation on Hotels', code: 'FREECANCEL' },
    { text: '10% OFF on Cab bookings', code: 'CAB10' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ongoing Offers & Deals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Save more on your travels with our exclusive offers and cashback deals
          </p>
        </div>

        {/* Main Offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${offer.color} opacity-80`} />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span>{offer.type}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gray-100 px-4 py-2 rounded-lg">
                      <span className="text-sm text-gray-500">Code:</span>
                      <span className="font-bold text-gray-800 ml-2">{offer.code}</span>
                    </div>
                    <span className="text-sm text-gray-500">{offer.validity}</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
                    <span>Grab Offer</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Offers Banner */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-6">⚡ Quick Offers - Limited Time!</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickOffers.map((offer, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-colors cursor-pointer">
                <p className="font-medium mb-2">{offer.text}</p>
                <span className="text-sm bg-white/30 px-3 py-1 rounded-full">{offer.code}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Wallet & Bank Offers */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
              <CreditCard className="w-6 h-6 text-blue-600" />
              <span>Bank Offers</span>
            </h4>
            <div className="space-y-3">
              {[
                'HDFC Bank: Extra 15% OFF + No Cost EMI',
                'ICICI Bank: Flat ₹1000 OFF on ₹10,000+',
                'SBI Cards: 10% Cashback up to ₹2000',
                'Axis Bank: Zero Processing Fee'
              ].map((offer, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-700">{offer}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
              <Gift className="w-6 h-6 text-green-600" />
              <span>Wallet Offers</span>
            </h4>
            <div className="space-y-3">
              {[
                'Paytm: Flat ₹100 Cashback on first booking',
                'PhonePe: 5% Cashback up to ₹500',
                'Google Pay: Special weekend offers',
                'Amazon Pay: Extra rewards on travel'
              ].map((offer, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span className="text-gray-700">{offer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OngoingOffers;