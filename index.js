import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './src/screens/home/home';
import Profile from './src/screens/profile/profile';
import Login from './src/screens/login/login';

const App = createStackNavigator({

  HomeScreen: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Welcome',
    },
  },

  LoginScreen: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },

  ProfileScreen: {
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Profile',
    },
  },

});

AppRegistry.registerComponent('sample_project', () => App);
