import { createStore, combineReducers, applyMiddleware } from 'redux';
import dataManager from './dataManager';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  dataManager,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)),
);

export default store;
