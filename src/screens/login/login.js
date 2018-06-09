import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  YellowBox,
  ToastAndroid,
} from 'react-native';
import { ProfileScreen } from '../../../screenNames';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class login extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

        <View style={styles.container}>

          <Text style={styles.header}>- LOGIN TidyMaster -</Text>

          <TextInput
            style={styles.textInput} placeholder='Username'
            onChangeText={(username) => this.setState({ username })}
            underlineColorAndroid='transparent'
          />

          <TextInput
            style={styles.textInput} placeholder='Password'
            onChangeText={(password) => this.setState({ password })}
            underlineColorAndroid='transparent'
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              sendPost('http://192.168.8.105:3000/login', { username: this.state.username, password: this.state.password }).then((resp) => {
                if (resp.state) {
                  navigation.navigate(ProfileScreen);
                } else {
                  ToastAndroid.show(resp.msg, ToastAndroid.SHORT);
                }
              }).catch((error) => {
                console.error(error);
              });
            }}
          >
            <Text>Login</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    );
  }
}

function sendPost(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}

const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
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
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
  },

});
