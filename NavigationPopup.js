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

    dismissAndNavigate(){
        this.setModalVisible();
        var inventory = require('./InventoryPage')
        this.props.navigator.push({
            component: inventory
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
                        <Button title="Adventure Board" onPress={() => AppNavigator.navigate()} />
                        <Button title="Characters" onPress={() => AppNavigator.navigate()} />
                        <Button title="Teams" onPress={() => AppNavigator.navigate()} />
                        <Button title="Map" onPress={() => AppNavigator.navigate()} />
                        <Button title="Inventory" onPress={() => this.dismissAndNavigate()} />
                        <Button title="Change Guild" onPress={() => AppNavigator.navigate()} />
                    </View>
                </Modal>
            </View>
        );
    }
}

module.exports = NavigationPopup;