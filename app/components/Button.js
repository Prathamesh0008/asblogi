import { forwardRef } from 'react';

const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'medium',
    className = '',
    isLoading = false,
    disabled = false,
    fullWidth = false,
    iconLeft = null,
    iconRight = null,
    type = 'button',
    onClick,
    ...props
  },
  ref
) {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-gray-800 hover:bg-gray-900 text-white focus:ring-gray-500 hover:shadow-md',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 hover:shadow-lg',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500 hover:shadow-lg',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500 hover:shadow-lg',
    light: 'bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-gray-300',
    dark: 'bg-gray-900 hover:bg-gray-800 text-white focus:ring-gray-700',
  };
  
  // Size classes
  const sizeClasses = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-3 px-6',
    large: 'py-4 px-8 text-lg',
    xlarge: 'py-5 px-10 text-xl',
  };
  
  // Width class
  const widthClass = fullWidth ? 'w-full' : '';
  
  // Loading spinner component
  const LoadingSpinner = () => (
    <svg 
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      ></circle>
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant] || variantClasses.primary}
    ${sizeClasses[size] || sizeClasses.medium}
    ${widthClass}
    ${className}
  `.trim();

  return (
    <button
      ref={ref}
      type={type}
      className={combinedClasses}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading && <LoadingSpinner />}
      {!isLoading && iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {!isLoading && iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
});

// Add display name for debugging
Button.displayName = 'Button';

export default Button;

// Button Group Component
export function ButtonGroup({ children, className = '', ...props }) {
  return (
    <div 
      className={`inline-flex rounded-lg shadow-sm ${className}`}
      role="group"
      {...props}
    >
      {children}
    </div>
  );
}

// Button Group Item Component
export function ButtonGroupItem({
  children,
  active = false,
  position = 'middle',
  className = '',
  ...props
}) {
  const positionClasses = {
    first: 'rounded-l-lg rounded-r-none',
    middle: 'rounded-none -ml-px',
    last: 'rounded-r-lg rounded-l-none -ml-px',
    single: 'rounded-lg',
  };
  
  const activeClasses = active 
    ? 'bg-blue-600 text-white z-10' 
    : 'bg-white text-gray-700 hover:bg-gray-50';
  
  return (
    <button
      type="button"
      className={`
        px-4 py-2 text-sm font-medium border border-gray-300 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none
        ${positionClasses[position] || positionClasses.middle}
        ${activeClasses}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

// Icon Button Component
export function IconButton({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  rounded = false,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-800 hover:bg-gray-900 text-white focus:ring-gray-500',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
  };
  
  const sizeClasses = {
    small: 'p-2 text-sm',
    medium: 'p-3',
    large: 'p-4 text-lg',
  };
  
  const roundedClass = rounded ? 'rounded-full' : 'rounded-lg';
  
  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${roundedClass}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}