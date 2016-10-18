import { call, put } from 'redux-saga/effects';
import TopicsActions from '../redux/topics-redux';

export function* getTopics(api) {
  const response = yield call(api.getTopics);

  if (response.status === 200) {
    yield put(TopicsActions.topicsSuccess(response.data.topics));
  }
}
