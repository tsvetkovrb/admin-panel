import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { AddUserFormContainer as AddUserPageForm } from 'containers';

import './AddUserPage.scss';

type Props = {
  hasError: boolean;
  errors: Array<{ message: string }>;
  isSending: boolean;
} & RouteComponentProps;

export const AddUserPage: React.FC<Props> = ({ history }) => (
  <div className="add-user-page">
    <div className="container">
      <h1 className="add-user-page__title mb40">Add a user:</h1>
      <div className="add-user-page__content box">
        <AddUserPageForm goBack={history.goBack} />
      </div>
    </div>
  </div>
);
