import React from 'react';
import type { DashboardMetric, Achievement, User } from '../types';
import MetricCard from './MetricCard';
import ProgressBar from './ProgressBar';
import Card from './Card';

interface DashboardViewProps {
  user: User;
}

const DashboardView: React.FC<DashboardViewProps> = ({ user }) => {
  const dashboardMetrics: DashboardMetric[] = [
    { title: 'Loyalty Points', value: '24,856', change: '+1,250' },
    { title: 'Miles Flown', value: '156,240', change: '+8,450' },
    { title: 'Elite Status', value: 'Gold', change: '2,344 to Platinum' },
    { title: 'Savings YTD', value: '$2,450', change: '+$340' }
  ];

  const achievements: Achievement[] = [
    { title: 'Frequent Flyer', description: 'Complete 25 flights', icon: '✈️', date: 'Dec 2024' },
    { title: 'Elite Member', description: 'Reach Gold status', icon: '⭐', date: 'Nov 2024' },
    { title: 'Point Collector', description: 'Earn 50,000 points', icon: '🏆', date: 'Oct 2024' }
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
                icon={metric.title.includes('Miles') ? '✈️' : 
                      metric.title.includes('Status') ? '⭐' : 
                      metric.title.includes('Savings') ? '💰' : '🎯'}
              />
            ))}
          </div>
        </Card>

        {/* Elite Status Progress */}
        <Card title="🏆 Elite Status Progress" subtitle="You're getting closer to the next tier!" variant="gradient">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
                marginBottom: '12px'
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
                }}>12,500 / 25,000</span>
              </div>
              <ProgressBar 
                progress={50} 
                color="blue" 
                height="lg"
                showLabel={false}
              />
            </div>
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
                marginBottom: '12px'
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
              <ProgressBar 
                progress={27} 
                color="green" 
                height="lg"
                showLabel={false}
              />
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
                background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                borderRadius: '12px',
                border: '1px solid #f59e0b',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px -3px rgba(245, 158, 11, 0.3)';
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
                    color: '#92400e',
                    marginBottom: '4px',
                    fontSize: '16px'
                  }}>{achievement.title}</h4>
                  <p style={{
                    fontSize: '14px',
                    color: '#a16207',
                    marginBottom: '6px'
                  }}>{achievement.description}</p>
                  <p style={{
                    fontSize: '12px',
                    color: '#d97706',
                    fontWeight: '500',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
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
              <button key={index} style={{
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
      </div>
    </div>
  );
};

export default DashboardView;
