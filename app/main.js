import React from 'react';

import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import { Provider as ReduxProvider } from 'react-redux';

import './config/reactotron-config';
import router from './navigation/router';
import createStore from './redux';

const store = createStore();

const navigationContext = new NavigationContext({
  router,
  store,
});

export default () => (
/**
  * NavigationProvider is only needed at the top level of the app,
  * similar to react-redux's Provider component. It passes down
  * navigation objects and functions through context to children.
  *
  * StackNavigation represents a single stack of screens, you can
  * think of a stack like a stack of playing cards, and each time
  * you add a screen it slides in on top. Stacks can contain
  * other stacks, for example if you have a tab bar, each of the
  * tabs has its own individual stack. This is where the playing
  * card analogy falls apart, but it's still useful when thinking
  * of individual stacks.
  */
  <ReduxProvider store={store}>
    <NavigationProvider context={navigationContext}>
      <StackNavigation initialRoute={router.getRoute('tabNavigationLayout')} />
    </NavigationProvider>
  </ReduxProvider>
);
