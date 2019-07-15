import React from 'react';
import { Link } from 'react-router-dom';

import './AddUserCard.scss';

export const AddUserCard = () => (
  <Link className='add-user-card employee-card box' to='/add'>
    <div className='add-user-card__image' />
    <div className='add-user-card__description'>
      <h2 className='add-user-card__title'>Add a user</h2>
    </div>
  </Link>
);
