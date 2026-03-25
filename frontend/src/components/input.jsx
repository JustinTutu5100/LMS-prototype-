import React from 'react';

export default function Input({
  label,
  error,
  type = 'text',
  className = '',
  ...props
}) {
  const baseStyles = 'w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest text-on-background placeholder-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200';
  const errorStyles = error ? 'border-error focus:ring-error' : '';

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-on-background mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`${baseStyles} ${errorStyles} ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  );
}