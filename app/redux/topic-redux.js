import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// # types and action creators
const { Types, Creators } = createActions({
  topicRequest: ['id'],
  topicSuccess: ['topic'],
  topicFailure: null,
});

export const TopicTypes = Types;
export default Creators;

// # inital state
export const INITIAL_STATE = Immutable.from({
  fetching: null,
  topic: null,
  error: null,
});

// # reducers
// - request
const request = state =>
  state.merge({ fetching: true });

// - success
const success = (state, action) =>
  state.merge({ fetching: false, topic: action.topic });

// - failure
const failure = state =>
  state.merge({ fetching: false, error: true });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOPIC_REQUEST]: request,
  [Types.TOPIC_SUCCESS]: success,
  [Types.TOPIC_FAILURE]: failure,
});
