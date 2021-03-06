import React, { Component } from 'react';
import { View, Text, Navigator, Image, Dimensions, StyleSheet } from 'react-native';
import GLOBAL from './Globals';
import { EquippableItems, NonEquippableItems, CharacterCards } from './InventoryHelpers';
import NavigationPopup from './NavigationPopup';

class InventoryPage extends Component {
	render(){		
		return(
			<Image source={require('./images/pixelsky.jpg')} style={styles.backgroundImage}>
				<EquippableItems />
				<NonEquippableItems />
				<CharacterCards />
				<Text style={styles.floatText}>{GLOBAL.currentGuild.guildInventory.size}/100 |  {GLOBAL.currentGuild.guildInventory.currency} gold</Text>					
				<NavigationPopup navigator={this.props.navigator} />
			</Image>
		);
	}
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover'
  },

  floatText:{
  	color: 'blue',  
  	alignSelf:'center'
  }
});

module.exports = InventoryPage;