import React, { useState } from 'react';
import type { Offer, FlashOffer } from '../types';

const OffersView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Personalized offers based on user profile and behavior
  const personalizedOffers: Offer[] = [
    // Based on frequent Seattle-NYC route
    { 
      id: 1, 
      title: '🗽 Your NYC Route Bonus', 
      description: 'Double miles on SEA-NYC flights (your most traveled route)', 
      type: 'Points',
      action: 'Book NYC Flight',
      personalization: 'frequent-route',
      validUntil: '2025-01-15',
      savings: '4,000 bonus miles'
    },
    // Based on elite status progression
    { 
      id: 2, 
      title: '🏆 MVP Gold Fast Track', 
      description: 'Book 2 more flights and earn 10,000 bonus elite miles', 
      type: 'Elite',
      action: 'View Qualifying Flights',
      personalization: 'status-boost',
      validUntil: '2025-12-31',
      savings: '10,000 elite miles'
    },
    // Based on upcoming London trip
    { 
      id: 3, 
      title: '🇬🇧 London Trip Upgrade', 
      description: 'Premium Economy upgrade for your Jan 20 London flight', 
      type: 'Upgrade',
      action: 'Upgrade Flight',
      personalization: 'upcoming-trip',
      validUntil: '2025-01-15',
      savings: '$450 value'
    },
    // Based on lack of hotel bookings
    { 
      id: 4, 
      title: '🏨 Hotel + Flight Bundle', 
      description: 'Save 30% on hotels when booking with flights', 
      type: 'Package',
      action: 'Explore Hotels',
      personalization: 'cross-sell',
      validUntil: '2025-08-01',
      savings: 'Up to 30% off'
    },
    // Based on car rental history
    { 
      id: 5, 
      title: '🚗 Preferred Car Partner', 
      description: 'Exclusive Avis President\'s Circle benefits for you', 
      type: 'Partner',
      action: 'Join Program',
      personalization: 'loyalty-match',
      validUntil: '2025-09-01',
      savings: 'Free upgrades'
    }
  ];

  const flashOffers: FlashOffer[] = [
    { 
      title: '⚡ Flash Sale to Hawaii', 
      description: 'Perfect for your next island getaway', 
      discount: '40% OFF', 
      timeLeft: '2h 15m',
      routes: 'SEA-HNL, PDX-HNL',
      originalPrice: '$850',
      salePrice: '$510'
    },
    { 
      title: '💼 Business Class Flash', 
      description: 'Premium experience to Europe', 
      discount: '50% OFF', 
      timeLeft: '23h 45m',
      routes: 'West Coast to Europe',
      originalPrice: '$2,400',
      salePrice: '$1,200'
    }
  ];

  // Smart recommendations based on behavior
  const smartRecommendations = [
    {
      type: 'trend',
      title: '📈 Trending with MVP Members',
      description: 'Book a weekend getaway to San Diego',
      popularity: '85% booked this route',
      action: 'Search Flights'
    },
    {
      type: 'seasonal',
      title: '🌸 Spring Travel Alert',
      description: 'Cherry blossom season in Japan (Mar-May)',
      seasonality: 'Best time to visit',
      action: 'Plan Trip'
    },
    {
      type: 'price-drop',
      title: '📉 Price Drop Alert',
      description: 'Seattle to Denver now 25% lower',
      priceChange: 'Down from $380 to $285',
      action: 'Book Now'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Offers', count: personalizedOffers.length },
    { id: 'elite', label: 'Elite Benefits', count: personalizedOffers.filter(o => o.type === 'Elite').length },
    { id: 'flights', label: 'Flight Deals', count: personalizedOffers.filter(o => o.type === 'Points').length },
    { id: 'upgrades', label: 'Upgrades', count: personalizedOffers.filter(o => o.type === 'Upgrade').length },
    { id: 'packages', label: 'Packages', count: personalizedOffers.filter(o => o.type === 'Package' || o.type === 'Partner').length }
  ];

  const filteredOffers = selectedCategory === 'all' 
    ? personalizedOffers 
    : personalizedOffers.filter(offer => {
        switch (selectedCategory) {
          case 'elite': return offer.type === 'Elite';
          case 'flights': return offer.type === 'Points';
          case 'upgrades': return offer.type === 'Upgrade';
          case 'packages': return offer.type === 'Package' || offer.type === 'Partner';
          default: return true;
        }
      });

  const getPersonalizationBadge = (type: string) => {
    const badges: { [key: string]: { emoji: string; label: string; color: string } } = {
      'frequent-route': { emoji: '🎯', label: 'Your Route', color: '#059669' },
      'status-boost': { emoji: '🚀', label: 'Status Boost', color: '#dc2626' },
      'upcoming-trip': { emoji: '📅', label: 'Upcoming Trip', color: '#6366f1' },
      'cross-sell': { emoji: '💰', label: 'Save More', color: '#d97706' },
      'loyalty-match': { emoji: '🤝', label: 'Partner Perk', color: '#8b5cf6' }
    };
    return badges[type] || { emoji: '✨', label: 'Special', color: '#05758a' };
  };

  return (
    <div className="space-y-8">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="text-3xl font-bold text-gray-800">Personalized for You</h1>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '14px',
          color: '#6b7280'
        }}>
          <span>🤖</span>
          <span>AI-powered recommendations</span>
        </div>
      </div>

      {/* Flash Offers */}
      <div style={{
        background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        borderRadius: '12px',
        padding: '24px',
        color: 'white',
        boxShadow: '0 10px 25px -3px rgba(220, 38, 38, 0.3)'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: 'white'
        }}>⚡ Flash Deals - Limited Time</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {flashOffers.map((offer, index) => (
            <div key={index} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '12px',
              padding: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div className="flex justify-between items-start mb-3">
                <h3 style={{
                  fontWeight: 'bold',
                  fontSize: '18px',
                  color: 'white'
                }}>{offer.title}</h3>
                <div style={{
                  backgroundColor: '#fbbf24',
                  color: '#92400e',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {offer.discount}
                </div>
              </div>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '12px',
                fontSize: '14px'
              }}>{offer.description}</p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <div>
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>
                    {offer.routes}
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                    <span style={{ textDecoration: 'line-through', fontSize: '14px', opacity: 0.7 }}>
                      {offer.originalPrice}
                    </span>
                    <span style={{ marginLeft: '8px' }}>{offer.salePrice}</span>
                  </div>
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#fbbf24',
                  fontWeight: 'bold'
                }}>
                  ⏰ {offer.timeLeft}
                </div>
              </div>
              <button style={{
                width: '100%',
                backgroundColor: 'white',
                color: '#dc2626',
                border: 'none',
                borderRadius: '8px',
                padding: '12px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                Book Flash Deal
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              backgroundColor: selectedCategory === category.id ? '#05758a' : '#f3f4f6',
              color: selectedCategory === category.id ? 'white' : '#6b7280',
              transition: 'all 0.2s ease'
            }}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>

      {/* Personalized Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredOffers.map((offer) => {
          const badge = getPersonalizationBadge(offer.personalization || '');
          return (
            <div key={offer.id} style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }}>
              
              {/* Personalization Badge */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                backgroundColor: badge.color,
                color: 'white',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <span>{badge.emoji}</span>
                <span>{badge.label}</span>
              </div>

              <div style={{ paddingRight: '80px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '8px'
                }}>{offer.title}</h3>
                
                <p style={{
                  color: '#6b7280',
                  marginBottom: '16px',
                  fontSize: '14px',
                  lineHeight: '1.5'
                }}>{offer.description}</p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <div>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#059669',
                      marginBottom: '4px'
                    }}>{offer.savings}</div>
                    <div style={{
                      fontSize: '12px',
                      color: '#9ca3af'
                    }}>Valid until {offer.validUntil}</div>
                  </div>
                </div>

                <button style={{
                  width: '100%',
                  backgroundColor: '#05758a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#044556'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#05758a'}>
                  {offer.action}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Smart Recommendations */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '16px'
        }}>🎯 Smart Recommendations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {smartRecommendations.map((rec, index) => (
            <div key={index} style={{
              padding: '20px',
              borderRadius: '12px',
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
              e.currentTarget.style.borderColor = '#05758a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '8px'
              }}>{rec.title}</h3>
              
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '12px'
              }}>{rec.description}</p>
              
              <div style={{
                fontSize: '12px',
                color: '#05758a',
                fontWeight: '500',
                marginBottom: '12px'
              }}>
                {(rec as any).popularity || (rec as any).seasonality || (rec as any).priceChange}
              </div>
              
              <button style={{
                width: '100%',
                backgroundColor: 'transparent',
                color: '#05758a',
                border: '1px solid #05758a',
                borderRadius: '6px',
                padding: '8px',
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#05758a';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#05758a';
              }}>
                {rec.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersView;
