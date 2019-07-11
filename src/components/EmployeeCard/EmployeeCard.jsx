import React from 'react';
import { Link } from 'react-router-dom';

import './EmployeeCard.scss';

export const EmployeeCard = ({ data }) => (
  <Link className='employee-card' to={`/staff/${data.id}`}>
    <img className='employee-card__profile-photo' src={data.photo} alt={data.name} />
    <div className='employee-card__description'>
      <h3 className='employee-card__name'>{data.name}</h3>
      <p className='employee-card__position'>{data.position}</p>
      <p className='employee-card__email'>{data.email}</p>
    </div>
  </Link>
);
