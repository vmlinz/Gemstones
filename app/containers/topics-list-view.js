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

function renderRow(row) {
  return (
    <View>
      <Text>
        {row}
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
    console.log(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.topics = ds.cloneWithRows(props.topics);
  }
  topics: any[];

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.topics}
        renderRow={renderRow}
      />
    );
  }
}

export default TopicsListView;
