import { put, select } from 'redux-saga/effects';

import TopicsActions from '../redux/topics-redux';

export const selectTopics = state => state.topics.topics;

export function* startup() {
  const topics = yield select(selectTopics);

  if (topics == null) {
    yield put(TopicsActions.topicsRequest());
  }
}
