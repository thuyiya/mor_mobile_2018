import React, { Component } from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import home from './src/screens/home/home';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Application = createStackNavigator({
  Home: { screen: home },
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
});

export default class App extends Component {
  render() {
    return (
      <Application />
    );
  }
}

AppRegistry.registerComponent('sample_project', () => App);
