import React from 'react';

import {
  View,
  Text,
} from 'react-native';

export default class News extends React.Component {
  static route = {
    navigationBar: {
      title: 'News',
    },
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>About</Text>
      </View>
    );
  }
}
