import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  variant?: 'default' | 'gradient' | 'border';
  padding?: 'sm' | 'md' | 'lg';
  shadow?: boolean;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  className = '',
  variant = 'default',
  padding = 'md',
  shadow = true,
  hover = false
}) => {
  const getBackgroundStyle = () => {
    switch (variant) {
      case 'gradient':
        return 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)';
      case 'border':
        return 'white';
      default:
        return 'white';
    }
  };

  const getPadding = () => {
    switch (padding) {
      case 'sm': return '16px';
      case 'lg': return '32px';
      default: return '24px';
    }
  };

  const cardStyle: React.CSSProperties = {
    background: getBackgroundStyle(),
    borderRadius: '12px',
    border: variant === 'border' ? '2px solid #e5e7eb' : '1px solid #e5e7eb',
    padding: getPadding(),
    boxShadow: shadow ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
    transition: hover ? 'all 0.3s ease' : 'none',
    cursor: hover ? 'pointer' : 'default',
    marginBottom: '24px',
    backgroundColor: 'white'
  };

  return (
    <div 
      style={cardStyle}
      className={className}
      onMouseEnter={hover ? (e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
      } : undefined}
      onMouseLeave={hover ? (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = shadow ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none';
      } : undefined}
    >
      {(title || subtitle) && (
        <div style={{ marginBottom: '20px' }}>
          {title && <h3 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: subtitle ? '8px' : '0',
            background: 'linear-gradient(135deg, #05758a 0%, #044556 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>{title}</h3>}
          {subtitle && <p style={{
            color: '#6b7280',
            fontSize: '16px',
            margin: 0
          }}>{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
