import { createActions } from 'reduxsauce';

// types and action creators
const { Types, Creators } = createActions({
  startup: null,
});

export const StartupTypes = Types;
export default Creators;
