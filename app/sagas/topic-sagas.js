import { call, put } from 'redux-saga/effects';
import TopicActions from '../redux/topic-redux';

export function* getTopicById(api, action) {
  console.log(api, action);
  const response = yield call(api.getTopicById, action.id);

  if (response.status === 200) {
    yield put(TopicActions.topicSuccess(response.data.topic));
  }
}
