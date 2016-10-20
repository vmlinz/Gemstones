import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';

if (__DEV__) {
  Reactotron
    .configure({ name: 'Gemstones' })
    .use(trackGlobalErrors({
      veto: frame => frame.fileName.indexOf('/node_modules/react-native/') >= 0,
    }))
    .connect();
}
