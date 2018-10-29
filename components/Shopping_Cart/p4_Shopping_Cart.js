import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions} from 'react-native'
import Header from './Header'
import HeroImage from './Hero_Image'
import Body from './Body'

export default class ShoppingCart extends Component {
  
  render() {
    
    return (
      <View style={styles.container}>
          <Header />
          <HeroImage />
          <Body />
      </View>
    )
  }
}
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {      
      backgroundColor: '#fff',     
      height: deviceHeight * 1.62,
    }
});