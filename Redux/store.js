import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';

const state = {};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  state,
  compose(applyMiddleware(...middleware)),
);
