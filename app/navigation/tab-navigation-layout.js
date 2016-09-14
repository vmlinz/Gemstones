// @flow
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../config/colors';
import Router from './router';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: Colors.navigationBarTintColor,
    backgroundColor: Colors.navigationBarBackgroundColor,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitleText: {
    fontSize: 12,
  },
});

export default class TabNavigationLayout extends React.Component {
  render() {
    return (
      <TabNavigation
        tabBarColor={Colors.tabBar}
        tabBarHeight={56}
        initialTab="topics"
      >
        <TabNavigationItem
          id="topics"
          renderIcon={isSelected => this._renderIcon('Topics', 'ios-compass-outline', isSelected)}
        >
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('topics')}
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="news"
          renderIcon={isSelected => this._renderIcon('News', 'ios-person-outline', isSelected)}
        >
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('news')}
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="about"
          renderIcon={isSelected => this._renderIcon('About', 'ios-person-outline', isSelected)}
        >
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('about')}
          />
        </TabNavigationItem>
      </TabNavigation>
    );
  }

  _renderIcon(title: string, iconName: string, isSelected: bool) {
    const color = isSelected ? Colors.tabIconSelected : Colors.tabIconDefault;

    return (
      <View style={styles.tabItemContainer}>
        <Ionicons name={iconName} size={32} color={color} />

        <Text style={[styles.tabTitleText, { color }]} numberOfLines={1}>
          {title}
        </Text>
      </View>
    );
  }
}
