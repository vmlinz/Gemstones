import React from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text,
} from 'react-native';

import TopicsListView from './topics-list-view';
import StartupActions from '../redux/startup-redux';

type TypeProps = {
  topics: any[],
  startup: Function,
}
class Topics extends React.Component {
  static route = {
    navigationBar: {
      title: 'Topics',
    },
  }

  componentDidMount() {
    if (this.props.topics.topics === null) {
      this.props.startup();
    }
  }

  props: TypeProps;

  render() {
    const { topics } = this.props;
    if (topics && topics.topics) {
      console.log(topics.topics);
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <TopicsListView topics={this.props.topics.topics} />
        </View>
      );
    }

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>Loading topics</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topics: state.topics,
  };
};

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
