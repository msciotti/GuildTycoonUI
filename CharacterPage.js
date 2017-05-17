import React, { Component } from 'react';
import {  View, ListView, Text, Navigator, Button, StyleSheet, Image, Dimensions } from 'react-native';
import GLOBAL from './Globals';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';
import AppNavigator from './AppNavigator';
import NavigationPopup from './NavigationPopup'

class CharacterPage extends Component {
  constructor(props){    
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(GLOBAL.currentGuild.characters)
    };
  }

  render(){
    return (      
        <Image source={require('./images/pixelsky.jpg')} style={styles.backgroundImage}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
          />
          <NavigationPopup ref={() => this.popUpDialog = this.popUpDialog}/>
          <Button title="Navigation" onPress={() => this.popUpDialog.show()} />
        </Image>      
    );
  }
  
  renderRow(character){
    return (      
      <Button color='blue' onPress={() => AppNavigator.navigate(character.unitId)} title={character.name || 'eh heh wi'} />        
    );
  }     
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover'
  },
})

module.exports = CharacterPage;