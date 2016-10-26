import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import HTMLView from 'react-native-htmlview';

export default (replies) => {
  if (replies && replies.replies && replies.replies.replies) {
    return (<View>
      {replies.replies.replies.map(reply => (
        <HTMLView value={reply.body_html} key={reply.id} />
      ))}
    </View>);
  }
  return (<Text>
    Loading
  </Text>);
};
