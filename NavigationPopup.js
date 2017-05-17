import React, { Component } from 'react';
import { View, Button, Navigator } from 'react-native';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';

class NavigationPopup extends Component{    
    render(){
        return(
            <PopupDialog dialogTitle={<DialogTitle title="Navigation" />} ref={ (popupDialog) => this.popUpDialog = popupDialog }>
              <View>
                  <Button title="Adventure Board" onPress={() => AppNavigator.navigate()} />
                  <Button title="Characters" onPress={() => AppNavigator.navigate()} />
                  <Button title="Teams" onPress={() => AppNavigator.navigate()} />
                  <Button title="Map" onPress={() => AppNavigator.navigate()} />
                  <Button title="Inventory" onPress={() => AppNavigator.navigate('InventoryPage')} />
                  <Button title="Change Guild" onPress={() => AppNavigator.navigate()} />
              </View>
          </PopupDialog>
        )
    }
}

module.exports = NavigationPopup;