import React from 'react';
import { Platform, StatusBar, StyleSheet, View, ScrollView, Text, Button, Dimensions } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import Horizontal from './components/p1_Horizontal';
import Login from './components/p3_login';
import ShoppingCart from './components/Shopping_Cart/p4_Shopping_Cart';
import Instagram from './components/p_5_Instagram/Instagram'


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  pressed = ()=> {
    return 'pressed';
  }
  render() {
    const deviceHeight = Dimensions.get('window').height;
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}> 
          {/* <ScrollView style={{flex: 1,height: deviceHeight}}> */}
            {/* <Horizontal /> */}
            {/* <Login /> */}
            {/* <ShoppingCart /> */}
            <Instagram />
          {/* </ScrollView> */}
        </View>
      );
    }
  }


  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myText: {
    color: '#c1c1c1'
  },
});
