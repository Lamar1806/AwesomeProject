import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Button } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class TempClassName extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  pressed = ()=> {
      return 'bob'
  }
  render() {
      return (
      <View style={styles.container}> 
        <Text>Would you like to continue</Text>
        <Button title='submit' onPress={()=>this.pressed.bind(this)}/>
      </View>
      );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myText: {
    color: '#c1c1c1'
  },
});
