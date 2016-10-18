import { combineReducers } from 'redux';
import configureStore from './create-store';

import rootSaga from '../sagas';
import { reducer as topicsReducer } from './topics-redux';

export default() => {
  const rootReducer = combineReducers({
    topics: topicsReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
