import React from 'react';
import { connect } from 'react-redux';

import {
  View,
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
    console.log(this.props);
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <TopicsListView topics={this.props.topics} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    topics: state.topics,
  };
};

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
