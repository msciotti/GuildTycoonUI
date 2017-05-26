import React, { Component } from 'react';
import { View, ListView, Text, Navigator, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native';
import GLOBAL from './Globals';
import PopUpDialog from 'react-native-popup-dialog';

class CharacterSheetPage extends Component {
  constructor(props){    
    super(props);
    var chosenCharacter = GLOBAL.currentGuild.characters.find(x => x.unitId == this.props.route.id);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { 
      character: chosenCharacter, 
      name: chosenCharacter.name,
      dataSource: ds.cloneWithRows(chosenCharacter.equipmentSheet)
    };    
  }
  render(){
    let stats = this.state.character.stats.base;    
    return (
      <Image source={require('./images/pixelsky.jpg')} style={styles.container}>
        <View style={styles.charSheet}>          
          <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} />

          <TextInput style={styles.name} value={this.state.name} onChangeText={(text) => this.setState({name: text})} onSubmitEditing={(event) => this.changeCharacter(event.nativeEvent.text, this.state.character)}/>

          <PopUpDialog ref={(popUpDialog) => this.popUpDialog = popUpDialog}>
            <View>
              <Text>Yo</Text>
            </View>
          </PopUpDialog>
        </View>
        <View style={styles.stats}>
          <Text style={styles.stat}>VIT: {stats.vitality}</Text>
          <Text style={styles.stat}>STR: {stats.strength}</Text>
          <Text style={styles.stat}>INT: {stats.intelligence}</Text>
          <Text style={styles.stat}>DEX: {stats.dexterity}</Text>
          <Text style={styles.stat}>AGI: {stats.agility}</Text>
          <Text style={styles.stat}>FCS: {stats.focus}</Text>
        </View> 
      </Image> 
    );
  }

  renderRow(item){
    let inventoryItem = GLOBAL.currentGuild.guildInventory.equippableItems.find(x => x.itemId == item);
    return ( 
      <TouchableOpacity color='blue' onPress={() => this.itemPopup()} title={inventoryItem.name || 'eh heh wi'} />
      //<Text>{inventoryItem.name || 'test'}</Text>
    );
  }

  itemPopup(){

  }

  async changeCharacter(text, character){    
     let fetchParams = {
      method: 'POST',
      headers: {
        'Authorization': GLOBAL.token,
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        GuildId: GLOBAL.guild.guildId,
        UnitId: character.unitId,
        Name: text,
        EquipmentSheet: character.equipmentSheet,
        Regimen: character.regimen
      })
    };
    let response = await fetch(`http://guildtycoon-api-dev.azurewebsites.net/UpdateCharacter`, fetchParams);
    let json = await response.json();
    GLOBAL.guild = json;
  }  
}

var styles = StyleSheet.create({
  square: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5
  },  
  charSheet: {
    flexDirection:'row',
    justifyContent:'space-between',
  },
  name:{
    color: 'white',
    marginTop: 20,
    borderWidth: 1,
    width:100,
    alignSelf: 'flex-start'
  },
  stat:{
    color: 'white',
    marginTop: 20,    
  },
  stats:{    
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  container:{
    flex: 1,
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover'
  }
})

module.exports = CharacterSheetPage;