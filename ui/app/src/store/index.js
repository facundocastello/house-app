import { createStore, combineReducers, applyMiddleware } from 'redux';
import toDo from './to-do';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  toDo,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)),
);

export default store;
