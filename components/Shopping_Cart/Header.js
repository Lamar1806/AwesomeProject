import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Image style={styles.logo} source={require('./images/cart_icon.png')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row', 
        backgroundColor: 'gray',
        alignItems: 'stretch',
        // justifyContent: 'center',
    },

    logo: {
        // marginTop: 50,
        width: 32,
        height: 32
    }
});