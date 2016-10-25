import { takeLatest } from 'redux-saga';
import * as api from '../services/ruby-china';

// # types
import { StartupTypes } from '../redux/startup-redux';
import { TopicsTypes } from '../redux/topics-redux';
import { TopicTypes } from '../redux/topic-redux';

// # sagas
import { startup } from './startup-sagas';
import { getTopics } from './topics-sagas';
import { getTopicById } from './topic-sagas';

export default function* root() {
  yield [
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(TopicsTypes.TOPICS_REQUEST, getTopics, api),
    takeLatest(TopicTypes.TOPIC_REQUEST, getTopicById, api),
  ];
}
