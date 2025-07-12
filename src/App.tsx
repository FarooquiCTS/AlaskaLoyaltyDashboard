import React from 'react';
import './index.css';
import {
  Header,
  Navigation,
  DashboardView,
  OffersView,
  TripsView,
  ProfileView
} from './components';
import { useUserData, useLocalStorage } from './hooks';

// Main App Component

const App: React.FC = () => {
  const { user } = useUserData();
  const [activeView, setActiveView] = useLocalStorage('activeView', 'dashboard');

  // Firebase configuration (commented out for demo)
  /*
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };
  */

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView user={user} />;
      case 'offers':
        return <OffersView />;
      case 'trips':
        return <TripsView />;
      case 'profile':
        return <ProfileView user={user} />;
      default:
        return <DashboardView user={user} />;
    }
  };

  const handleViewProfile = () => {
    setActiveView('profile');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6'
    }}>
      <Header user={user} onViewProfile={handleViewProfile} />
      <Navigation activeView={activeView} setActiveView={setActiveView} />
      
      {/* Main Content */}
      <main style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '32px 16px'
      }}>
        {renderView()}
      </main>
    </div>
  );
};

export default App;
