import React from 'react';
import { AddUserPageForm } from 'components/Forms/AddUserForm/AddUserForm';

import './AddUserPage.scss';

export const AddUserPage = ({ history }) => (
  <div className='add-user-page'>
    <div className='container'>
      <h1 className='add-user-page__title mb40'>Add a user:</h1>
      <div className='add-user-page__content box'>
        <AddUserPageForm goBack={history.goBack} />
      </div>
    </div>
  </div>
);
