// @flow
import axios from 'axios';

import {
  RUBY_CHINA_API_BASE_URL,
  RUBY_CHINA_ACCESS_TOKEN,
} from '../config/constants';

const defaultParams = {
  access_token: RUBY_CHINA_ACCESS_TOKEN,
};

const instance = axios.create({
  baseURL: RUBY_CHINA_API_BASE_URL,
  timeout: 1000,
  params: { ...defaultParams },
});

const NODES_ENDPOINT = '/nodes';
const TOPICS_ENDPOINT = '/topics';

// https://ruby-china.org/api/v3/nodes
export function getNodes() {
  return instance.get(NODES_ENDPOINT);
}

// https://ruby-china.org/api/v3/topics
export function getTopics() {
  return instance.get(TOPICS_ENDPOINT);
}

// https://ruby-china.org/api/v3/topics/31032
export function getTopicById(topicId: number) {
  return instance.get(`${TOPICS_ENDPOINT}/${topicId}`);
}

type TypeTopics = {
  offset: number,
  limit: number,
  type: "last_actived"
    | "recent"
    | "no_reply"
    | "popular"
    | "excellent",
};
// https://ruby-china.org/api/v3/topics?type=excellent
export function getTopicsByType(params: TypeTopics) {
  return instance.get(TOPICS_ENDPOINT, {
    params: {
      ...defaultParams,
      ...params,
    },
  });
}

type TypeTopicsByNode = {
  offset: number,
  limit: number,
  node_id: number,
};
// https://ruby-china.org/api/v3/topics?node_id=46
export function getTopicsByNode(params: TypeTopicsByNode) {
  return instance.get(TOPICS_ENDPOINT, {
    params: {
      ...defaultParams,
      ...params,
    },
  });
}

type TypeParams = {
  offset: number,
  limit: number,
};
// https://ruby-china.org/api/v3/topics/31032/replies
export function getRepliesByTopic(topicId: number, params: TypeParams) {
  return instance.get(`${TOPICS_ENDPOINT}/${topicId}/replies`, {
    params: {
      ...defaultParams,
      ...params,
    },
  });
}
