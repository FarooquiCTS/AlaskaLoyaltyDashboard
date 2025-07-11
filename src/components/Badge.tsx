import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  pill?: boolean;
  outline?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  pill = false,
  outline = false
}) => {
  const getVariantStyles = () => {
    const variants = {
      primary: {
        backgroundColor: outline ? 'transparent' : '#05758a',
        color: outline ? '#05758a' : 'white',
        border: outline ? '1px solid #05758a' : 'none'
      },
      secondary: {
        backgroundColor: outline ? 'transparent' : '#6b7280',
        color: outline ? '#6b7280' : 'white',
        border: outline ? '1px solid #6b7280' : 'none'
      },
      success: {
        backgroundColor: outline ? 'transparent' : '#059669',
        color: outline ? '#059669' : 'white',
        border: outline ? '1px solid #059669' : 'none'
      },
      warning: {
        backgroundColor: outline ? 'transparent' : '#d97706',
        color: outline ? '#d97706' : 'white',
        border: outline ? '1px solid #d97706' : 'none'
      },
      danger: {
        backgroundColor: outline ? 'transparent' : '#dc2626',
        color: outline ? '#dc2626' : 'white',
        border: outline ? '1px solid #dc2626' : 'none'
      },
      info: {
        backgroundColor: outline ? 'transparent' : '#0891b2',
        color: outline ? '#0891b2' : 'white',
        border: outline ? '1px solid #0891b2' : 'none'
      }
    };
    return variants[variant];
  };

  const getSizeStyles = () => {
    const sizes = {
      sm: { fontSize: '12px', padding: '4px 8px' },
      md: { fontSize: '14px', padding: '6px 12px' },
      lg: { fontSize: '16px', padding: '8px 16px' }
    };
    return sizes[size];
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '500',
      borderRadius: pill ? '9999px' : '6px',
      ...variantStyles,
      ...sizeStyles
    }}>
      {children}
    </span>
  );
};

export default Badge;
