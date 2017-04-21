import React, { Component } from 'react';
import { Text, Navigator, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import GLOBAL from './Globals';

class UserDashboard extends Component {
  render(){
    return (
      <Image source={require('./images/pixelsky.jpg')} style={styles.backgroundImage}>
        <TouchableOpacity style={styles.buttonBase} onPress={() => this.onPressSelectguild(GLOBAL.userInfo.guild1Id)}>        
          <Text style={styles.text}>{GLOBAL.userInfo.guild1Name}</Text>        
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBase} onPress={() => this.onPressSelectguild(GLOBAL.userInfo.guild2Id)}>        
          <Text style={styles.text}>{GLOBAL.userInfo.guild2Name}</Text>        
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBase} onPress={() => this.onPressSelectguild(GLOBAL.userInfo.guild3Id)}>        
          <Text style={styles.text}>{GLOBAL.userInfo.guild3Name}</Text>        
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBase} onPress={() => this.onPressSelectguild(GLOBAL.userInfo.guild4Id)}>        
          <Text style={styles.text}>{GLOBAL.userInfo.guild4Name}</Text>        
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBase} onPress={() => this.onPressSelectguild(GLOBAL.userInfo.guild5Id)}>        
          <Text style={styles.text}>{GLOBAL.userInfo.guild5Name}</Text>        
        </TouchableOpacity>
      </Image>
    );
  }  

  async onPressSelectguild(guildId){    
    var characterPage = require('./CharacterPage');
    var response = await fetch(`http://guildtycoon-api-dev.azurewebsites.net/GetGuild?guildId=${guildId}`, { method: 'GET', headers: { 'Authorization': GLOBAL.token } });
    var json = await response.json();
    GLOBAL.currentguild = json;
    this.props.navigator.push({ component: characterPage });
  }    
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover'
  },

  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  buttonBase:{
    backgroundColor: 'brown',    
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  text:{
    color:'white'
  }
});

module.exports = UserDashboard;
