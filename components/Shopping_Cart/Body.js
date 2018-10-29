import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'

export default class HeroImage extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.column1}>
                <Image style={styles.watch} source={require('./images/watch_1.jpg')}/>
            </View>
            <View style={styles.column2}>
                <Image style={styles.watch} source={require('./images/watch_2.jpg')}/>
            </View>
            <View style={styles.full}>
                <Image style={[styles.watch, styles.lastWatch]} source={require('./images/watch_3.jpg')}/>
            </View>

             <View style={styles.column2}>
                <Image style={styles.watch} source={require('./images/watch_4.jpg')}/>
            </View>
            <View style={styles.column1}>
                <Image style={styles.watch} source={require('./images/watch_5.jpg')}/>
            </View>
            <View style={styles.full}>
                <Image style={[styles.watch, styles.lastWatch]} source={require('./images/watch_6.jpg')}/>
            </View>

            <View style={styles.column1}>
                <Image style={styles.watch} source={require('./images/watch_1.jpg')}/>
            </View>
            <View style={styles.column2}>
                <Image style={styles.watch} source={require('./images/watch_2.jpg')}/>
            </View>
            <View style={styles.full}>
                <Image style={[styles.watch, styles.lastWatch]} source={require('./images/watch_3.jpg')}/>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: '#3b5998',
        width: Dimensions.get('window').width,
        height: 200,
    },
    column1: {
        flex: 1,
        padding: 5,
    },
    column2: {
        flex: 3,
        padding: 5
    },
    full: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    watch: {
        width: '100%',
        height: 100
    },
    lastWatch: {
        height: 100,
    }
});