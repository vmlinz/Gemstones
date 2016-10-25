import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Text,
} from 'react-native';

const styles: Object = StyleSheet.create({
  topicContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 4,
    marginRight: 4,
    padding: 4,
    borderColor: 'lightgray',
  },
  avartarImage: {
    height: 48,
    width: 48,
  },
  topicInfoContainer: {
    flex: 1,
    width: 300,
  },
  topicTextWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  topicTitle: {
    color: 'black',
    flexWrap: 'wrap',
  },
  topicDescription: {
    color: 'gray',
  },
});

export default ({ topic, onPress }: { topic: Object }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.topicContainer}>
      <Image
        style={styles.avartarImage}
        source={{ uri: topic.user.avatar_url }}
      />
      <View style={styles.topicInfoContainer}>
        <View style={styles.topicTextWrapper}>
          <Text style={styles.topicTitle} numberOfLines={2}>
            {topic.title}
          </Text>
          <Text style={styles.topicDescription} numberOfLines={1}>
            {topic.node_name}
          </Text>
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
);
