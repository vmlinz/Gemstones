import {
  createRouter,
} from '@exponent/ex-navigation';

import Topics from '../containers/topics';
import About from '../containers/about';
import News from '../containers/news';
import TabNavigationLayout from './tab-navigation-layout';

export default createRouter(() => ({
  topics: () => Topics,
  about: () => About,
  news: () => News,
  tabNavigationLayout: () => TabNavigationLayout,
}));
