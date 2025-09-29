import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Changed to HashRouter
import Header from './components/Header';
import Hero from './components/Hero';
import BookingTabs from './components/BookingTabs';
import PopularDestinations from './components/PopularDestinations';
import OngoingOffers from './components/OngoingOffers';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import FlightBooking from './components/booking/FlightBooking';
import HotelBooking from './components/booking/HotelBooking';
import TrainBooking from './components/booking/TrainBooking';
import BusBooking from './components/booking/BusBooking';
import FlightResults from './components/booking/FlightResults';
// import HolidayPackageBooking from './components/booking/HolidayPackageBooking';
import CabBooking from './components/booking/CabBooking';
import BookingPage from './components/booking/BookingPage'; 

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);

  const handleAuthOpen = (type: 'login' | 'signup') => {
    setAuthType(type);
    setIsAuthModalOpen(true);
  };

  const handleAuthClose = () => {
    setIsAuthModalOpen(false);
  };

  const handleLogin = (userData: any) => {
    setUser(userData);
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header 
          isLoggedIn={isLoggedIn} 
          user={user} 
          onAuthOpen={handleAuthOpen}
          onLogout={handleLogout}
        />

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <BookingTabs />
              <PopularDestinations />
              <OngoingOffers />
            </>
          } />
          <Route path="/flights" element={<FlightBooking />} />
          <Route path="/hotels" element={<HotelBooking />} />
          <Route path="/trains" element={<TrainBooking />} />
          <Route path="/buses" element={<BusBooking />} />
          <Route path="/results" element={<FlightResults />} />
          <Route path="/cabs" element={<CabBooking />} />
          <Route path="/book" element={<BookingPage />} />   
        </Routes>

        <Footer />

        {isAuthModalOpen && (
          <AuthModal
            type={authType}
            onClose={handleAuthClose}
            onLogin={handleLogin}
            onToggleType={() => setAuthType(authType === 'login' ? 'signup' : 'login')}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
