import React from 'react';
import type { NavButtonProps } from '../types';

const NavButton: React.FC<NavButtonProps> = ({ label, isActive, onClick, icon }) => (
  <button
    onClick={onClick}
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '12px 24px',
      borderRadius: '8px',
      fontWeight: '500',
      transition: 'all 0.2s',
      border: 'none',
      cursor: 'pointer',
      backgroundColor: isActive ? '#05758a' : 'transparent',
      color: isActive ? 'white' : '#6b7280',
      boxShadow: isActive ? '0 10px 15px -3px rgba(5, 117, 138, 0.2)' : 'none',
      transform: isActive ? 'scale(1.05)' : 'scale(1)',
    }}
    onMouseEnter={(e) => {
      if (!isActive) {
        e.currentTarget.style.backgroundColor = 'rgba(5, 117, 138, 0.1)';
        e.currentTarget.style.color = '#05758a';
      }
    }}
    onMouseLeave={(e) => {
      if (!isActive) {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = '#6b7280';
      }
    }}
  >
    <span style={{ marginRight: '8px', fontSize: '18px' }}>{icon}</span>
    {label}
  </button>
);

export default NavButton;
