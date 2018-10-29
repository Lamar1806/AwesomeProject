import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, StyleSheet, Dimensions } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <ImageBackground style={styles.headerBg} source={require('./images/hero.jpg')}>
        <View style={styles.headerContainer}>
          <View style={styles.profilePicContainer}> 
            <Image 
              style={styles.myPic}
              source={require('./images/watch_1.jpg')}
            /> 
          </View>
        </View>
        
      </ImageBackground>
    )
  }
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    headerBg: {
        flex: 1,
        width: null,
        // alignSelf: 'stretch', 
    },
    headerContainer:{

    },
    profilePicContainer: {

    },
    myPic: {

    }
});