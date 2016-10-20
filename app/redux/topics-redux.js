import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// # types and action creators
const { Types, Creators } = createActions({
  topicsRequest: null,
  topicsSuccess: ['topics'],
  topicsFailure: null,
});

export const TopicsTypes = Types;
export default Creators;

// # initial state
export const INITIAL_STATE = Immutable.from({
  fetching: null,
  topics: null,
  error: null,
});

// # reducers
// - request topics
export const request = state =>
  state.merge({ fetching: true });

// - success
export const success = (state, action) => {
  const { topics } = action;
  return state.merge({ fetching: false, error: null, topics });
};

// - failure
export const failure = state =>
  state.merge({ fetching: false, error: true, topics: null });

// # create reducers
export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOPICS_REQUEST]: request,
  [Types.TOPICS_SUCCESS]: success,
  [Types.TOPICS_FAILURE]: failure,
});
