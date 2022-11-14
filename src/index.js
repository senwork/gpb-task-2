import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import App from './App';
import Home from './pages/home/home';
import ServiceListPage from './pages/serviceListPage/serviceListPage';
import ServiceDetailPage from './pages/serviceDetailPage/serviceDetailPage';

import store from './redux/store';
import { history } from './redux/reducers/index';
import reportWebVitals from './reportWebVitals';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/services" exact><ServiceListPage /></Route>
          <Route path="/services/:id/details"><ServiceDetailPage /></Route>
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
