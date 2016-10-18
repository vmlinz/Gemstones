import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import Reactotron from 'reactotron-react-native'
import createSagaMiddleware from 'redux-saga';
import R from 'ramda';

import config from '../config/debug-settings';
import { StartupTypes } from './startup-redux';

export default (rootReducer, rootSaga) => {
  // redux
  const middlewares = [];
  const enhancers = [];

  // saga
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  // logger
  const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE'];
  if (__DEV__) {
    const USE_LOGGING = config.reduxLogging;

    const logger = createLogger({
      predicate: (getState, { type }) =>
        USE_LOGGING && R.not(R.contains(type, SAGA_LOGGING_BLACKLIST)),
    });
    middlewares.push(logger);
  }

  // reactotron
  if (__DEV__) {
    const createReactotronEnhancer = require('reactotron-redux');

    const reactotronEnhancer = createReactotronEnhancer(Reactotron, {
      isActionImportant: action =>
        action.type === StartupTypes.STARTUP,
      except: [...SAGA_LOGGING_BLACKLIST],
    })

    enhancers.push(reactotronEnhancer);
  }

  // enhancers
  enhancers.push(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, compose(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
};
