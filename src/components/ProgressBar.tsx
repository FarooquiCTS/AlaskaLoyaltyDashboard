import React from 'react';

interface ProgressBarProps {
  progress: number;
  total?: number;
  color?: 'green' | 'orange' | 'blue' | 'purple';
  showLabel?: boolean;
  height?: 'sm' | 'md' | 'lg';
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  total = 100, 
  color = 'green', 
  showLabel = false,
  height = 'md'
}) => {
  const percentage = total > 0 ? (progress / total) * 100 : 0;
  
  const getColor = () => {
    switch (color) {
      case 'green': return '#059669';
      case 'orange': return '#d97706';
      case 'blue': return '#05758a';
      case 'purple': return '#7c3aed';
      default: return '#05758a';
    }
  };

  const getHeight = () => {
    switch (height) {
      case 'sm': return '6px';
      case 'lg': return '16px';
      default: return '12px';
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {showLabel && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '14px',
          marginBottom: '4px',
          color: '#6b7280'
        }}>
          <span>{progress}</span>
          <span>{total}</span>
        </div>
      )}
      <div style={{
        backgroundColor: '#e5e7eb',
        borderRadius: '10px',
        height: getHeight(),
        overflow: 'hidden',
        boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
      }}>
        <div style={{
          background: `linear-gradient(90deg, ${getColor()}, ${getColor()}dd)`,
          height: getHeight(),
          borderRadius: '10px',
          width: `${Math.min(percentage, 100)}%`,
          transition: 'width 0.3s ease-in-out',
          boxShadow: `0 0 8px ${getColor()}33`
        }} />
      </div>
    </div>
  );
};

export default ProgressBar;
