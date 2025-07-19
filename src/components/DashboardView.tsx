import React, { useState } from 'react';
import type { DashboardMetric, User, EliteStatusDetails, MileageActivity } from '../types';
import MetricCard from './MetricCard';
import ProgressBar from './ProgressBar';
import Card from './Card';
import EliteStatusModal from './EliteStatusModal';

interface DashboardViewProps {
  user: User;
  onBookFlight?: () => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ onBookFlight }) => {
  const [showEliteStatusModal, setShowEliteStatusModal] = useState(false);
  const [showMileageActivity, setShowMileageActivity] = useState(false);
  const [showMilestones, setShowMilestones] = useState(false);

  const dashboardMetrics: DashboardMetric[] = [
    { title: 'Available Miles', value: '4,860', change: '+1,250' },
    { title: 'Lifetime Alaska Miles', value: '21,000', change: '+8,450' },
    { title: 'Current Elite Status', value: 'MVP', change: 'View Benefits & Details' }
  ];

  // Elite Status Data
  const eliteStatusDetails: EliteStatusDetails = {
    currentLevel: 'MVP',
    currentMiles: 21000,
    lifetimeMiles: 21000,
    nextMilestone: {
      id: 3,
      miles: 30000,
      title: '30K Milestone',
      type: 'milestone',
      perks: [
        { id: '3a', description: '2,500 bonus miles' },
        { id: '3b', description: '$25 off a future Alaska flight' },
        { id: '3c', description: 'Four (4) Wi-Fi passes' },
        { id: '3d', description: 'Try MVP Gold status for a trip' },
        { id: '3e', description: '$100 off an Alaska Lounge membership' }
      ],
      isCompleted: false,
      isActive: false
    },
    milesToNextMilestone: 9000,
    allMilestones: [
      {
        id: 1,
        miles: 10000,
        title: '10K Milestone',
        type: 'milestone',
        perks: [
          { id: '1a', description: '750 bonus miles' },
          { id: '1b', description: 'Pre-order a complimentary meal for your flight' },
          { id: '1c', description: 'One (1) complimentary Wi-Fi pass' },
          { id: '1d', description: 'Try MVP status for a trip' },
          { id: '1e', description: 'Earn double miles with non-air partners' },
          { id: '1f', description: 'Upgrade your next Avis rental' }
        ],
        isCompleted: true
      },
      {
        id: 2,
        miles: 20000,
        title: 'MVP',
        type: 'elite_status',
        benefits: [
          'Earn 25% bonus miles on all flights, including airline partners',
          'Starting later in 2025: Companions on the same flight/reservation are eligible for upgrades',
          'oneworld® Ruby status benefits, like upgrades on American Airlines',
          'Extra benefits with non-air partners, including Avis Preferred Plus status',
          'In 2025: Two (2) free checked bags',
          'In 2026: One (1) free checked bag',
          'Complimentary First and Premium Class upgrades, when available',
          'Complimentary preferred seating',
          'Priority call routing for Customer Care',
          'Elite Leave for new parents',
          'Express security at select airports',
          'Priority check-in and boarding',
          'oneworld® status'
        ],
        isCompleted: true,
        isActive: true
      },
      {
        id: 3,
        miles: 30000,
        title: '30K Milestone',
        type: 'milestone',
        perks: [
          { id: '3a', description: '2,500 bonus miles' },
          { id: '3b', description: '$25 off a future Alaska flight' },
          { id: '3c', description: 'Four (4) Wi-Fi passes' },
          { id: '3d', description: 'Try MVP Gold status for a trip' },
          { id: '3e', description: '$100 off an Alaska Lounge membership' }
        ],
        isCompleted: false
      },
      {
        id: 4,
        miles: 40000,
        title: 'MVP Gold/oneworld Sapphire',
        type: 'elite_status',
        benefits: [
          'Earn 50% bonus miles on all flights, including partners',
          'Free premium drink or chocolate in Main Cabin',
          'oneworld® Sapphire status benefits, including Business Class lounge access on international flights',
          'Two (2) free checked bags',
          'Standby and waitlist for full flights',
          'Complimentary same-day flight changes for Main and First Class guests',
          'Extra benefits with non-air partners',
          'Complimentary First and Premium Class upgrades, when available',
          'Complimentary preferred seating',
          'Priority call routing for Customer Care',
          'Elite Leave for new parents',
          'Express security at select airports',
          'Priority check-in and boarding',
          'oneworld® status'
        ],
        isCompleted: false
      },
      {
        id: 5,
        miles: 55000,
        title: '55K Milestone',
        type: 'milestone',
        perks: [
          { id: '5a', description: '5,000 bonus miles' },
          { id: '5b', description: '10,000 miles off a Mileage Plan Unlocked experience' },
          { id: '5c', description: 'Gift MVP for a trip' },
          { id: '5d', description: 'One (1) complimentary Lounge day pass' },
          { id: '5e', description: 'Two (2) upgrade certificates' }
        ],
        isCompleted: false
      },
      {
        id: 6,
        miles: 75000,
        title: 'MVP Gold 75K/oneworld Emerald',
        type: 'elite_status',
        benefits: [
          'Earn 100% bonus miles on all flights, including airline partners',
          'Free premium drink or chocolate in Main Cabin',
          'oneworld® Emerald status benefits, including Business and First Class lounge access',
          'Three (3) free checked bags',
          'Standby and waitlist for full flights',
          'Complimentary same-day flight changes for Main and First Class guests',
          'Extra benefits with non-air partners, including Avis President\'s Club status',
          'Complimentary First and Premium Class upgrades, when available',
          'Complimentary preferred seating',
          'Priority call routing for Customer Care',
          'Elite Leave for new parents',
          'Express security at select airports',
          'Priority check-in and boarding',
          'oneworld® status'
        ],
        isCompleted: false
      },
      {
        id: 7,
        miles: 100000,
        title: 'MVP Gold 100K/oneworld Emerald',
        type: 'elite_status',
        benefits: [
          'Earn 150% bonus miles on all flights, including airline partners',
          'Free meal and a premium drink or chocolate in Main Cabin',
          'oneworld® Emerald status benefits, including Business and First Class lounge access',
          'Three (3) free checked bags',
          'MVP 100K Choice Benefit - Pick one of: 50,000 bonus miles, 75,000 miles off Unlocked experience, Alaska Lounge+ membership, Unlimited Wi-Fi sessions, Four upgrade certificates, or Nominate someone for MVP Gold status',
          'Standby and waitlist for full flights',
          'Complimentary same-day flight changes for Main and First Class guests',
          'Extra benefits with non-air partners, including Avis President\'s Club status',
          'Complimentary First and Premium Class upgrades, when available',
          'Complimentary preferred seating',
          'Priority call routing for Customer Care',
          'Elite Leave for new parents',
          'Express security at select airports',
          'Priority check-in and boarding',
          'oneworld® status'
        ],
        isCompleted: false
      }
    ]
  };

  // Mileage Activity Data
  const mileageActivity: MileageActivity[] = [
    {
      id: 1,
      date: 'Dec 18, 2024',
      description: 'Flight AS 1234 SEA-JFK',
      miles: 2430,
      type: 'earned',
      source: 'Flight'
    },
    {
      id: 2,
      date: 'Dec 15, 2024',
      description: 'Alaska Airlines Credit Card Bonus',
      miles: 5000,
      type: 'earned',
      source: 'Credit Card'
    },
    {
      id: 3,
      date: 'Dec 10, 2024',
      description: 'Hotel Stay - Marriott Seattle',
      miles: 850,
      type: 'earned',
      source: 'Partner Hotel'
    },
    {
      id: 4,
      date: 'Dec 5, 2024',
      description: 'Award Flight Redemption',
      miles: 25000,
      type: 'redeemed',
      source: 'Award Booking'
    },
    {
      id: 5,
      date: 'Nov 28, 2024',
      description: 'Flight AS 9012 LAX-SEA',
      miles: 1854,
      type: 'earned',
      source: 'Flight'
    },
    {
      id: 6,
      date: 'Nov 25, 2024',
      description: 'Thanksgiving Shopping Bonus',
      miles: 2500,
      type: 'earned',
      source: 'Shopping Portal'
    },
    {
      id: 7,
      date: 'Nov 20, 2024',
      description: 'Car Rental - Avis',
      miles: 420,
      type: 'earned',
      source: 'Partner Car Rental'
    },
    {
      id: 8,
      date: 'Nov 15, 2024',
      description: 'Flight AS 3456 SEA-LAX',
      miles: 1642,
      type: 'earned',
      source: 'Flight'
    }
  ];

  const handleEliteStatusClick = () => {
    setShowEliteStatusModal(true);
    setShowMileageActivity(false);
    setShowMilestones(false); // Opens to Status Overview tab
  };

  const handleAvailableMilesClick = () => {
    setShowEliteStatusModal(true);
    setShowMileageActivity(true);
    setShowMilestones(false);
  };

  const handleEliteStatusProgressClick = () => {
    setShowEliteStatusModal(true);
    setShowMileageActivity(false);
    setShowMilestones(true); // Opens to Milestones tab
  };

  const closeModal = () => {
    setShowEliteStatusModal(false);
    setShowMileageActivity(false);
    setShowMilestones(false);
  };

  // const achievements: Achievement[] = [
  //   { title: 'MVP Status Earned', description: 'Achieved MVP elite status', icon: '🎖️', date: 'Jan 2025' },
  //   { title: '20K Mile Milestone', description: 'Reached 20,000 lifetime miles', icon: '✈️', date: 'Dec 2024' },
  //   { title: 'Weekend Warrior Progress', description: 'Completed 2 weekend trips', icon: '🏃‍♂️', date: 'Nov 2024' },
  // ];

  return (
    <div style={{
      flex: 1,
      padding: '24px',
      background: 'linear-gradient(to bottom, #f9fafb, white)',
      overflowY: 'auto',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1152px',
        margin: '0 auto'
      }}>
        
        {/* Quick Stats Section */}
        <Card title="Your Alaska Account at a Glance" variant="gradient">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {dashboardMetrics.map((metric, index) => (
              <MetricCard
                key={index}
                title={metric.title}
                value={metric.value}
                change={metric.change || ''}
                positive={metric.change?.startsWith('+') || false}
                icon={metric.title === 'Available Miles' ? '🎯' : 
                      metric.title === 'Lifetime Alaska Miles' ? '✈️' :
                      metric.title.includes('Status') ? '⭐' : 
                      metric.title.includes('Savings') ? '💰' : '🎯'}
                onClick={metric.title === 'Current Elite Status' ? handleEliteStatusClick :
                        metric.title === 'Available Miles' ? handleAvailableMilesClick : undefined}
              />
            ))}
          </div>
        </Card>

        {/* Trip Cards Row with Elite Status Progress Circle */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '24px'
        }}>
          {/* Circular Progress for Elite Qualifying Miles */}
          <Card 
            title="⭐ Elite Status Progress"
            subtitle="Your progress towards MVP Gold"
            variant="gradient"
          >
            <div style={{
              padding: '20px',
              background: 'linear-gradient(135deg, rgba(5, 117, 138, 0.1) 0%, rgba(5, 117, 138, 0.05) 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(5, 117, 138, 0.2)',
              height: '280px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Background decoration */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(5, 117, 138, 0.2) 0%, rgba(5, 117, 138, 0.05) 70%)',
                borderRadius: '50%',
                zIndex: 0
              }} />
              
              <div style={{
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
                flex: 1
              }}>
                <div style={{ position: 'relative', width: '160px', height: '160px' }}>
                  {/* Background Circle */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'conic-gradient(#e5e7eb 0% 100%)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(5, 117, 138, 0.2)'
                  }} />
                  
                  {/* Progress Circle - 70% complete */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'conic-gradient(#05758a 0% 70%, transparent 70% 100%)',
                    transform: 'rotate(-90deg)'
                  }} />
                  
                  {/* Inner Circle (creates donut hole) */}
                  <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '80%',
                    height: '80%',
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'inset 0 0 8px rgba(5, 117, 138, 0.1)'
                  }}>
                    <div style={{ 
                      fontSize: '36px',
                      fontWeight: '700',
                      color: '#05758a'
                    }}>70%</div>
                    <div style={{ 
                      fontSize: '13px',
                      color: '#6b7280',
                      textAlign: 'center',
                      marginTop: '4px'
                    }}>to MVP Gold</div>
                  </div>
                </div>
                
                <div style={{ 
                  marginTop: '16px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#05758a',
                    marginBottom: '8px'
                  }}>✈️ Elite Qualifying Miles</div>
                  <div style={{
                    fontSize: '14px',
                    color: '#374151',
                    marginBottom: '4px',
                    fontWeight: '500'
                  }}>21,000 / 30,000 miles</div>
                  <div style={{
                    fontSize: '14px',
                    color: '#059669',
                    fontWeight: '500'
                  }}>🎯 Just 9,000 miles to go!</div>
                </div>
              </div>
              
              {/* Bottom info - matches format of other cards */}
              <div style={{
                marginTop: '12px',
                padding: '8px',
                backgroundColor: 'rgba(5, 117, 138, 0.1)',
                borderRadius: '8px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  fontSize: '12px',
                  color: '#05758a',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}>
                  <span>⭐</span> You've earned 3 of 7 elite benefits
                </div>
              </div>
            </div>
          </Card>

          {/* My Next Trip Card - Keep as is */}
          <Card 
            title="✈️ My Next Trip"
            subtitle="Your upcoming Dubai adventure"
            variant="gradient"
          >
            <div style={{
              padding: '20px',
              background: 'linear-gradient(135deg, rgba(5, 117, 138, 0.1) 0%, rgba(5, 117, 138, 0.05) 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(5, 117, 138, 0.2)',
              height: '280px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Background decoration */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(5, 117, 138, 0.2) 0%, rgba(5, 117, 138, 0.05) 70%)',
                borderRadius: '50%',
                zIndex: 0
              }} />
              
              {/* Trip Header */}
              <div style={{
                marginBottom: '16px',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#05758a',
                  marginBottom: '8px'
                }}>Dubai</div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#dc2626',
                  marginBottom: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ fontSize: '20px' }}>⏰</span>
                  3 days to go!
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#4b5563',
                  fontStyle: 'italic'
                }}>July 20-27, 2025 • 7 nights</div>
              </div>
              
              {/* Flight Details */}
              <div style={{ 
                position: 'relative', 
                zIndex: 1, 
                flex: 1,
                backgroundColor: 'rgba(5, 117, 138, 0.03)',
                padding: '4px 0',
                borderRadius: '8px',
                marginBottom: '12px'
              }}>
                <div style={{
                  fontSize: '15px',
                  fontWeight: '700',
                  color: '#05758a',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span>✈️</span> Flight Details:
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {[
                    { label: 'Outbound', details: 'AS 1246 • SEA → DXB', time: 'July 20, 10:45 AM' },
                    { label: 'Return', details: 'AS 1247 • DXB → SEA', time: 'July 27, 2:30 PM' },
                    { label: 'Seat', details: '12A (Window, Premium Class)', time: 'Meal preference saved' }
                  ].map((item, index) => (
                    <div key={index} style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '10px 12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '10px',
                      border: '1px solid rgba(5, 117, 138, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(4px)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                    }}>
                      <div>
                        <div style={{
                          fontWeight: '600',
                          color: '#05758a',
                          marginBottom: '2px'
                        }}>{item.label}</div>
                        <div style={{
                          fontSize: '12px',
                          color: '#111827',
                        }}>{item.details}</div>
                        <div style={{
                          fontSize: '11px',
                          color: '#6b7280',
                          opacity: 0.8
                        }}>{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom info */}
              <div style={{
                marginTop: '12px',
                padding: '8px',
                backgroundColor: 'rgba(5, 117, 138, 0.1)',
                borderRadius: '8px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  fontSize: '12px',
                  color: '#059669',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}>
                  <span>✅</span> Check-in opens in 48 hours
                </div>
              </div>
            </div>
          </Card>

          {/* Destination Snapshot Card - Keep as is */}
          <Card 
            title="🌍 Destination Snapshot"
            subtitle="Dubai awaits you"
            variant="gradient"
          >
            <div style={{
              padding: '20px',
              background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(217, 119, 6, 0.08) 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              height: '280px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Background decoration */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, rgba(251, 191, 36, 0.05) 70%)',
                borderRadius: '50%',
                zIndex: 0
              }} />
              
              {/* Weather Section */}
              <div style={{
                marginBottom: '16px',
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  fontSize: '48px',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                }}>☀️</div>
                <div>
                  <div style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#d97706',
                    marginBottom: '4px'
                  }}>32°C</div>
                  <div style={{
                    fontSize: '14px',
                    color: '#92400e',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span style={{ fontSize: '14px' }}>📍</span>
                    Dubai, UAE
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#b45309',
                    fontStyle: 'italic'
                  }}>Perfect weather for exploring!</div>
                </div>
              </div>
              
              {/* Top Sights Section */}
              <div style={{ 
                position: 'relative', 
                zIndex: 1, 
                flex: 1,
                // Remove overflow: 'auto' and maxHeight
              }}>
                <div style={{
                  fontSize: '15px',
                  fontWeight: '700',
                  color: '#92400e',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  // Remove position: 'sticky' since it's no longer needed
                  backgroundColor: 'rgba(251, 191, 36, 0.08)',
                  padding: '4px 0',
                  zIndex: 2
                }}>
                  <span>🎯</span> Must-see attractions:
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  // Remove paddingRight for scrollbar
                }}>
                  {[
                    {
                      name: 'Burj Khalifa',
                      icon: '🏗️',
                      desc: 'World\'s tallest building'
                    }, 
                    {
                      name: 'Dubai Mall',
                      icon: '🛍️',
                      desc: 'Luxury shopping paradise'
                    }, 
                    {
                      name: 'Palm Jumeirah',
                      icon: '🏝️',
                      desc: 'Iconic artificial island'
                    }
                  ].map((sight, index) => (
                    <div key={index} style={{
                      fontSize: '13px',
                      color: '#374151',
                      padding: '10px 12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '10px',
                      border: '1px solid rgba(251, 191, 36, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(4px)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                    }}>
                      <span style={{ fontSize: '16px' }}>{sight.icon}</span>
                      <div>
                        <div style={{
                          fontWeight: '600',
                          color: '#d97706',
                          marginBottom: '2px'
                        }}>{sight.name}</div>
                        <div style={{
                          fontSize: '11px',
                          color: '#6b7280',
                          opacity: 0.8
                        }}>{sight.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom info */}
              <div style={{
                marginTop: '12px',
                padding: '8px',
                backgroundColor: 'rgba(217, 119, 6, 0.1)',
                borderRadius: '8px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  fontSize: '12px',
                  color: '#92400e',
                  fontWeight: '500'
                }}>Local time: GMT+4 • Currency: AED</div>
              </div>
            </div>
          </Card>
        </div>

      {/* Your Recent Explorations - Price Drops */}
        <Card title="🔍 Your Recent Explorations" subtitle="Great news! Prices have dropped on items you viewed" variant="gradient">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {/* Flight Search */}
            <div style={{
              padding: '18px',
              background: 'linear-gradient(135deg, rgba(5, 117, 138, 0.08) 0%, rgba(5, 117, 138, 0.03) 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(5, 117, 138, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={onBookFlight}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(5, 117, 138, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              {/* Price Drop Badge */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: '#dc2626',
                color: 'white',
                padding: '4px 10px',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                boxShadow: '0 2px 4px rgba(220, 38, 38, 0.3)'
              }}>
                <span>📉</span> Price Drop
              </div>
              
              <div style={{ marginBottom: '14px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '6px'
                }}>
                  <span role="img" aria-label="flight" style={{ 
                    fontSize: '22px',
                    marginRight: '10px',
                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                  }}>✈️</span>
                  <span style={{
                    fontWeight: '600',
                    color: '#05758a',
                    fontSize: '16px'
                  }}>Flight</span>
                </div>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#1f2937',
                  marginBottom: '4px'
                }}>Seattle → New York</div>
                <div style={{
                  fontSize: '14px',
                  color: '#6b7280'
                }}>Aug 15 - Aug 22 • Round-trip</div>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
              }}>
                <div>
                  <div style={{
                    fontSize: '13px',
                    color: '#9ca3af',
                    textDecoration: 'line-through',
                    marginBottom: '2px'
                  }}>Was $499</div>
                  <div style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#dc2626'
                  }}>$399</div>
                  <div style={{
                    fontSize: '12px',
                    color: '#059669',
                    fontWeight: '500'
                  }}>Save $100</div>
                </div>
                <button style={{
                  backgroundColor: '#05758a',
                  color: 'white',
                  border: 'none',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#044556'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#05758a'}>
                  Book Now
                </button>
              </div>
            </div>
            
            {/* Hotel Search */}
            <div style={{
              padding: '18px',
              background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.08) 0%, rgba(5, 150, 105, 0.03) 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(5, 150, 105, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(5, 150, 105, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              {/* Content for Hotel card */}
              <div style={{
                marginBottom: '14px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '6px'
                }}>
                  <span role="img" aria-label="hotel" style={{ 
                    fontSize: '22px',
                    marginRight: '10px',
                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                  }}>🏨</span>
                  <span style={{
                    fontWeight: '600',
                    color: '#05758a',
                    fontSize: '16px'
                  }}>Hotel</span>
                </div>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#1f2937',
                  marginBottom: '4px'
                }}>Marriott Seattle</div>
                <div style={{
                  fontSize: '14px',
                  color: '#6b7280'
                }}>Dec 10 - Dec 15 • 5 nights</div>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
              }}>
                <div>
                  <div style={{
                    fontSize: '13px',
                    color: '#9ca3af',
                    textDecoration: 'line-through',
                    marginBottom: '2px'
                  }}>Was $899</div>
                  <div style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#dc2626'
                  }}>$699</div>
                  <div style={{
                    fontSize: '12px',
                    color: '#059669',
                    fontWeight: '500'
                  }}>Save $200</div>
                </div>
                <button style={{
                  backgroundColor: '#05758a',
                  color: 'white',
                  border: 'none',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#044556'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#05758a'}>
                  Book Now
                </button>
              </div>
            </div>
            
            {/* Car Rental Search */}
            <div style={{
              padding: '18px',
              background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.08) 0%, rgba(217, 119, 6, 0.03) 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(217, 119, 6, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(217, 119, 6, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              {/* Content for Car Rental card */}
              <div style={{
                marginBottom: '14px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '6px'
                }}>
                  <span role="img" aria-label="car" style={{ 
                    fontSize: '22px',
                    marginRight: '10px',
                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                  }}>🚗</span>
                  <span style={{
                    fontWeight: '600',
                    color: '#05758a',
                    fontSize: '16px'
                  }}>Car Rental</span>
                </div>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#1f2937',
                  marginBottom: '4px'
                }}>Avis Seattle Airport</div>
                <div style={{
                  fontSize: '14px',
                  color: '#6b7280'
                }}>Dec 5 - Dec 10 • 5 days</div>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
              }}>
                <div>
                  <div style={{
                    fontSize: '13px',
                    color: '#9ca3af',
                    textDecoration: 'line-through',
                    marginBottom: '2px'
                  }}>Was $299</div>
                  <div style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#dc2626'
                  }}>$199</div>
                  <div style={{
                    fontSize: '12px',
                    color: '#059669',
                    fontWeight: '500'
                  }}>Save $100</div>
                </div>
                <button style={{
                  backgroundColor: '#05758a',
                  color: 'white',
                  border: 'none',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#044556'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#05758a'}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Elite Status Progress - Keep as is */}
        <Card 
          title="🏆 Elite Status Progress" 
          subtitle="Track your journey to the next elite tier!" 
          variant="gradient"
          onClick={handleEliteStatusProgressClick}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Urgency Banner */}
            <div style={{
              padding: '16px',
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '20px', marginRight: '12px' }}>⏰</span>
                <div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#dc2626',
                    marginBottom: '4px'
                  }}>Only 5 days left in qualification year!</div>
                  <div style={{
                    fontSize: '14px',
                    color: '#7f1d1d'
                  }}>Book now to secure your next tier benefits</div>
                </div>
              </div>
              <button 
                onClick={onBookFlight}
                style={{
                padding: '8px 16px',
                backgroundColor: '#dc2626',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b91c1c'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}>
                Book Flight
              </button>
            </div>

            {/* Elite Qualifying Miles */}
            <div style={{
              padding: '20px',
              background: 'linear-gradient(135deg, rgba(5, 117, 138, 0.1) 0%, rgba(5, 117, 138, 0.05) 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(5, 117, 138, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '8px'
              }}>
                <span style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#05758a'
                }}>✈️ Elite Qualifying Miles</span>
                <span style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  backgroundColor: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontWeight: '500'
                }}>21,000 / 30,000</span>
              </div>
              <div style={{
                fontSize: '14px',
                color: '#059669',
                fontWeight: '500',
                marginBottom: '12px'
              }}>🎯 Just 9,000 miles to MVP Gold! (~3 more flights)</div>
              <ProgressBar 
                progress={70} 
                color="blue" 
                height="lg"
                showLabel={false}
              />
            </div>

            {/* Elite Qualifying Segments */}
            <div style={{
              padding: '20px',
              background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
              borderRadius: '12px',
              border: '1px solid #a7f3d0'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '8px'
              }}>
                <span style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#05758a'
                }}>🎯 Elite Qualifying Segments</span>
                <span style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  backgroundColor: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontWeight: '500'
                }}>8 / 30</span>
              </div>
              <div style={{
                fontSize: '14px',
                color: '#d97706',
                fontWeight: '500',
                marginBottom: '12px'
              }}>⚡ 22 segments needed - Your London trip adds 2!</div>
              <ProgressBar 
                progress={27} 
                color="green" 
                height="lg"
                showLabel={false}
              />
            </div>

            {/* Action Incentive */}
            <div style={{
              padding: '20px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#059669',
                marginBottom: '8px'
              }}>💰 Next Tier Unlocks</div>
              <div style={{
                fontSize: '14px',
                color: '#047857',
                marginBottom: '12px'
              }}>• 50% bonus miles • Complimentary upgrades • Premium boarding</div>
              <div style={{
                fontSize: '13px',
                color: '#6b7280',
                fontStyle: 'italic'
              }}>Book your next trip to start earning these benefits!</div>
            </div>
            
            {/* Explore Milestones Button */}
            <div className="text-center mt-6">
              <button
                onClick={handleEliteStatusProgressClick}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#05758a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                  fontFamily: 'Source Sans Pro, sans-serif'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#044556'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#05758a'}
              >
                Explore All Milestones
              </button>
            </div>
          </div>
        </Card>

        {/* Elite Status Modal - This is missing */}
        {showEliteStatusModal && (
          <EliteStatusModal 
            isOpen={showEliteStatusModal}
            statusDetails={eliteStatusDetails}
            mileageActivity={mileageActivity}
            onClose={closeModal}
            showMileageActivity={showMileageActivity}
            showMilestones={showMilestones}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardView;
