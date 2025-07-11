import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: '#05758a',
          color: 'white',
          borderColor: '#05758a',
          '&:hover': { backgroundColor: '#044556' }
        };
      case 'secondary':
        return {
          backgroundColor: 'transparent',
          color: '#05758a',
          borderColor: '#05758a',
          border: '2px solid #05758a'
        };
      case 'success':
        return {
          backgroundColor: '#059669',
          color: 'white',
          borderColor: '#059669'
        };
      case 'warning':
        return {
          backgroundColor: '#d97706',
          color: 'white',
          borderColor: '#d97706'
        };
      case 'danger':
        return {
          backgroundColor: '#dc2626',
          color: 'white',
          borderColor: '#dc2626'
        };
      default:
        return {
          backgroundColor: '#05758a',
          color: 'white',
          borderColor: '#05758a'
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { padding: '6px 12px', fontSize: '14px' };
      case 'md':
        return { padding: '8px 16px', fontSize: '16px' };
      case 'lg':
        return { padding: '12px 24px', fontSize: '18px' };
      default:
        return { padding: '8px 16px', fontSize: '16px' };
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  return (
    <button
      style={{
        ...variantStyles,
        ...sizeStyles,
        fontWeight: '500',
        borderRadius: '8px',
        border: variantStyles.border || '2px solid transparent',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all 0.2s ease',
        transform: 'scale(1)',
        width: fullWidth ? '100%' : 'auto',
        fontFamily: 'inherit',
        outline: 'none',
        boxShadow: '0 2px 4px rgba(5, 117, 138, 0.1)'
      }}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'scale(1.05)';
          if (variant === 'primary') {
            e.currentTarget.style.backgroundColor = '#044556';
          } else if (variant === 'secondary') {
            e.currentTarget.style.backgroundColor = 'rgba(5, 117, 138, 0.1)';
          }
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'scale(1)';
          if (variant === 'primary') {
            e.currentTarget.style.backgroundColor = '#05758a';
          } else if (variant === 'secondary') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }
      }}
      onMouseDown={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'scale(0.95)';
        }
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'scale(1.05)';
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
