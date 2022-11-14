import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

import errors from "./errors";
import loader from './loader';
import services from "./services";

export const history = createBrowserHistory();

const reducer = combineReducers({
  services,
  loader,
  errors,
  router: connectRouter(history),
});

export default reducer;
