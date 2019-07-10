import { hot } from 'react-hot-loader/root';
import 'babel-polyfill';

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { StaffListPage } from 'pages/StaffListPage';
import { EmployeePage } from 'pages/EmployeePage';
import { NotFountPage } from 'pages/NotFountPage';

import './App.scss';

const App = () => (
  <main className='main'>
    <Switch>
      <Route exact path='/employees' component={StaffListPage} />
      <Route path='/employees/:id' component={EmployeePage} />
      <Redirect exact from='/' to='/employees' />
      <Route component={NotFountPage} />
    </Switch>
  </main>
);

export const Main = hot(App);
