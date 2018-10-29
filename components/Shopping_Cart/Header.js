import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Image style={styles.logo} source={require('./images/cart_icon.png')}/>
                <Text style={styles.title}>LCO Shopping Cart</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        height: 80,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 4,
        borderBottomColor: '#ccc',
        width: Dimensions.get('window').width,
    },
    logo: {
        // marginTop: 50,
        width: 40,
        height: 40,
    },
    title: {
        marginLeft: 10,
        color: '#c1c1c1',
        fontWeight: 'bold',
        fontSize: 15,
        fontStyle: 'italic',
    }
});