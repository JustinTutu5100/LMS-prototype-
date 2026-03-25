import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) {
  const variantStyles = {
    primary: 'bg-primary text-on-primary hover:bg-primary-container focus:ring-primary',
    secondary: 'bg-secondary text-on-secondary hover:bg-secondary-container focus:ring-secondary',
    tertiary: 'bg-tertiary text-on-tertiary hover:bg-tertiary-container focus:ring-tertiary',
    outline: 'border-2 border-outline text-on-background hover:bg-surface-variant focus:ring-primary',
    ghost: 'text-primary hover:bg-surface-variant focus:ring-primary',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}