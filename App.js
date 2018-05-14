import React, { Component } from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import { createStackNavigator  } from 'react-navigation';
import Root from './src/main';
import login from './src/screens/login/login';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Application = createStackNavigator({
  Home: { screen: login },
}, {
  navigationOptions: {
    header: false,
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
