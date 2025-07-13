import React, { useState } from 'react';
import type { DashboardMetric, Achievement, User, EliteStatusDetails, MileageActivity } from '../types';
import MetricCard from './MetricCard';
import ProgressBar from './ProgressBar';
import Card from './Card';
import EliteStatusModal from './EliteStatusModal';

interface DashboardViewProps {
  user: User;
  onBookFlight?: () => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ user, onBookFlight }) => {
  const [showEliteStatusModal, setShowEliteStatusModal] = useState(false);
  const [showMileageActivity, setShowMileageActivity] = useState(false);
  const [showMilestones, setShowMilestones] = useState(false);

  const dashboardMetrics: DashboardMetric[] = [
    { title: 'Available Miles', value: '4,860', change: '+1,250' },
    { title: 'Lifetime Alaska Miles', value: '21,000', change: '+8,450' },
    { title: 'Elite Status', value: 'MVP', change: 'View Benefits & Details' }
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

  const achievements: Achievement[] = [
    { title: 'MVP Status Earned', description: 'Achieved MVP elite status', icon: '🎖️', date: 'Jan 2025' },
    { title: '20K Mile Milestone', description: 'Reached 20,000 lifetime miles', icon: '✈️', date: 'Dec 2024' },
    { title: 'Weekend Warrior Progress', description: 'Completed 2 weekend trips', icon: '🏃‍♂️', date: 'Nov 2024' },
    { title: 'International Flight', description: 'Booked London trip', icon: '�', date: 'Nov 2024' }
  ];

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
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#111827',
          marginBottom: '32px',
          textAlign: 'center'
        }}>Welcome back, {user.name}!</h1>
        
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
                onClick={metric.title === 'Elite Status' ? handleEliteStatusClick :
                        metric.title === 'Available Miles' ? handleAvailableMilesClick : undefined}
              />
            ))}
          </div>
        </Card>

        {/* Elite Status Progress */}
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

        {/* Achievements Section */}
        <Card title="🏅 Recent Achievements" variant="gradient">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {achievements.map((achievement, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                padding: '20px',
                background: 'linear-gradient(135deg, rgba(5, 117, 138, 0.1) 0%, rgba(5, 117, 138, 0.05) 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(5, 117, 138, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px -3px rgba(5, 117, 138, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  fontSize: '32px',
                  marginRight: '16px',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }}>{achievement.icon}</div>
                <div>
                  <h4 style={{
                    fontWeight: '600',
                    color: '#05758a',
                    marginBottom: '4px',
                    fontSize: '16px'
                  }}>{achievement.title}</h4>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    marginBottom: '6px'
                  }}>{achievement.description}</p>
                  <p style={{
                    fontSize: '12px',
                    color: '#05758a',
                    fontWeight: '500',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    display: 'inline-block'
                  }}>{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card title="🚀 Quick Actions" variant="gradient">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            {[
              { icon: '✈️', label: 'Book Flight', color: '#05758a', bg: 'rgba(5, 117, 138, 0.1)' },
              { icon: '🎁', label: 'Redeem Miles', color: '#059669', bg: 'rgba(5, 150, 105, 0.1)' },
              { icon: '🏨', label: 'Book Hotel', color: '#7c3aed', bg: 'rgba(124, 58, 237, 0.1)' },
              { icon: '🚗', label: 'Rent Car', color: '#d97706', bg: 'rgba(217, 119, 6, 0.1)' }
            ].map((action, index) => (
              <button key={index} 
                onClick={action.label === 'Book Flight' ? onBookFlight : undefined}
                style={{
                padding: '20px',
                textAlign: 'center',
                backgroundColor: action.bg,
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                border: `2px solid ${action.color}33`,
                cursor: 'pointer',
                background: `linear-gradient(135deg, ${action.bg} 0%, ${action.color}11 100%)`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 10px 25px -3px ${action.color}33`;
                e.currentTarget.style.borderColor = action.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = `${action.color}33`;
              }}>
                <div style={{
                  fontSize: '32px',
                  marginBottom: '12px',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }}>{action.icon}</div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: action.color
                }}>{action.label}</div>
              </button>
            ))}
          </div>
        </Card>

        {/* Elite Status Modal */}
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
