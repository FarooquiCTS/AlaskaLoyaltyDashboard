import React, { useState } from 'react';
import type { Trip, Challenge, PriceAlert } from '../types';
import Modal from './Modal';

const TripsView: React.FC = () => {
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [showTripDetails, setShowTripDetails] = useState(false);

  const upcomingTrips: Trip[] = [
    { 
      id: 1, 
      destination: 'New York', 
      dates: 'Dec 15-18, 2024', 
      status: 'Confirmed', 
      flightNumber: 'AS 1234', 
      departureTime: '8:30 AM',
      arrivalTime: '4:45 PM',
      departureAirport: 'SEA - Seattle-Tacoma Intl',
      arrivalAirport: 'JFK - John F. Kennedy Intl',
      aircraft: 'Boeing 737-900',
      seatNumber: '12A',
      gate: 'A15',
      confirmationCode: 'ABC123',
      totalCost: '$485',
      milesEarned: 2850,
      baggageInfo: '1 checked bag included',
      specialServices: ['Priority Boarding', 'Extra Legroom']
    },
    { 
      id: 2, 
      destination: 'London', 
      dates: 'Jan 20-30, 2025', 
      status: 'Confirmed', 
      flightNumber: 'AS 5678', 
      departureTime: '6:15 PM',
      arrivalTime: '1:30 PM +1',
      departureAirport: 'SEA - Seattle-Tacoma Intl',
      arrivalAirport: 'LHR - London Heathrow',
      aircraft: 'Boeing 787-9',
      seatNumber: '8C',
      gate: 'S10',
      confirmationCode: 'XYZ789',
      totalCost: '$1,285',
      milesEarned: 5420,
      baggageInfo: '2 checked bags included',
      specialServices: ['Premium Economy', 'Priority Boarding', 'Lounge Access']
    }
  ];

  const pastTrips: Trip[] = [
    { 
      id: 3, 
      destination: 'Seattle', 
      dates: 'Nov 10-12, 2024', 
      status: 'Completed', 
      flightNumber: 'AS 9012', 
      departureTime: '2:45 PM',
      arrivalTime: '6:20 PM',
      departureAirport: 'LAX - Los Angeles Intl',
      arrivalAirport: 'SEA - Seattle-Tacoma Intl',
      aircraft: 'Boeing 737-800',
      seatNumber: '15F',
      confirmationCode: 'DEF456',
      totalCost: '$320',
      milesEarned: 1850,
      baggageInfo: 'Carry-on only',
      specialServices: ['On-time arrival']
    },
    { 
      id: 4, 
      destination: 'Los Angeles', 
      dates: 'Oct 5-8, 2024', 
      status: 'Completed', 
      flightNumber: 'AS 3456', 
      departureTime: '11:20 AM',
      arrivalTime: '2:15 PM',
      departureAirport: 'SEA - Seattle-Tacoma Intl',
      arrivalAirport: 'LAX - Los Angeles Intl',
      aircraft: 'Boeing 737-900',
      seatNumber: '22B',
      confirmationCode: 'GHI789',
      totalCost: '$285',
      milesEarned: 1642,
      baggageInfo: '1 checked bag',
      specialServices: ['Upgraded to Premium', 'Priority Boarding']
    }
  ];

  const challenges: Challenge[] = [
    { id: 1, title: 'Weekend Warrior', description: 'Take 3 weekend trips', progress: 2, target: 3, reward: '5,000 points' },
    { id: 2, title: 'Coast to Coast', description: 'Fly between East and West coast', progress: 1, target: 2, reward: 'Free upgrade' },
    { id: 3, title: 'International Explorer', description: 'Visit 2 different countries', progress: 0, target: 2, reward: '10,000 points' }
  ];

  const priceAlerts: PriceAlert[] = [
    { id: 1, route: 'Seattle → Tokyo', currentPrice: '$850', targetPrice: '$750', status: 'Active' },
    { id: 2, route: 'Anchorage → Hawaii', currentPrice: '$420', targetPrice: '$350', status: 'Active' },
    { id: 3, route: 'Portland → Denver', currentPrice: '$280', targetPrice: '$250', status: 'Triggered' }
  ];

  const handleViewDetails = (trip: Trip) => {
    setSelectedTrip(trip);
    setShowTripDetails(true);
  };

  const closeModal = () => {
    setShowTripDetails(false);
    setSelectedTrip(null);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>Your Trips</h1>
      
      {/* Upcoming Trips */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid #e5e7eb',
        marginBottom: '24px'
      }}>
        <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Upcoming Trips</h2>
        <div className="space-y-4">
          {upcomingTrips.map((trip) => (
            <div key={trip.id} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: 'rgba(5, 117, 138, 0.05)',
              border: '1px solid rgba(5, 117, 138, 0.2)'
            }}>
              <div className="flex items-center">
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#05758a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  marginRight: '16px',
                  fontFamily: 'Source Sans Pro, sans-serif'
                }}>
                  ✈️
                </div>
                <div>
                  <h3 className="font-bold text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>{trip.destination}</h3>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{trip.dates}</p>
                  <p style={{
                    fontSize: '14px',
                    color: '#05758a',
                    fontFamily: 'Source Sans Pro, sans-serif'
                  }}>{trip.flightNumber} • {trip.departureTime}</p>
                </div>
              </div>
              <div className="text-right">
                <span style={{
                  backgroundColor: 'rgba(5, 150, 105, 0.1)',
                  color: '#059669',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: '500',
                  fontFamily: 'Source Sans Pro, sans-serif'
                }}>
                  {trip.status}
                </span>
                <button 
                  onClick={() => handleViewDetails(trip)}
                  style={{
                    display: 'block',
                    marginTop: '8px',
                    color: '#05758a',
                    fontSize: '14px',
                    fontWeight: '500',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    fontFamily: 'Source Sans Pro, sans-serif'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#044556'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#05758a'}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trip History */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid #e5e7eb',
        marginBottom: '24px'
      }}>
        <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Trip History</h2>
        <div className="space-y-4">
          {pastTrips.map((trip) => (
            <div key={trip.id} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: 'rgba(107, 114, 128, 0.05)',
              border: '1px solid rgba(107, 114, 128, 0.2)'
            }}>
              <div className="flex items-center">
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#6b7280',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  marginRight: '16px',
                  fontFamily: 'Source Sans Pro, sans-serif'
                }}>
                  ✈️
                </div>
                <div>
                  <h3 className="font-bold text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>{trip.destination}</h3>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{trip.dates}</p>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    fontFamily: 'Source Sans Pro, sans-serif'
                  }}>{trip.flightNumber} • {trip.departureTime}</p>
                </div>
              </div>
              <div className="text-right">
                <span style={{
                  backgroundColor: 'rgba(107, 114, 128, 0.1)',
                  color: '#6b7280',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: '500',
                  fontFamily: 'Source Sans Pro, sans-serif'
                }}>
                  {trip.status}
                </span>
                <button 
                  onClick={() => handleViewDetails(trip)}
                  style={{
                    display: 'block',
                    marginTop: '8px',
                    color: '#05758a',
                    fontSize: '14px',
                    fontWeight: '500',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    fontFamily: 'Source Sans Pro, sans-serif'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#044556'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#05758a'}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid #e5e7eb',
        marginBottom: '24px'
      }}>
        <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Travel Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {challenges.map((challenge) => (
            <div key={challenge.id} style={{
              padding: '16px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, rgba(5, 117, 138, 0.05) 0%, rgba(5, 117, 138, 0.02) 100%)',
              border: '1px solid rgba(5, 117, 138, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(5, 117, 138, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{challenge.title}</h3>
              <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{challenge.description}</p>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{challenge.progress}/{challenge.target}</span>
                  <span style={{
                    color: '#05758a',
                    fontWeight: '500',
                    fontFamily: 'Source Sans Pro, sans-serif'
                  }}>{challenge.reward}</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    style={{
                      backgroundColor: '#05758a',
                      height: '8px',
                      borderRadius: '9999px',
                      width: `${(challenge.progress / challenge.target) * 100}%`,
                      transition: 'width 0.3s ease'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Alerts */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid #e5e7eb',
        marginBottom: '24px'
      }}>
        <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Price Alerts</h2>
        <div className="space-y-3">
          {priceAlerts.map((alert) => (
            <div key={alert.id} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: alert.status === 'Triggered' ? 'rgba(239, 68, 68, 0.05)' : 'rgba(107, 114, 128, 0.05)',
              border: alert.status === 'Triggered' ? '1px solid rgba(239, 68, 68, 0.2)' : '1px solid rgba(107, 114, 128, 0.2)'
            }}>
              <div>
                <h3 className="font-bold text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>{alert.route}</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                  Current: {alert.currentPrice} • Target: {alert.targetPrice}
                </p>
              </div>
              <span style={{
                backgroundColor: alert.status === 'Triggered' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(34, 197, 94, 0.1)',
                color: alert.status === 'Triggered' ? '#dc2626' : '#16a34a',
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '14px',
                fontWeight: '500',
                fontFamily: 'Source Sans Pro, sans-serif'
              }}>
                {alert.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Trip Details Modal */}
      {showTripDetails && selectedTrip && (
        <Modal onClose={closeModal}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#05758a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  marginRight: '16px',
                  fontFamily: 'Source Sans Pro, sans-serif'
                }}>
                  ✈️
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Flight to {selectedTrip.destination}
                  </h2>
                  <p className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                    {selectedTrip.dates}
                  </p>
                </div>
              </div>
              <span style={{
                backgroundColor: selectedTrip.status === 'Confirmed' ? 'rgba(5, 150, 105, 0.1)' : 'rgba(107, 114, 128, 0.1)',
                color: selectedTrip.status === 'Confirmed' ? '#059669' : '#6b7280',
                padding: '6px 16px',
                borderRadius: '9999px',
                fontSize: '14px',
                fontWeight: '500',
                fontFamily: 'Source Sans Pro, sans-serif'
              }}>
                {selectedTrip.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Flight Information */}
              <div style={{
                backgroundColor: 'rgba(5, 117, 138, 0.05)',
                borderRadius: '8px',
                padding: '20px',
                border: '1px solid rgba(5, 117, 138, 0.2)'
              }}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Flight Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>Flight Number:</span>
                    <span className="font-medium" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{selectedTrip.flightNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>Aircraft:</span>
                    <span className="font-medium" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{selectedTrip.aircraft}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>Departure:</span>
                    <span className="font-medium" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{selectedTrip.departureTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>Arrival:</span>
                    <span className="font-medium" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{selectedTrip.arrivalTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>From:</span>
                    <span className="font-medium" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{selectedTrip.departureAirport}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>To:</span>
                    <span className="font-medium" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{selectedTrip.arrivalAirport}</span>
                  </div>
                  {selectedTrip.gate && (
                    <div className="flex justify-between">
                      <span className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>Gate:</span>
                      <span className="font-medium" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{selectedTrip.gate}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Booking Details */}
              <div style={{
                backgroundColor: 'rgba(5, 117, 138, 0.05)',
                borderRadius: '8px',
                padding: '20px',
                border: '1px solid rgba(5, 117, 138, 0.2)'
              }}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Booking Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>Confirmation Code:</span>
                    <span className="font-medium font-mono" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{selectedTrip.confirmationCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>Seat Number:</span>
                    <span className="font-medium" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{selectedTrip.seatNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>Total Cost:</span>
                    <span className="font-medium text-gray-900" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{selectedTrip.totalCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>Miles Earned:</span>
                    <span className="font-medium text-teal-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{selectedTrip.milesEarned?.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>Baggage:</span>
                    <span className="font-medium" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{selectedTrip.baggageInfo}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Services */}
            {selectedTrip.specialServices && selectedTrip.specialServices.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Special Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTrip.specialServices.map((service, index) => (
                    <span 
                      key={index}
                      style={{
                        backgroundColor: 'rgba(5, 117, 138, 0.1)',
                        color: '#05758a',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        fontSize: '14px',
                        fontWeight: '500',
                        fontFamily: 'Source Sans Pro, sans-serif'
                      }}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={closeModal}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  color: '#374151',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'Source Sans Pro, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f9fafb';
                  e.currentTarget.style.borderColor = '#9ca3af';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.borderColor = '#d1d5db';
                }}
              >
                Close
              </button>
              {selectedTrip.status === 'Confirmed' && (
                <button
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#05758a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                    fontFamily: 'Source Sans Pro, sans-serif'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#044556'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#05758a'}
                >
                  Manage Booking
                </button>
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default TripsView;
