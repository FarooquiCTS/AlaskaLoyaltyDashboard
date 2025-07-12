import React, { useState } from 'react';
import type { User } from '../types';
import { FONT_FAMILIES } from '../utils/typography';

interface HeaderProps {
  user: User;
  onViewProfile?: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onViewProfile }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleViewProfile = () => {
    if (onViewProfile) {
      onViewProfile();
    }
    setShowSubmenu(false);
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logout clicked');
    // You can add actual logout functionality like:
    // - Clear user session
    // - Redirect to login page
    // - Clear local storage
    alert('Logout functionality would be implemented here');
    setShowSubmenu(false);
  };

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
                fontFamily: FONT_FAMILIES.display,
                color: '#05758a',
                margin: 0,
                lineHeight: '1.2'
              }}>Alaska Airlines</h1>
              <span style={{
                fontSize: '12px',
                color: '#6b7280',
                fontWeight: '500',
                fontFamily: FONT_FAMILIES.primary,
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
            <div style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end'
            }}>
              <span 
                style={{
                  fontSize: '14px',
                  color: '#4b5563',
                  fontFamily: FONT_FAMILIES.primary,
                  marginBottom: '2px',
                  cursor: 'pointer',
                  padding: '2px 4px',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#f3f4f6'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                onClick={() => setShowSubmenu(!showSubmenu)}
              >
                Welcome, {user.name} ▼
              </span>
              <span style={{
                fontSize: '14px',
                color: '#6b7280',
                fontWeight: '500',
                fontFamily: FONT_FAMILIES.primary
              }}>Mileage Plan Number : {user.mileagePlanNumber}</span>
              
              {showSubmenu && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '4px',
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  zIndex: 1000,
                  minWidth: '150px'
                }}>
                  <button
                    onClick={handleViewProfile}
                    style={{
                      width: '100%',
                      padding: '8px 16px',
                      border: 'none',
                      background: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: '#374151',
                      borderRadius: '8px 8px 0 0',
                      transition: 'background-color 0.2s',
                      borderBottom: '1px solid #f3f4f6'
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#f3f4f6'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                  >
                    👤 View Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    style={{
                      width: '100%',
                      padding: '8px 16px',
                      border: 'none',
                      background: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: '#374151',
                      borderRadius: '0 0 8px 8px',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#f3f4f6'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
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
                fontFamily: FONT_FAMILIES.primary,
                color: '#05758a',
                textAlign: 'center'
              }}>
                Available Miles<br/>{user.loyaltyPoints.toLocaleString()}
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
                fontFamily: FONT_FAMILIES.primary,
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
