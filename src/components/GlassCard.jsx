import React from 'react';

const GlassCard = ({ children, className = '', animate = false, style = {} }) => {
  return (
    <div 
      className={`glass-card ${animate ? 'animate-float' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
