import React from 'react';
import type { Offer, FlashOffer } from '../types';

const OffersView: React.FC = () => {
  const offers: Offer[] = [
    { id: 1, title: 'Double Points Weekend', description: 'Earn 2x points on all flights this weekend', type: 'Points', action: 'Book Now' },
    { id: 2, title: 'Upgrade Special', description: 'Free upgrade to premium economy on select routes', type: 'Upgrade', action: 'View Routes' },
    { id: 3, title: 'Hotel Discount', description: '30% off partner hotels when booking with flights', type: 'Discount', action: 'Explore Hotels' },
    { id: 4, title: 'Car Rental Deal', description: '25% off car rentals for elite members', type: 'Discount', action: 'Rent Now' }
  ];

  const flashOffers: FlashOffer[] = [
    { title: 'Flash Sale to Hawaii', description: 'Limited time offer', discount: '40% OFF', timeLeft: '2h 15m' },
    { title: 'Business Class Upgrade', description: 'Next 24 hours only', discount: '50% OFF', timeLeft: '23h 45m' }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Exclusive Offers</h1>
      
      {/* Flash Offers */}
      <div style={{
        background: 'linear-gradient(135deg, #05758a 0%, #044556 100%)',
        borderRadius: '12px',
        padding: '24px',
        color: 'white',
        boxShadow: '0 10px 25px -3px rgba(5, 117, 138, 0.3)'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: 'white'
        }}>⚡ Flash Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {flashOffers.map((offer, index) => (
            <div key={index} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '12px',
              padding: '16px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div className="flex justify-between items-start mb-2">
                <h3 style={{
                  fontWeight: 'bold',
                  fontSize: '18px',
                  color: 'white'
                }}>{offer.title}</h3>
                <span style={{
                  backgroundColor: '#fef3c7',
                  color: '#05758a',
                  padding: '4px 8px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {offer.discount}
                </span>
              </div>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '12px',
                fontSize: '14px'
              }}>{offer.description}</p>
              <div className="flex justify-between items-center">
                <span style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>⏰ {offer.timeLeft} left</span>
                <button style={{
                  backgroundColor: 'white',
                  color: '#05758a',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  Grab Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regular Offers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            border: '1px solid #e5e7eb',
            transition: 'all 0.3s ease',
            cursor: 'default'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
          }}>
            <div className="flex justify-between items-start mb-4">
              <span style={{
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '14px',
                fontWeight: '500',
                backgroundColor: offer.type === 'Points' ? 'rgba(5, 117, 138, 0.1)' :
                                offer.type === 'Upgrade' ? 'rgba(124, 58, 237, 0.1)' :
                                'rgba(5, 150, 105, 0.1)',
                color: offer.type === 'Points' ? '#05758a' :
                       offer.type === 'Upgrade' ? '#7c3aed' :
                       '#059669'
              }}>
                {offer.type}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
            <p className="text-gray-600 mb-4">{offer.description}</p>
            <button style={{
              width: '100%',
              backgroundColor: '#05758a',
              color: 'white',
              fontWeight: '500',
              padding: '12px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#044556'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#05758a'}>
              {offer.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersView;
