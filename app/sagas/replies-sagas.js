import { call, put } from 'redux-saga/effects';
import RepliesActions from '../redux/replies-redux';

export function* getRepliesById(api, action) {
  console.log(api, action);
  const { id, offset, limit } = action;
  const response = yield call(api.getRepliesByTopic, id, { offset, limit });

  if (response.status === 200) {
    yield put(RepliesActions.repliesSuccess(response.data.replies));
  }
}
