import React from 'react';

import { Link } from 'react-router-dom';

import addUserIcon from 'static/add-user.svg';

import './AddUserRound.scss';

export const AddUserRound = () => (
  <Link to="/add" className="add-user-round caurusel-item">
    <img className="add-user-round__image" src={addUserIcon} alt="Add user" />
  </Link>
);
