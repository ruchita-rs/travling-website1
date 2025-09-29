import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingTabs from './components/BookingTabs';
import PopularDestinations from './components/PopularDestinations';
import OngoingOffers from './components/OngoingOffers';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

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
    <div className="min-h-screen bg-gray-50">
      <Header 
        isLoggedIn={isLoggedIn} 
        user={user} 
        onAuthOpen={handleAuthOpen}
        onLogout={handleLogout}
      />
      <Hero />
      <BookingTabs />
      <PopularDestinations />
      <OngoingOffers />
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
  );
}

export default App;