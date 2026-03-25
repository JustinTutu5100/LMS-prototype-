import React from 'react';

export default function Card({
  children,
  hover = false,
  className = '',
  ...props
}) {
  const baseStyles = 'bg-surface-container rounded-lg shadow-md p-6 border border-surface-variant';
  const hoverStyles = hover ? 'hover:shadow-lg hover:border-outline transition-all duration-200' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}