import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = process.env.NODE_ENV !== 'production' ?
  [reduxImmutableStateInvariant(), thunk] :
  [thunk];

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  );
}
