import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native'
// import HeroText from './Hero_Text'

export default class HeroImage extends Component {
  render() {
    return (
        // <ImageBackground style={styles.hero} source={require('./images/hero.jpg')}> <HeroText /> </ImageBackground>
        <Image source={{uri: './images/hero.jpg'}} style={{width: 40, height: 40}} />
    )
  }
}

const styles = StyleSheet.create({
    hero: {
        width: Dimensions.get('window').width,
        height: 200,
    },
});