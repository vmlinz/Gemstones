// @flow
import React from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
} from 'react-native';

const styles: Object = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

function renderRow(topic) {
  return (
    <View>
      <Text>
        {topic.title}
      </Text>
    </View>
  );
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
        style={styles.container}
        dataSource={topics}
        renderRow={renderRow}
      />
    );
  }
}

export default TopicsListView;
