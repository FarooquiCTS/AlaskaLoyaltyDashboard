import React, { useState } from 'react';
import type { User } from '../types';

interface ProfileViewProps {
  user?: User;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user }) => {
  const [showPrivacySettings, setShowPrivacySettings] = useState(false);
  
  // Use provided user data or fallback to default values
  const userData = user || {
    name: 'Sarah Johnson',
    loyaltyPoints: 24856,
    eliteStatus: 'Gold',
    mileagePlanNumber: '562484576'
  };

  // Function to get status badge colors based on elite status
  const getStatusBadgeColors = (status: string) => {
    switch (status.toLowerCase()) {
      case 'platinum':
        return {
          backgroundColor: '#e5e7eb', // Light gray/silver
          color: '#374151',
          borderColor: '#9ca3af'
        };
      case 'gold':
        return {
          backgroundColor: '#fef3c7', // Light gold/yellow
          color: '#d97706',
          borderColor: '#f59e0b'
        };
      case 'silver':
        return {
          backgroundColor: '#f3f4f6', // Light silver
          color: '#6b7280',
          borderColor: '#9ca3af'
        };
      case 'mvp':
        return {
          backgroundColor: '#ddd6fe', // Light purple
          color: '#7c3aed',
          borderColor: '#a855f7'
        };
      default:
        return {
          backgroundColor: '#f3f4f6',
          color: '#6b7280',
          borderColor: '#d1d5db'
        };
    }
  };

  const statusColors = getStatusBadgeColors(userData.eliteStatus);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Your Profile</h1>
      
      {/* Profile Info */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid #e5e7eb',
        marginBottom: '24px'
      }}>
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center">
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#05758a',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              marginRight: '24px'
            }}>
              {userData.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
              <p className="text-sm text-gray-500">Mileage Plan Number: {userData.mileagePlanNumber}</p>
            </div>
          </div>
          <div className="text-right" style={{ marginRight: '0', width: 'calc(50% - 12px)' }}>
            <div 
              style={{
                backgroundColor: statusColors.backgroundColor,
                color: statusColors.color,
                border: `1px solid ${statusColors.borderColor}`,
                padding: '8px 12px',
                borderRadius: '8px',
                display: 'inline-block'
              }}
            >
              <p className="font-medium text-sm mb-0">{userData.eliteStatus} Elite Member since 2022</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Information</h3>
            <div className="space-y-2">
              <p className="text-gray-600"><span className="font-medium">Email:</span> sarah.johnson@email.com</p>
              <p className="text-gray-600"><span className="font-medium">Phone:</span> +1 (555) 123-4567</p>
              <p className="text-gray-600"><span className="font-medium">Address:</span> 123 Main St, Seattle, WA</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Preferences</h3>
            <div className="space-y-2">
              <p className="text-gray-600"><span className="font-medium">Seat:</span> Window, Forward</p>
              <p className="text-gray-600"><span className="font-medium">Meal:</span> Vegetarian</p>
              <p className="text-gray-600"><span className="font-medium">Notifications:</span> Email & SMS</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <button style={{
            backgroundColor: '#05758a',
            color: 'white',
            fontWeight: '500',
            padding: '8px 24px',
            borderRadius: '8px',
            border: 'none',
            marginRight: '16px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#044556'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#05758a'}>
            Edit Profile
          </button>
          <button 
            onClick={() => setShowPrivacySettings(!showPrivacySettings)}
            style={{
              backgroundColor: '#f3f4f6',
              color: '#374151',
              fontWeight: '500',
              padding: '8px 24px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
          >
            Privacy Settings {showPrivacySettings ? '▲' : '▼'}
          </button>
        </div>

        {/* Privacy Settings Section */}
        {showPrivacySettings && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Privacy Settings</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-gray-800">Data Sharing</h5>
                  <p className="text-sm text-gray-600">Allow Alaska Airlines to share your data with partners</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div style={{
                    width: '44px',
                    height: '24px',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '9999px',
                    position: 'relative',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  className="peer-checked:bg-teal-600">
                    <div style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      position: 'absolute',
                      top: '2px',
                      left: '2px',
                      transition: 'all 0.2s ease',
                      transform: 'translateX(0px)'
                    }}
                    className="peer-checked:translate-x-5"></div>
                  </div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-gray-800">Marketing Communications</h5>
                  <p className="text-sm text-gray-600">Receive promotional emails and offers</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-gray-800">Location Services</h5>
                  <p className="text-sm text-gray-600">Use location data for personalized services</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-gray-800">Analytics & Performance</h5>
                  <p className="text-sm text-gray-600">Help improve our services with usage analytics</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-gray-800">Third-party Cookies</h5>
                  <p className="text-sm text-gray-600">Allow third-party cookies for enhanced functionality</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <button className="text-sm text-blue-600 hover:text-blue-800 underline">
                  View Privacy Policy
                </button>
                <div className="space-x-2">
                  <button 
                    onClick={() => setShowPrivacySettings(false)}
                    style={{
                      backgroundColor: '#f3f4f6',
                      color: '#374151',
                      fontWeight: '500',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                  >
                    Cancel
                  </button>
                  <button style={{
                    backgroundColor: '#05758a',
                    color: 'white',
                    fontWeight: '500',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#044556'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#05758a'}>
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Elite Status Progress */}
      <div style={{
        background: 'linear-gradient(135deg, #05758a 0%, #044556 100%)',
        borderRadius: '12px',
        padding: '24px',
        color: 'white',
        boxShadow: '0 10px 25px -3px rgba(5, 117, 138, 0.3)'
      }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: 'white'
        }}>Elite Status Progress</h3>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '12px',
          padding: '16px',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px'
          }}>
            <span style={{
              fontWeight: '500',
              color: 'white'
            }}>Gold → Platinum</span>
            <span style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>2,344 miles needed</span>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            borderRadius: '9999px',
            height: '12px',
            overflow: 'hidden'
          }}>
            <div style={{
              backgroundColor: 'white',
              height: '12px',
              borderRadius: '9999px',
              width: '73%',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
          <p style={{
            fontSize: '14px',
            marginTop: '8px',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.5'
          }}>
            You're 73% of the way to Platinum status! Keep flying to unlock exclusive benefits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
