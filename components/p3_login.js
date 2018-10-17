import React, { Component } from 'react'
import { Text, Image, View, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native'
import { white } from 'ansi-colors';

export default class Login extends Component {
    state = {
        text: '',
        password: '',
    };
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.logocontainer}>
                {/* <Image source={gease}/> */}
                <Image 
                    style={styles.logo}
                    source={require('./images/arrow_green.png')}/>
                    <Text style={styles.whiteTxt}>A Simple Login App</Text>
            </View>
            <KeyboardAvoidingView behavior="padding" style={styles.myForm}>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(text) => this.setState({text})}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({text})}
                />
                <TouchableOpacity style={styles.buttonContainer}> 
                    <Text style={styles.buttonTxt}>Login</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#000',
        alignItems: 'center',
        // justifyContent: 'center',
        // width: Dimensions.get('window').width,
    },
    logocontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100 ,
        height: 100,
    },
    myForm: {
        flex: 1,
        width: 300,
    },
    whiteTxt: {
        color: 'white',
    },
    input: {
        height: 40, 
        color: 'white',
        backgroundColor: 'rgba(255,255,255, 0.05)',
        paddingLeft: 10,
        marginBottom: 15
    },
    buttonContainer: {        
        backgroundColor: '#27ae60',
        paddingVertical: 15
    },
    buttonTxt: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    }
});
