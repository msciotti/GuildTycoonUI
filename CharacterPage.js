import React, { Component } from 'react';
import { View, ListView, Text, Navigator, Button, StyleSheet } from 'react-native';
import GLOBAL from './Globals';

class CharacterPage extends Component {
  constructor(props){    
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(GLOBAL.guild.characters)
    };
  }

  // componentWillUpdate(nextProps){    
  //   this.setState({dataSource: this.state.dataSource.cloneWithRows(GLOBAL.guild.characters)});
  // }

  render(){
    return (
      <View>
        <Button title='Inventory' color='red' onPress={() => this.goToInventory()} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
  renderRow(character){
    return (      
      <Button color='blue' onPress={() => this.onPressSelectCharacter(character)} title={character.name || 'eh heh wi'} />        
    );
  }

  goToInventory = () => {
    var inventory = require('./InventoryPage');
    this.props.navigator.push({
      component: inventory
    });
  }

  onPressSelectCharacter = (character) => {
  	var characterSheetPage = require('./CharacterSheetPage');
  	this.props.navigator.push({
      component: characterSheetPage,
      id: character.unitId,
    });
  }    
}

module.exports = CharacterPage;