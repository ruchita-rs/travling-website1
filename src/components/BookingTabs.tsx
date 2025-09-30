import React, { useState } from 'react';
import { Plane, Building, Train, Bus, Package, Car, MapPin } from 'lucide-react';
import FlightBooking from './booking/FlightBooking';
import HotelBooking from './booking/HotelBooking';
import TrainBooking from './booking/TrainBooking';
import BusBooking from './booking/BusBooking';
import HolidayBooking from './booking/HolidayBooking';
import CabBooking from './booking/CabBooking';
import ActivitiesBooking from './booking/ActivitiesBooking';

const BookingTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('flights');

  const tabs = [
    { id: 'flights', name: 'Flights', icon: Plane },
    { id: 'hotels', name: 'Hotels', icon: Building },
    { id: 'trains', name: 'Trains', icon: Train },
    { id: 'buses', name: 'Buses', icon: Bus },
    { id: 'packages', name: 'Packages', icon: Package },
    { id: 'cabs', name: 'Cabs', icon: Car },
    { id: 'activities', name: 'Activities', icon: MapPin },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'flights':
        return <FlightBooking />;
      case 'hotels':
        return <HotelBooking />;
      case 'trains':
        return <TrainBooking />;
      case 'buses':
        return <BusBooking />;
      case 'packages':
        return <HolidayBooking />;
      case 'cabs':
        return <CabBooking />;
      case 'activities':
        return <ActivitiesBooking />;
      default:
        return <FlightBooking />;
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex flex-wrap bg-gray-50 p-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-0 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white text-[#40a1ef] shadow-md transform scale-105'
                      : 'text-gray-600 hover:text-[#40a1ef] hover:bg-white/50'
                  }`}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-medium text-sm md:text-base">{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingTabs;