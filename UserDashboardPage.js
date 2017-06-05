import React, { Component } from 'react';
import { Text, Navigator, TouchableOpacity, StyleSheet, Image, Dimensions, View } from 'react-native';
import GLOBAL from './Globals';

class UserDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedGuildId: GLOBAL.userInfo.guild1Id
    };
  }
  render(){
    return (
      <Image source={require('./images/pixelsky.jpg')} style={styles.backgroundImage}>
        <View style={styles.adventureBoard}>
          <Text style={styles.adventureBoardHeading}>
            Adventure Board{'\n'}{'\n'}
            {this.state.selectedGuildId}
          </Text>
          <TouchableOpacity style={styles.manageGuildButton} onPress={() => this.manageGuild()}>
            <Text style={styles.text}>Manage Guild</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.guildSelector}>
          <TouchableOpacity style={styles.buttonBase} onPress={() => this.selectGuild(GLOBAL.userInfo.guild1Id)}>        
            <Text style={styles.text}>{GLOBAL.userInfo.guild1Name}</Text>        
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBase} onPress={() => this.selectGuild(GLOBAL.userInfo.guild2Id)}>        
            <Text style={styles.text}>{GLOBAL.userInfo.guild2Name}</Text>        
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBase} onPress={() => this.selectGuild(GLOBAL.userInfo.guild3Id)}>        
            <Text style={styles.text}>{GLOBAL.userInfo.guild3Name}</Text>        
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBase} onPress={() => this.selectGuild(GLOBAL.userInfo.guild4Id)}>        
            <Text style={styles.text}>{GLOBAL.userInfo.guild4Name}</Text>        
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBase} onPress={() => this.selectGuild(GLOBAL.userInfo.guild5Id)}>        
            <Text style={styles.text}>{GLOBAL.userInfo.guild5Name}</Text>        
          </TouchableOpacity>
        </View>
      </Image>
    );
  }  

  selectGuild(guildId){
    this.setState({ selectedGuildId: guildId });
  }

  async manageGuild(){
    var characterPage = require('./CharacterPage');
    var response = await fetch(`http://guildtycoon-api-dev.azurewebsites.net/User/Guild/${this.state.selectedGuildId}`, { method: 'GET', headers: { 'Authorization': GLOBAL.token } });
    var json = await response.json();    
    GLOBAL.currentGuild = json;
    this.props.navigator.push({ component: characterPage });
  }    
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex: 1,
    flexDirection: 'column',
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
    backgroundColor: 'blue',    
    alignItems: 'center'
  },

  manageGuildButton:{
    backgroundColor: 'blue',    
    alignItems: 'center'
  },

  text:{
    color:'white'
  },

  adventureBoard:{    
    backgroundColor: '#8e5313',
    height: Dimensions.get('window').height * .75,
    margin: 10,
    flexDirection: 'column'
  },

  adventureBoardHeading:{
    color:'white',
    textAlign: 'center'
  }
});

module.exports = UserDashboard;
