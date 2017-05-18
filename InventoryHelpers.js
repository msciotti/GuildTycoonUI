import React, { Component } from 'react';
import { Text, ListView, View, Alert } from 'react-native';
import GLOBAL from './Globals';

export class EquippableItems extends Component {
	constructor(props){
		super(props);
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
      		dataSource: ds.cloneWithRows(GLOBAL.currentGuild.guildInventory.equippableItems)
    	};
	}

	render(){
		return (
			<View>
				<Text>MY EQUIPPABLE ITEMS</Text>
				<ListView
			        dataSource={this.state.dataSource}
			        renderRow={this.renderRow.bind(this)}
		      	/>
	      	</View>
		);
	}

	renderRow(item){
	    return (      
	      <Text>{item.name}</Text>
	    );
  	}
}

export class NonEquippableItems extends Component {
	constructor(props){
		super(props);
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
      		dataSource: ds.cloneWithRows(GLOBAL.currentGuild.guildInventory.nonEquippableItems)
    	};
	}

	render(){
		return (
			<View>
				<Text>MY NONEQUIPPABLE ITEMS</Text>
				<ListView
			        dataSource={this.state.dataSource}
			        renderRow={this.renderRow.bind(this)}
		      	/>
	      	</View>
		);
	}

	renderRow(item){
	    return (      
	      <Text>{item.name}</Text>        
	    );
  	}
}

export class CharacterCards extends Component {
	constructor(props){
		super(props);
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
      		dataSource: ds.cloneWithRows(GLOBAL.currentGuild.guildInventory.characterCards)
    	};
	}

	render(){
		return (
			<View>
				<Text>MY CHARACTER CARDS</Text>
				<ListView
			        dataSource={this.state.dataSource}
			        renderRow={this.renderRow.bind(this)}
		      	/>
	      	</View>
		);
	}

	renderRow(card){
	    return (      
	      <Text>{card.name}</Text>       
	    );
  	}
}