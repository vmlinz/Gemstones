import { put, select } from 'redux-saga/effects';

import TopicsActions from '../redux/topics-redux';

export const selectTopics = state => state.topics.topics;

export function* startup(action) {
  console.log('startup');
  const topics = yield select(selectTopics);
  console.log(topics);

  if (topics == null) {
    console.log('null');
    yield put(TopicsActions.topicsRequest());
  }
}
