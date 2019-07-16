import React from 'react';
import { AddUserFormContainer as AddUserPageForm } from 'containers/AddUserFormContainer';

import './AddUserPage.scss';

export const AddUserPage = ({
  history, hasError, errors, isSending,
}) => (
  <div className='add-user-page'>
    <div className='container'>
      <h1 className='add-user-page__title mb40'>Add a user:</h1>
      <div className='add-user-page__content box'>
        <AddUserPageForm
          goBack={history.goBack}
          hasError={hasError}
          errors={errors}
          isSending={isSending}
        />
      </div>
    </div>
  </div>
);
