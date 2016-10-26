import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';

import configureStore from './create-store';
import rootSaga from '../sagas';
import { reducer as topicsReducer } from './topics-redux';
import { reducer as topicReducer } from './topic-redux';
import { reducer as repliesReducer } from './replies-redux';

export default() => {
  const rootReducer = combineReducers({
    navigation: NavigationReducer,
    topics: topicsReducer,
    topic: topicReducer,
    replies: repliesReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
