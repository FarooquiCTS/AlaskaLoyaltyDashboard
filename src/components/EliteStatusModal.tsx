import React, { useState } from 'react';
import Modal from './Modal';
import type { EliteStatusDetails, MileageActivity } from '../types';

interface EliteStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  statusDetails: EliteStatusDetails;
  mileageActivity: MileageActivity[];
  showMilestones?: boolean;
  showMileageActivity?: boolean;
}

const EliteStatusModal: React.FC<EliteStatusModalProps> = ({ 
  isOpen, 
  onClose, 
  statusDetails, 
  mileageActivity,
  showMilestones = false,
  showMileageActivity = false
}) => {
  const [activeTab, setActiveTab] = useState<'status' | 'milestones' | 'activity'>(
    showMilestones ? 'milestones' : showMileageActivity ? 'activity' : 'status'
  );

  const getStatusColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'mvp': return '#05758a';
      case 'mvp gold': return '#d97706';
      case 'mvp gold 75k': return '#7c3aed';
      case 'mvp gold 100k': return '#1f2937';
      default: return '#6b7280';
    }
  };

  const getProgressPercentage = () => {
    if (!statusDetails.nextMilestone) return 100;
    const currentMiles = statusDetails.currentMiles;
    const nextMiles = statusDetails.nextMilestone.miles;
    const prevMiles = getPreviousMilestonesMiles();
    return ((currentMiles - prevMiles) / (nextMiles - prevMiles)) * 100;
  };

  const getPreviousMilestonesMiles = () => {
    const completedMilestones = statusDetails.allMilestones
      .filter(m => m.isCompleted)
      .sort((a, b) => b.miles - a.miles);
    return completedMilestones.length > 0 ? completedMilestones[0].miles : 0;
  };

  const renderStatusTab = () => (
    <div className="space-y-8">
      {/* Current Status */}
      <div style={{
        backgroundColor: 'rgba(5, 117, 138, 0.05)',
        borderRadius: '12px',
        padding: '32px',
        border: '1px solid rgba(5, 117, 138, 0.2)'
      }}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: getStatusColor(statusDetails.currentLevel),
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '28px',
              marginRight: '20px'
            }}>
              ⭐
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                {statusDetails.currentLevel}
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                {statusDetails.currentMiles.toLocaleString()} elite-qualifying miles
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-900">
              {statusDetails.lifetimeMiles.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">Lifetime Miles</p>
          </div>
        </div>

        {/* Progress to next milestone */}
        {statusDetails.nextMilestone && (
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Progress to {statusDetails.nextMilestone.title}</span>
              <span className="font-medium text-gray-900">
                {statusDetails.milesToNextMilestone.toLocaleString()} miles to go
              </span>
            </div>
            <div className="bg-gray-200 rounded-full h-3">
              <div 
                style={{
                  backgroundColor: '#05758a',
                  height: '12px',
                  borderRadius: '9999px',
                  width: `${Math.min(getProgressPercentage(), 100)}%`,
                  transition: 'width 0.3s ease'
                }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Current Benefits */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        border: '1px solid #e5e7eb'
      }}>
        <h4 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          Your Current Benefits
        </h4>
        <div className="space-y-2">
          {getCurrentBenefits().map((benefit, index) => (
            <div key={index} className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span className="text-gray-700" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setActiveTab('milestones')}
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
  );

  const getCurrentBenefits = () => {
    const currentMiles = statusDetails.currentMiles;
    
    if (currentMiles >= 100000) {
      return [
        'Earn 150% bonus miles on all flights, including airline partners',
        'Free meal and a premium drink or chocolate in Main Cabin',
        'oneworld® Emerald status benefits',
        'Three (3) free checked bags',
        'MVP 100K Choice Benefit',
        'Standby and waitlist for full flights',
        'Complimentary same-day flight changes',
        'Complimentary First and Premium Class upgrades',
        'Priority call routing for Customer Care',
        'Express security at select airports',
        'Priority check-in and boarding'
      ];
    } else if (currentMiles >= 75000) {
      return [
        'Earn 100% bonus miles on all flights, including airline partners',
        'Free premium drink or chocolate in Main Cabin',
        'oneworld® Emerald status benefits',
        'Three (3) free checked bags',
        'Standby and waitlist for full flights',
        'Complimentary same-day flight changes',
        'Complimentary First and Premium Class upgrades',
        'Priority call routing for Customer Care',
        'Express security at select airports',
        'Priority check-in and boarding'
      ];
    } else if (currentMiles >= 40000) {
      return [
        'Earn 50% bonus miles on all flights, including partners',
        'Free premium drink or chocolate in Main Cabin',
        'oneworld® Sapphire status benefits',
        'Two (2) free checked bags',
        'Standby and waitlist for full flights',
        'Complimentary same-day flight changes',
        'Complimentary First and Premium Class upgrades',
        'Priority call routing for Customer Care',
        'Express security at select airports',
        'Priority check-in and boarding'
      ];
    } else if (currentMiles >= 20000) {
      return [
        'Earn 25% bonus miles on all flights, including airline partners',
        'oneworld® Ruby status benefits',
        'Two (2) free checked bags (2025), One (1) free checked bag (2026)',
        'Complimentary First and Premium Class upgrades',
        'Complimentary preferred seating',
        'Priority call routing for Customer Care',
        'Express security at select airports',
        'Priority check-in and boarding'
      ];
    }
    return ['Continue flying to unlock elite benefits!'];
  };

  const renderMilestonesTab = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
        All Milestones & Elite Status Levels
      </h3>
      
      <div className="space-y-4">
        {statusDetails.allMilestones.map((milestone) => (
          <div 
            key={milestone.id}
            style={{
              backgroundColor: milestone.isCompleted ? 'rgba(5, 150, 105, 0.05)' : 
                             milestone.isActive ? 'rgba(5, 117, 138, 0.05)' : 'white',
              borderRadius: '12px',
              padding: '24px',
              border: `1px solid ${milestone.isCompleted ? 'rgba(5, 150, 105, 0.2)' : 
                                 milestone.isActive ? 'rgba(5, 117, 138, 0.2)' : '#e5e7eb'}`,
              position: 'relative'
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: milestone.isCompleted ? '#059669' : 
                                 milestone.isActive ? '#05758a' : '#6b7280',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '20px',
                  marginRight: '16px',
                  flexShrink: 0
                }}>
                  {milestone.isCompleted ? '✓' : milestone.type === 'elite_status' ? '⭐' : '🎯'}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                    {milestone.miles.toLocaleString()} elite-qualifying miles
                  </p>
                  
                  {/* Benefits */}
                  {milestone.benefits && milestone.benefits.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Benefits:</h5>
                      <div className="space-y-1">
                        {milestone.benefits.slice(0, 3).map((benefit, index) => (
                          <div key={index} className="flex items-start text-sm">
                            <span className="text-green-500 mr-2 mt-0.5">•</span>
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                        {milestone.benefits.length > 3 && (
                          <p className="text-sm text-gray-500 italic">
                            +{milestone.benefits.length - 3} more benefits
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Perks */}
                  {milestone.perks && milestone.perks.length > 0 && (
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">
                        Pick {milestone.perks.length > 1 ? `${milestone.perks.length} perks` : '1 perk'}:
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {milestone.perks.map((perk) => (
                          <div 
                            key={perk.id}
                            className="text-sm p-2 rounded bg-gray-50 border border-gray-200"
                          >
                            {perk.description}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {milestone.isCompleted && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Completed
                </span>
              )}
              {milestone.isActive && !milestone.isCompleted && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Current
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderActivityTab = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
        Mileage Activity
      </h3>
      
      <div className="space-y-3">
        {mileageActivity.map((activity) => (
          <div 
            key={activity.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '16px',
              border: '1px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div className="flex items-center">
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: activity.type === 'earned' ? '#059669' : 
                               activity.type === 'redeemed' ? '#dc2626' : '#6b7280',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                marginRight: '16px'
              }}>
                {activity.type === 'earned' ? '+' : activity.type === 'redeemed' ? '-' : '!'}
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{activity.description}</h4>
                <p className="text-sm text-gray-600">{activity.source} • {activity.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p style={{
                color: activity.type === 'earned' ? '#059669' : 
                       activity.type === 'redeemed' ? '#dc2626' : '#6b7280',
                fontWeight: '600'
              }}>
                {activity.type === 'earned' ? '+' : activity.type === 'redeemed' ? '-' : ''}
                {activity.miles.toLocaleString()} miles
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <div className="p-8">
        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
          {[
            { key: 'status', label: 'Elite Status' },
            { key: 'milestones', label: 'All Milestones' },
            { key: 'activity', label: 'Mileage Activity' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              style={{
                flex: 1,
                padding: '12px 16px',
                backgroundColor: activeTab === tab.key ? 'white' : 'transparent',
                color: activeTab === tab.key ? '#05758a' : '#6b7280',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'Source Sans Pro, sans-serif',
                boxShadow: activeTab === tab.key ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'status' && renderStatusTab()}
        {activeTab === 'milestones' && renderMilestonesTab()}
        {activeTab === 'activity' && renderActivityTab()}

        {/* Close Button */}
        <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={onClose}
            style={{
              padding: '12px 24px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              backgroundColor: 'white',
              color: '#374151',
              fontSize: '16px',
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
        </div>
      </div>
    </Modal>
  );
};

export default EliteStatusModal;
