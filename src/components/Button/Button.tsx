import React from 'react';

import './Button.scss';

type Props = {
  children: React.ReactNode;
  type: any;
  className: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({
  children,
  type,
  className,
  onClick,
  disabled = false,
}: Props) => (
  <button
    type={type}
    className={`button ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
