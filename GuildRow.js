import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import BackgroundImage from './LoginPage';
import GLOBAL from './Globals';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

class GuildSelectButton extends Component{
  render(){
    return (
        <Button onPress={() => this.onPressSelectGuild({this.props.children})} color="blue" title={this.props.children} />
    );
  }

  onPressSelectGuild = (guildId) => {
    fetch(`http://guildmanager-dev.azurewebsites.net/GetGuild?${this.props.children}`, {
      method: 'GET',
      headers: {
        'Authorization': GLOBAL.token
      }
    })
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)))
  }
}

const GuildRow = (props) => (
  <View style={styles.container}>
    <GuildSelectButton>
      {props.itemId}
    </GuildSelectButton>
  </View>
);

module.exports = GuildRow;