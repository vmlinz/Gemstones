import React from 'react';

import {
  View,
  Text,
} from 'react-native';

export default class TopicDetails extends React.Component {
  static route = {
    navigationBar: {
      title: 'TopicDetails',
    },
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>Topic Details</Text>
      </View>
    );
  }
}
