import React, { Component } from 'react';
import { View, Button, Modal } from 'react-native';

class NavigationPopup extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    setModalVisible() {
        this.setState({modalVisible: !this.state.modalVisible});
    }

    dismissAndNavigate(page){
        let newRoute = {};
        switch (page) {
            case 'AdventureBoard':
                newRoute = require('./InventoryPage');
                break;
            case 'Characters':
                newRoute = require('./CharacterPage');
                break;
                case 'Teams':
                newRoute = require('./InventoryPage');
                break;
                case 'Map':
                newRoute = require('./InventoryPage');
                break;
                case 'Inventory':
                newRoute = require('./InventoryPage');
                break;
                case 'ChangeGuild':
                newRoute = require('./UserDashboardPage');
                break;
            default:
                break;
        }
        this.setModalVisible();
        this.props.navigator.push({
            component: newRoute
        });
    }

    render(){
        return(
            <View>
                <Button title="Navigation" onPress={() => this.setModalVisible()} />
                <Modal
                animationType={"fade"}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => this.setModalVisible()} >
                    <View>
                        <Button title="Adventure Board" onPress={() => this.dismissAndNavigate('AdventureBoard')} />
                        <Button title="Characters" onPress={() => this.dismissAndNavigate('Characters')} />
                        <Button title="Teams" onPress={() => this.dismissAndNavigate('Teams')} />
                        <Button title="Map" onPress={() => this.dismissAndNavigate('Map')} />
                        <Button title="Inventory" onPress={() => this.dismissAndNavigate('Inventory')} />
                        <Button title="Change Guild" onPress={() => this.dismissAndNavigate('ChangeGuild')} />
                    </View>
                </Modal>
            </View>
        );
    }
}

module.exports = NavigationPopup;