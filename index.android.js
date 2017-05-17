import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './AppNavigator';

class App extends Component {
  render(){
    return( <AppNavigator /> );
  }  
}

AppRegistry.registerComponent('GuildTycoonUI', () => App);
