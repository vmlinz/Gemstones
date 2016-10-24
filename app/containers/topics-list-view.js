// @flow
import React from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
} from 'react-native';

import Topic from './topics-list-view-item';

const styles: Object = StyleSheet.create({
  topicsListView: {
    marginTop: 20,
  },
});

function renderRow(topic) {
  return (<Topic topic={topic} />);
}

type TypeProps = {
  topics: any[],
}
class TopicsListView extends React.Component {
  constructor(props: TypeProps) {
    super(props);
    this.dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }
  dataSource: any;

  render() {
    const topics = this.dataSource.cloneWithRows(this.props.topics);
    return (
      <ListView
        style={styles.topicsListView}
        dataSource={topics}
        renderRow={renderRow}
      />
    );
  }
}

export default TopicsListView;
