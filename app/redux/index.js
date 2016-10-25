import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';

import configureStore from './create-store';
import rootSaga from '../sagas';
import { reducer as topicsReducer } from './topics-redux';
import { reducer as topicReducer } from './topic-redux';

export default() => {
  const rootReducer = combineReducers({
    navigation: NavigationReducer,
    topics: topicsReducer,
    topic: topicReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
