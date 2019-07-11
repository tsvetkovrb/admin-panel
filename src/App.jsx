import { hot } from 'react-hot-loader/root';
import 'babel-polyfill';

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { StaffListPageContainer as StaffListPage } from 'containers/StaffListPageContainer';
import { EmployeePage } from 'pages/EmployeePage/EmployeePage';
import { NotFountPage } from 'pages/NotFountPage/NotFountPage';

import './App.scss';

const App = () => (
  <main className='main'>
    <Switch>
      <Route exact path='/staff' component={StaffListPage} />
      <Route path='/staff/:id' component={EmployeePage} />
      <Redirect exact from='/' to='/staff' />
      <Route component={NotFountPage} />
    </Switch>
  </main>
);

export const Main = hot(App);
