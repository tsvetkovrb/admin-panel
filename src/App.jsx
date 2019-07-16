import { hot } from 'react-hot-loader/root';

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { StaffListPageContainer as StaffListPage } from 'containers/StaffListPageContainer';
import { EmployeePageContainer as EmployeePage } from 'containers/EmployeePageContainer';

import { NotFountPage } from 'pages/NotFountPage/NotFountPage';
import { AddUserPage } from 'pages/AddUserPage/AddUserPage';

import { ErrorScreen } from 'components/ErrorScreen/ErrorScreen';

import './App.scss';

class App extends React.Component {
  state = {
    hasError: false,
    errorInfo: {},
  };

  componentDidCatch(error) {
    this.setState({ hasError: true, errorInfo: error });
  }

  render() {
    const { hasError, errorInfo } = this.state;

    if (hasError) {
      return <ErrorScreen message={errorInfo.message} />;
    }

    return (
      <main className='main'>
        <Switch>
          <Route path='/add' component={AddUserPage} />
          <Route exact path='/staff' component={StaffListPage} />
          <Route path='/staff/:id' component={EmployeePage} />
          <Redirect exact from='/' to='/staff' />
          <Route component={NotFountPage} />
        </Switch>
      </main>
    );
  }
}

export const Main = hot(App);
