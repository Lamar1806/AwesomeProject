import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native'

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView 
        horizontal={true}
        pagingEnabled={true}
        style={styles.container}>

        <View style={styles.outer}>
            <Text style={styles.innerText}> Welcome to LCO app </Text>
        </View>
        <View style={[styles.outer, styles.green]}>
            <Text style={styles.innerText}> Best Quality Videos </Text>
        </View>
        <View style={[styles.outer, styles.red]}>
            <Text style={styles.innerText}> Welcome to league </Text>
        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {},
    outer:{
        backgroundColor: '#007bb6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    green:{
        backgroundColor: 'green',
    },
    red:{
        backgroundColor: 'red',
    },
    innerText:{
        fontSize: 25,
        color: '#fff',
    },
  });