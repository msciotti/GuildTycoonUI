import React, { Component } from 'react';
import { Text, Navigator, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import GLOBAL from './Globals';

class GuildPage extends Component {
  async componentWillMount(){    
    await this.getUserData();    
  }

  render(){    
    return (
      <Image source={require('./images/pixelsky.jpg')} style={styles.backgroundImage}>
        <TouchableOpacity style={styles.buttonBase} onPress={() => this.onPressSelectGuild(GLOBAL.userInfo.Guild1Id)}>        
          <Text style={styles.text}>{GLOBAL.userInfo.Guild1Name || ''}</Text>        
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBase} onPress={() => this.onPressSelectGuild(GLOBAL.userInfo.Guild2Id)}>        
          <Text style={styles.text}>{GLOBAL.userInfo.Guild2Name || ''}</Text>        
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBase} onPress={() => this.onPressSelectGuild(GLOBAL.userInfo.Guild3Id)}>        
          <Text style={styles.text}>{GLOBAL.userInfo.Guild3Name || ''}</Text>        
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBase} onPress={() => this.onPressSelectGuild(GLOBAL.userInfo.Guild4Id)}>        
          <Text style={styles.text}>{GLOBAL.userInfo.Guild4Name || ''}</Text>        
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBase} onPress={() => this.onPressSelectGuild(GLOBAL.userInfo.Guild5Id)}>        
          <Text style={styles.text}>{GLOBAL.userInfo.Guild5Name || ''}</Text>        
        </TouchableOpacity>
      </Image>
    );
  }  

  async getUserData(){
    var response = await fetch(`http://guildtycoon-api-dev.azurewebsites.net/GetUser`, { method: 'GET', headers: { 'Authorization': GLOBAL.token } });
    var json = await response.json();
    GLOBAL.userInfo = json;
  }

  async onPressSelectGuild(guildId){    
    var characterPage = require('./CharacterPage');
    var response = await fetch(`http://guildtycoon-api-dev.azurewebsites.net/GetGuild?guildId=${guildId}`, { method: 'GET', headers: { 'Authorization': GLOBAL.token } });
    var json = await response.json();
    GLOBAL.currentGuild = json;
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

module.exports = GuildPage;
