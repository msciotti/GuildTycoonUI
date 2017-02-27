import React, { Component } from 'react';
import { View, ListView, Text, Navigator, Image, StyleSheet } from 'react-native';

class SingleCharacterPage extends Component {  
  render(){
    var stats = this.props.route.character.stats.base;
    return (
      <View style={styles.charSheet}>
        <View>
          <View style={styles.square}><Text>HEAD</Text></View>
          <View style={styles.square}><Text>SHOULDERS</Text></View>
          <View style={styles.square}><Text>CHEST</Text></View>
          <View style={styles.square}><Text>LEGS</Text></View>
          <View style={styles.square}><Text>WAIST</Text></View>
          <View style={styles.square}><Text>FEET</Text></View>
        </View>
        <View>
          <View style={styles.square}><Text>NECK</Text></View>
          <View style={styles.square}><Text>RING</Text></View>
          <View style={styles.square}><Text>RING</Text></View>
          <View style={styles.square}><Text>CHARM</Text></View>
          <View style={styles.square}><Text>MAINHAND</Text></View>
          <View style={styles.square}><Text>OFFHAND</Text></View>
        </View>      
      </View>
    );
  }  
}

var styles = StyleSheet.create({
  square: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5
  },  
  charSheet: {
    flex:1, 
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: 'black'
  }
})

module.exports = SingleCharacterPage;