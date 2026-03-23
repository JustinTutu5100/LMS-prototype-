// Button.js
import React from 'react';

const Button = ({ variant = 'primary', size = 'md', children, ...props }) => {
    const baseStyle = 'font-bold py-2 px-4 rounded focus:outline-none focus:ring';
    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        tertiary: 'bg-green-500 text-white hover:bg-green-600',
        outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
        ghost: 'text-blue-500 hover:bg-blue-500 hover:text-white',
    };
    const sizeStyles = {
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
    };

    const composedStyle = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]}`;

    return (
        <button className={composedStyle} {...props}>
            {children}
        </button>
    );
};

export default Button;