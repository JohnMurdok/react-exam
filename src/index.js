import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import './assets/css/index.css';
import store from './store';

ReactDOM.render(
  <AppContainer store={store} />,
  document.getElementById('root')
);
