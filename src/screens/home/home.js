import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LoginScreen } from '../../../screenNames';

export default class App extends Component {
  render() {
    const { navigation } = this.props;
    return (

      <View style={styles.container}>

        <Text style={styles.header}>- WELCOME -</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate(LoginScreen);
          }}
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
