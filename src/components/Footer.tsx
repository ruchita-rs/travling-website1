import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Plane, Building, Brain as Train, Bus, Package, Car, Shield, Award, Clock, CreditCard } from 'lucide-react';

const Footer: React.FC = () => {
  const serviceLinks = [
    { name: 'Flights', icon: Plane, href: '#' },
    { name: 'Hotels', icon: Building, href: '#' },
    { name: 'Trains', icon: Train, href: '#' },
    { name: 'Buses', icon: Bus, href: '#' },
    { name: 'Holiday Packages', icon: Package, href: '#' },
    { name: 'Cabs', icon: Car, href: '#' }
  ];

  const supportLinks = [
    'Customer Support',
    'Contact Us',
    'FAQ',
    'Booking Guide',
    'Cancellation Policy',
    'Refund Status',
    'Travel Insurance',
    'Group Bookings'
  ];

  const companyLinks = [
    'About TravelEase',
    'Careers',
    'Press Room',
    'Investor Relations',
    'Partner with Us',
    'Advertise with Us',
    'Terms & Conditions',
    'Privacy Policy'
  ];

  const features = [
    { icon: Shield, text: '100% Safe & Secure' },
    { icon: Award, text: 'Award Winning Service' },
    { icon: Clock, text: '24/7 Customer Support' },
    { icon: CreditCard, text: 'Easy Payment Options' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Features Banner */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium text-white">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
                  TravelEase
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Your trusted travel companion for flights, hotels, trains, and holiday packages. 
                  Making travel easy and affordable for everyone.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>1-800-123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>support@travelease.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Mumbai, Delhi, Bangalore</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                  >
                    <Social className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
              <div className="space-y-3">
                {serviceLinks.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <a
                      key={index}
                      href={service.href}
                      className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
              <div className="space-y-3">
                {supportLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
              <div className="space-y-3">
                {companyLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 TravelEase. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <span>We Accept:</span>
              <div className="flex space-x-2">
                {['Visa', 'Mastercard', 'Paytm', 'PhonePe', 'GPay'].map((payment, index) => (
                  <div key={index} className="bg-gray-800 px-3 py-1 rounded text-xs">
                    {payment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;