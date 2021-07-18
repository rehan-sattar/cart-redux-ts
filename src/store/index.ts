import thunk from 'redux-thunk';
import { applyMiddleware, createStore, Store, compose } from 'redux';
import { AppState, rootReducer } from './rootReducer';
import { AppActions } from './appActions';

const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const configureAppStore = (): Store<AppState, AppActions> => {
  const store = createStore(rootReducer, enhancer);
  return store;
};

export default configureAppStore;
