import React, { Component } from 'react';
import { AppRegistry, YellowBox, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import login from '../login/login';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Nav = createStackNavigator({
  login: { screen: login },
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
});

export default class App extends Component {
    loginPage = () => {
      this.props.navigation.navigate('login');
    }

    render() {
      return (

        <View style={styles.container}>

          <Text style={styles.header}>- WELCOME -</Text>

          <TouchableOpacity
            style={styles.btn}
            onPress={this.loginPage}
          >
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
          >
            <Text>Signup</Text>
          </TouchableOpacity>

        </View>

      );
    }
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold',
  },

});

AppRegistry.registerComponent('sample_project', () => App);
