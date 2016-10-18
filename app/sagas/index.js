import { takeLatest } from 'redux-saga';
import * as api from '../services/ruby-china';

// # types
import { StartupTypes } from '../redux/startup-redux';
import { TopicsTypes } from '../redux/topics-redux';

// # sagas
import { startup } from './startup-sagas';
import { getTopics } from './topics-sagas';

export default function* root() {
  yield [
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(TopicsTypes.TOPICS_REQUEST, getTopics, api),
  ];
}
