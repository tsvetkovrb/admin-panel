import { hot } from 'react-hot-loader/root';

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ErrorScreen } from 'components/ErrorScreen';
import { Loader } from 'components/Loader';
import {
  StaffListPageContainer as StaffListPage,
  EmployeePageContainer as EmployeePage,
} from 'containers';
import './App.scss';
import { NotFountPage, AddUserPage } from 'pages';

type State = {
  hasError: boolean;
  errorInfo: { message?: string };
};

class App extends React.Component<Record<string, unknown>, State> {
  state: State = {
    hasError: false,
    errorInfo: {},
  };

  componentDidCatch(error: { message?: string }) {
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
