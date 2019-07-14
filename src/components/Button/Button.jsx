import React from 'react';

import './Button.scss';

export const Button = ({
  children, type = 'button', className, onClick, disabled = false,
}) => (
  // Не нашёл другого варианта для динамической подстановки типа кнопки
  /* eslint-disable react/button-has-type */
  <button type={type} className={`button ${className}`} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);
