import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import TopicBody from '../components/topic-body';
import TopicReplies from '../components/topic-replies';

import TopicActions from '../redux/topic-redux';
import RepliesActions from '../redux/replies-redux';

type TypeProps = {
  route: Object,
  topic: Object,
  replies: Object,
  topicRequest: Function,
  repliesRequest: Function,
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
    const { topicRequest, repliesRequest } = this.props;
    const { id } = this.props.route.params;

    topicRequest(id);
    repliesRequest(id, 0, 25);
  }

  props: TypeProps;

  render() {
    const { topic, replies } = this.props;
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ScrollView style={{ padding: 8 }}>
          <TopicBody topic={topic} />
          <TopicReplies replies={replies} />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  topic: state.topic,
  replies: state.replies,
});

const mapDispatchToProps = dispatch => ({
  topicRequest: id => dispatch(TopicActions.topicRequest(id)),
  repliesRequest: (id, offset, limit) =>
    dispatch(RepliesActions.repliesRequest(id, offset, limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
