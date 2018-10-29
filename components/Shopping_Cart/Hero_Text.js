import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class HeroText extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Text style={styles.heroText}> Watches </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    heroText: {
        //IOS standards
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 3,
        borderRadius: 10,

        elevation: 1, //all thats needed for andriod
        alignSelf: 'center',
        fontSize: 25,
        color: '#292929',
        textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: 10,
    }
});