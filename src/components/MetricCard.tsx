import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, positive, icon }) => (
  <div style={{
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e5e7eb',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '12px'
    }}>
      <h3 style={{
        fontSize: '14px',
        fontWeight: '500',
        color: '#6b7280',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>{title}</h3>
      {icon && <span style={{
        fontSize: '24px',
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
      }}>{icon}</span>}
    </div>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <span style={{
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#111827',
        background: 'linear-gradient(135deg, #05758a 0%, #044556 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>{value}</span>
      <span style={{
        fontSize: '14px',
        fontWeight: '600',
        color: positive ? '#059669' : '#dc2626',
        backgroundColor: positive ? '#d1fae5' : '#fee2e2',
        padding: '4px 8px',
        borderRadius: '6px',
        border: `1px solid ${positive ? '#a7f3d0' : '#fecaca'}`
      }}>
        {change}
      </span>
    </div>
  </div>
);

export default MetricCard;
