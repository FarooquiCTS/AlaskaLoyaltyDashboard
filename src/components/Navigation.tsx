import React from 'react';
import NavButton from './NavButton';

interface NavigationProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeView, setActiveView }) => {
  return (
    <nav style={{
      backgroundColor: 'white',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <div style={{
          display: 'flex',
          gap: '32px',
          padding: '16px 0'
        }}>
          <NavButton
            label="Dashboard"
            isActive={activeView === 'dashboard'}
            onClick={() => setActiveView('dashboard')}
            icon="📊"
          />
          <NavButton
            label="Offers"
            isActive={activeView === 'offers'}
            onClick={() => setActiveView('offers')}
            icon="🎯"
          />
          <NavButton
            label="Trips"
            isActive={activeView === 'trips'}
            onClick={() => setActiveView('trips')}
            icon="✈️"
          />
          <NavButton
            label="Profile"
            isActive={activeView === 'profile'}
            onClick={() => setActiveView('profile')}
            icon="👤"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
