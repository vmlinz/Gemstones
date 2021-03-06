import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import Reactotron from 'reactotron-react-native';
import devTools from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';
import R from 'ramda';
import { createNavigationEnabledStore } from '@exponent/ex-navigation';

import config from '../config/debug-settings';
import { StartupTypes } from './startup-redux';

export default (rootReducer, rootSaga) => {
  // redux
  const middlewares = [];
  const enhancers = [];

  // - saga
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  // - logger
  const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE'];
  if (process.env.NODE_ENV === 'development') {
    const USE_LOGGING = config.reduxLogging;

    const logger = createLogger({
      predicate: (getState, { type }) =>
        USE_LOGGING && R.not(R.contains(type, SAGA_LOGGING_BLACKLIST)),
    });
    middlewares.push(logger);
  }

  // - reactotron
  if (process.env.NODE_ENV === 'development') {
    const createReactotronEnhancer = require('reactotron-redux');

    const reactotronEnhancer = createReactotronEnhancer(Reactotron, {
      isActionImportant: action =>
        action.type === StartupTypes.STARTUP,
      except: [...SAGA_LOGGING_BLACKLIST],
    });

    enhancers.push(reactotronEnhancer);
  }

  // - remote-redux-devtools
  // if (process.env.NODE_ENV === 'development') {
  //   const devToolsEnhancer = devTools({ realtime: true, hostname: 'localhost', port: 8000 });
  //   enhancers.push(devToolsEnhancer);
  // }

  // - enhancers
  enhancers.push(applyMiddleware(...middlewares));

  // - navigation store creator
  const createStoreWithNavigation = createNavigationEnabledStore({
    createStore,
    navigationStateKey: 'navigation',
  });

  const store = createStoreWithNavigation(rootReducer, compose(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
};
