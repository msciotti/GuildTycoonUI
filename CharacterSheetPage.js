import React, { Component } from 'react';
import { View, ListView, Text, Navigator, StyleSheet, TextInput, Image, Dimensions } from 'react-native';
import GLOBAL from './Globals';

class CharacterSheetPage extends Component {
  constructor(props){    
    super(props);
    var chosenCharacter = GLOBAL.guild.characters.find(x => x.unitId == this.props.route.id);
    this.state = { character: chosenCharacter, name: chosenCharacter.name };
  }
  render(){
    var stats = this.state.character.stats.base;    
    return (
      <Image source={require('./images/pixelsky.jpg')} style={styles.container}>
        <View style={styles.charSheet}>
          <View>
            <View style={styles.square}><Text>HEAD</Text></View>
            <View style={styles.square}><Text>SHOULDERS</Text></View>
            <View style={styles.square}><Text>CHEST</Text></View>
            <View style={styles.square}><Text>LEGS</Text></View>
            <View style={styles.square}><Text>WAIST</Text></View>
            <View style={styles.square}><Text>FEET</Text></View>
          </View>
          <TextInput style={styles.name} value={this.state.name} onChangeText={(text) => this.setState({name: text})} onSubmitEditing={(event) => this.changeCharacter(event.nativeEvent.text, this.state.character)}/>
          <View>
            <View style={styles.square}><Text>NECK</Text></View>
            <View style={styles.square}><Text>RING</Text></View>
            <View style={styles.square}><Text>RING</Text></View>
            <View style={styles.square}><Text>CHARM</Text></View>
            <View style={styles.square}><Text>MAINHAND</Text></View>
            <View style={styles.square}><Text>OFFHAND</Text></View>
          </View>          
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

  changeCharacter = (text, character) => {    
     var fetchParams = {
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
    fetch(`http://guildtycoon-api-dev.azurewebsites.net/UpdateCharacter`, fetchParams)
    .then(response => response.json())
    .then(data => {
      GLOBAL.guild = data;
      console.log('Saved!');     
    })
    .catch((error) => { console.log(error); });
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