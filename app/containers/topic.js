import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  WebView,
} from 'react-native';

import HTMLView from 'react-native-htmlview';

import TopicActions from '../redux/topic-redux';

type TypeProps = {
  route: Object,
  topic: Object,
  topicRequest: Function,
};

class Topic extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        return params.title;
      },
    },
  }

  componentDidMount() {
    // extract node_id and topicRequest
    const { topicRequest } = this.props;
    const { id } = this.props.route.params;

    topicRequest(id);
  }

  props: TypeProps;

  render() {
    const { topic } = this.props;
    if (topic && topic.topic) {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <ScrollView style={{ padding: 8 }}>
            <HTMLView value={topic.topic.body_html} />
          </ScrollView>
        </View>
      );
    }

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>Loading</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  topic: state.topic,
});

const mapDispatchToProps = dispatch => ({
  topicRequest: id => dispatch(TopicActions.topicRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
