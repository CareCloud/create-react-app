/**
 * Application store that is hydrated by a rootReducer and initialState.
 * We configure the store with additional middleware that includes a
 * logger for Development and Epics from the Redux-Observable library.
 *
 * Our Root Reducer sets up our initial application state.
 *
 */
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import thunkMiddleware from 'redux-thunk';

import rootEpic from './rootEpic';
import rootReducer from './rootReducer';

const epicMiddleware = createEpicMiddleware(rootEpic);
const Middleware = [epicMiddleware, thunkMiddleware];

let superCompose = compose;

if (process.env.NODE_ENV !== 'production') {
  Middleware.push(
    createLogger({
      collapsed: (getState, action) => false,
    })
  );
  // This allows us to support the REDUX DevTools Extension
  superCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () =>
  createStore(rootReducer, superCompose(applyMiddleware(...Middleware)));

export default configureStore;
