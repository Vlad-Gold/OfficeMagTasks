import React from 'react';
import './Button.css';

export type ButtonVariant = 'default' | 'dangerBorder' | 'dangerBg' | 'successBg' | 'successBorder' | 'arrow';
export type ButtonState = 'default' | 'hover' | 'active';

interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonVariant;
  state?: ButtonState;
  disabled?: boolean;
  icon?: string;
  onClick?: () => void;
  htmlType?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'default',
  state = 'default',
  disabled = false,
  icon,
  onClick,
  htmlType = 'button',
  className = '',
}) => {
  const getButtonClasses = () => {
    const baseClasses = 'btn';
    const variantClasses = type !== 'default' ? ` btn${type.charAt(0).toUpperCase() + type.slice(1)}` : '';
    const stateClasses = state !== 'default' ? ` ${state}` : '';
    const disabledClasses = disabled ? ' disabled' : '';
    
    return `${baseClasses}${variantClasses}${stateClasses}${disabledClasses} ${className}`.trim();
  };

  return (
    <button
      type={htmlType}
      className={getButtonClasses()}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="" />}
      {children}
    </button>
  );
};

export default Button;
