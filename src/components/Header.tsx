import React from 'react';
import type { User } from '../types';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header style={{
      backgroundColor: 'white',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      borderBottom: '1px solid #e5e7eb'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/alaska-logo.svg" 
              alt="Alaska Airlines Logo" 
              style={{
                height: '40px',
                width: 'auto',
                marginRight: '16px',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#05758a',
                margin: 0,
                lineHeight: '1.2'
              }}>Alaska Airlines</h1>
              <span style={{
                fontSize: '12px',
                color: '#6b7280',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>Loyalty Dashboard</span>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <span style={{
              fontSize: '14px',
              color: '#4b5563'
            }}>Welcome, {user.name}</span>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(5, 117, 138, 0.1)',
              padding: '4px 12px',
              borderRadius: '9999px'
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#05758a'
              }}>
                {user.loyaltyPoints.toLocaleString()} points
              </span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#fef3c7',
              padding: '4px 12px',
              borderRadius: '9999px'
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#d97706'
              }}>{user.eliteStatus} Status</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
