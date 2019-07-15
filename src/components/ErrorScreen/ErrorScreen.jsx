import React from 'react';

import './ErrorScreen.scss';

export const ErrorScreen = ({ message }) => (
  <div className='error-block'>
    <h1>Sory, something went wrong =(</h1>
    <p className='error-block__text'>{`Error: ${message}`}</p>
    <h2>Please contact with our support or try reload the page.</h2>
  </div>
);
