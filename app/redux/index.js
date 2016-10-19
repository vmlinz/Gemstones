import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';

import configureStore from './create-store';
import rootSaga from '../sagas';
import { reducer as topicsReducer } from './topics-redux';

export default() => {
  const rootReducer = combineReducers({
    navigation: NavigationReducer,
    topics: topicsReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
