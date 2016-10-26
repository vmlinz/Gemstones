import React from 'react';
import { Text } from 'react-native';

import HTMLView from 'react-native-htmlview';

export default (topic) => {
  if (topic && topic.topic && topic.topic.topic) {
    return <HTMLView value={topic.topic.topic.body_html} />;
  }
  return (<Text>
    Loading
  </Text>);
};
