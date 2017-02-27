import React, { Component } from 'react';
import { View, ListView, Text, Navigator, Button } from 'react-native';
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
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }

  renderRow(guildId){
    return (
      <Button onPress={() => this.onPressSelectGuild(guildId)} color="blue" title={guildId} />
    );
  }

  onPressSelectGuild(guildId){
    var characterPage = require('./CharacterPage');
    fetch(`http://guildmanager-dev.azurewebsites.net/GetGuild?guildId=${guildId}`, {
      method: 'GET',
      headers: {
        'Authorization': GLOBAL.token
      }
    })
    .then(response => response.json())
    .then(data => {
      GLOBAL.PLAYER_CONTEXT = data;
      this.props.navigator.push({
          component: characterPage,
          characters: data.characters,
        })
    })
  }    
}

module.exports = GuildPage;
