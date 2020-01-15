import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import dataManager from './dataManager';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  dataManager,
});
let store = '';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)),
);

export default store;
