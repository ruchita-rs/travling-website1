import React, { useState } from 'react';
// import Image from 'next/image';
import { 
  Menu, X, User, Phone, MapPin, Plane, Hotel, Train, Bus, Gift, Car 
} from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  user: any;
  onAuthOpen: (type: 'login' | 'signup') => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, user, onAuthOpen, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#40a1ef] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>24/7 Support: 1-800-123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Serving 200+ destinations worldwide</span>
            </div>
          </div>
          {/* <div className="hidden md:flex items-center space-x-4">
            <span>Download our mobile app</span>
          </div> */}
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo + Brand */}
          <div className="flex items-center mr-auto">
            <a href="/" className="flex items-center">
              <img
                src="/images/logo-imge-removebg-preview.png"
                alt="TravelEase Logo"
                className="w-20 h-20 object-contain"
              />
            </a>

            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-[#40a1ef] to-teal-600 bg-clip-text text-transparent">
              EaseMyTrip
            </span>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 ml-8">
              <a href="#" className="flex items-center text-gray-700 hover:text-[#40a1ef] transition-colors font-medium">
                <Plane className="w-5 h-5 mr-2" /> Flights
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-[#40a1ef] transition-colors font-medium">
                <Hotel className="w-5 h-5 mr-2" /> Hotels
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-[#40a1ef] transition-colors font-medium">
                <Train className="w-5 h-5 mr-2" /> Trains
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-[#40a1ef] transition-colors font-medium">
                <Bus className="w-5 h-5 mr-2" /> Buses
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-[#40a1ef] transition-colors font-medium">
                <Gift className="w-5 h-5 mr-2" /> Holiday Packages
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-[#40a1ef] transition-colors font-medium">
                <Car className="w-5 h-5 mr-2" /> Cabs
              </a>
            </nav>
          </div>

          {/* Auth + Mobile menu button */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#40a1ef] text-white rounded-full flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">{user?.name || 'User'}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="text-gray-600 hover:text-[#40a1ef] transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => onAuthOpen('login')}
                  className="text-[#40a1ef] hover:text-[#1e8ede] font-medium transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => onAuthOpen('signup')}
                  className="bg-[#40a1ef] text-white px-4 py-2 rounded-lg hover:bg-[#1e8ede] transition-colors font-medium"
                >
                  Sign Up
                </button>
              </div>
            )}

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-600 hover:text-[#40a1ef] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="flex items-center text-gray-700 hover:text-[#40a1ef] transition-colors font-medium">Flights</a>
              <a href="#" className="flex items-center text-gray-700 hover:text-[#40a1ef] transition-colors font-medium">Hotels</a>
              <a href="#" className="flex items-center text-gray-700 hover:text-[#40a1ef] transition-colors font-medium">Trains</a>
              <a href="#" className="flex items-center text-gray-700 hover:text-[#40a1ef] transition-colors font-medium">Buses</a>
              <a href="#" className="flex items-center text-gray-700 hover:text-[#40a1ef] transition-colors font-medium">Holiday Packages</a>
              <a href="#" className="flex items-center text-gray-700 hover:text-[#40a1ef] transition-colors font-medium">Cabs</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
