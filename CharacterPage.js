import React, { Component } from 'react';
import { View, ListView, Text, Navigator, Button, StyleSheet } from 'react-native';

class CharacterPage extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.route.characters)
    };
  }
  render(){
    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
  renderRow(character){
    return (
      <Button style={styles.item} onPress={() => this.onPressSelectCharacter(character)} title={character.unitId} />
    );
  }

  onPressSelectCharacter(character){
  	var singleCharacterPage = require('./SingleCharacterPage');
  	this.props.navigator.push({
      component: singleCharacterPage,
      character: character,
    });
  }    
}

var styles = StyleSheet.create({
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: '#CCC',
        margin: 10,
        width: 100,
        height: 100
    }
});

module.exports = CharacterPage;