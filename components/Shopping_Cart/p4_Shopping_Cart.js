import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Header from './Header'

export default class ShoppingCart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      // backgroundColor: 'black'
    }
});