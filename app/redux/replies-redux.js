import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// # types and action creators
const { Types, Creators } = createActions({
  repliesRequest: ['id', 'offset', 'limit'],
  repliesSuccess: ['replies'],
  repliesFailure: null,
});

export const RepliesTypes = Types;
export default Creators;

// # initial state
export const INITIAL_STATE = Immutable.from({
  fetching: null,
  replies: null,
  error: null,
});

// # reducers
const request = state =>
  state.merge({ fetching: true });

const success = (state, action) =>
  state.merge({ fetching: false, replies: action.replies });

const failure = state =>
  state.merge({ fetching: false, error: true });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REPLIES_REQUEST]: request,
  [Types.REPLIES_SUCCESS]: success,
  [Types.REPLIES_FAILURE]: failure,
});
