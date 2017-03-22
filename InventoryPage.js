import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';
import GLOBAL from './Globals';
import EquippableItems from './InventoryHelpers';
import NonEquippableItems from './InventoryHelpers';
import CharacterCards from './InventoryHelpers';

class InventoryPage extends Component {
	render(){
		return(
			<View>
				<Text>Size: {GLOBAL.guild.guildInventory.size}</Text>
				<Text>Current: {GLOBAL.guild.guildInventory.currency}</Text>
				<EquippableItems />
				<NonEquippableItems />
				<CharacterCards />
			</View>
		);
	}
}

module.exports = InventoryPage;