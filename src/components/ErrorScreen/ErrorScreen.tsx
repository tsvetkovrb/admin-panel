import React from 'react';

import './ErrorScreen.scss';

type Props = {
  message: string;
};

export const ErrorScreen: React.FC<Props> = ({ message }) => (
  <div className="error-block">
    <h1>Sory, something went wrong =(</h1>
    <p className="error-block__text">{`Error: ${message}`}</p>
    <h2>Please contact with our support or try reload the page.</h2>
  </div>
);
