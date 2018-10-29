import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Header from './Header'

export default class Instagram extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        {/* <Text> textInComponent </Text> */}
      </View>
    )
  }
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: '50%'
    },

});