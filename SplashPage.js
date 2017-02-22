import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

class SplashPage extends Component{  
  render(){
    return (
      <View style={{flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 32}}>O Shit Waddup</Text>
      </View>
    );
  }
}

module.exports = SplashPage;
