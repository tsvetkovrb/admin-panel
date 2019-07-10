import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Main } from './App';

const mountNode = document.getElementById('app');

if (mountNode) {
  ReactDOM.render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>,
    mountNode,
  );
}
