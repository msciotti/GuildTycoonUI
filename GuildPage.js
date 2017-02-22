import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

class GuildPage extends Component {
  constructor(props){
    super(props);
    this.state = {guildText: '1'}
  }
  render(){
    return (
      <View style={{flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 12}}>{this.getFirstGuildTest()}</Text>
      </View>
    );
  }

  getFirstGuildTest(){
    var guilds = this.props.route.guilds;
    var first = guilds[0];
    console.log(this.props.route.token);
    fetch(`http://guildmanager-dev.azurewebsites.net/GetGuild?guildId=${first}`, {headers: {'Authorization':`Bearer ${this.props.route.token}` }})
    .then(resp => resp.json())
    .then(data => {
      this.setState({guildText: JSON.stringify(data)});
    })
    console.error(this.state.guildText);
    return this.state.guildText;
  }
}

module.exports = GuildPage;
