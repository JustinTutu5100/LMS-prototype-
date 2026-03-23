import React from 'react';

export default function Header({
  title,
  subtitle,
  action,
  className = '',
  ...props
}) {
  return (
    <div className={`section-header ${className}`} {...props}>
      {title && <h1 className="section-title">{title}</h1>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}