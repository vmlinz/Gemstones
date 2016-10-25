// @flow
import React from 'react';
import {
  ListView,
  StyleSheet,
} from 'react-native';
import { withNavigation } from '@exponent/ex-navigation';

import Topic from '../components/topics-list-view-item';

const styles: Object = StyleSheet.create({
  topicsListView: {
    marginTop: 0,
  },
});

const gotoTopicDetails = (navigator, topic) => {
  console.log(topic);
  navigator.push('topic', { id: topic.id, title: topic.title });
};

const renderRow = navigator => topic => (
  <Topic topic={topic} onPress={() => { gotoTopicDetails(navigator, topic); }} />
);

type TypeProps = {
  topics: any[],
  navigator: Object,
}

@withNavigation
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
        renderRow={renderRow(this.props.navigator)}
      />
    );
  }
}

export default TopicsListView;
