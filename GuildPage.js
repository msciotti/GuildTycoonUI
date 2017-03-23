import React, { Component } from 'react';
import { View, ListView, Text, Navigator, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import GLOBAL from './Globals';

class GuildPage extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.route.data.chronicles)
    };
  }
  render(){
    return (
      <Image source={require('./images/pixelsky.jpg')} style={styles.backgroundImage}>
        <ListView contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </Image>
    );
  }

  renderRow(guildId){
    return (
      <TouchableOpacity style={styles.buttonBase} onPress={() => this.onPressSelectGuild(guildId)}>        
          <Text style={styles.text}>{guildId}</Text>        
      </TouchableOpacity>
    );
  }

  onPressSelectGuild(guildId){    
    var characterPage = require('./CharacterPage');
    fetch(`http://guildtycoon-api-dev.azurewebsites.net/GetGuild?guildId=${guildId}`, {
      method: 'GET',
      headers: {
        'Authorization': GLOBAL.token
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(JSON.stringify(data));
      GLOBAL.guild = data;
      this.props.navigator.push({
          component: characterPage
      });
    })
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
