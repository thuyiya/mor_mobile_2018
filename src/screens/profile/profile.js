import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class profile extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.text}>Welcome as member</Text>
                
      </View>
    
    );
  }
}

const styles = StyleSheet.create({

  text: {
    color: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40,
  },
});
