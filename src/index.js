import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.scss';
import './assets/css/main.css'
import {ConnectedRouter} from 'connected-react-router'
import {Provider, ReactReduxContext} from 'react-redux'
import store, {history} from './client/redux'
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} context={ReactReduxContext}>
      <ConnectedRouter history={history} context={ReactReduxContext}>
       <App/>
    </ConnectedRouter>
  </Provider>
</React.StrictMode>,
document.getElementById('root')
);


