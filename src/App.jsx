import { hot } from 'react-hot-loader/root';

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ErrorScreen } from 'components/ErrorScreen/ErrorScreen';
import { Loader } from 'components/Loader/Loader';
import {
  StaffListPageContainer as StaffListPage,
  EmployeePageContainer as EmployeePage,
} from 'containers';
import './App.scss';
import { NotFountPage, AddUserPage } from 'pages';

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
      <main className="main">
        <React.Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/add" component={AddUserPage} />
            <Route exact path="/staff" component={StaffListPage} />
            <Route path="/staff/:id" component={EmployeePage} />
            <Redirect exact from="/" to="/staff" />
            <Route component={NotFountPage} />
          </Switch>
        </React.Suspense>
      </main>
    );
  }
}

export const Main = hot(App);
