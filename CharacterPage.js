import React, { Component } from 'react';
import { View, ListView, Text, Navigator, TouchableHighlight, StyleSheet } from 'react-native';
import GLOBAL from './Globals';

class CharacterPage extends Component {
  constructor(props){    
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(GLOBAL.guild.characters)
    };
  }

  componentWillUpdate(nextProps){    
    this.setState({dataSource: this.state.dataSource.cloneWithRows(GLOBAL.guild.characters)});
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
      <TouchableHighlight style={styles.item} onPress={() => this.onPressSelectCharacter(character)}>
        <Text style={styles.item}>{character.name}</Text>
      </TouchableHighlight>      
    );
  }

  onPressSelectCharacter(character){
  	var singleCharacterPage = require('./SingleCharacterPage');
  	this.props.navigator.push({
      component: singleCharacterPage,
      id: character.unitId,
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
        width: 50,
        height: 50
    }
});

module.exports = CharacterPage;