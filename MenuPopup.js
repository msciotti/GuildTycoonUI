import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';

class MenuPopup extends Component {
    render(){
        return(
            <View>
                <Button title="Navigation" onPress={() => this.popUpDialog.show()} />
                <PopupDialog
                    dialogTitle={<DialogTitle title="Navigation" />}
                    ref={ (popupDialog) => this.popUpDialog = popupDialog } 
                >
                    <View>
                        <Text>This is my menu</Text>
                    </View>
                </PopupDialog>
            </View>
        )
    }
}

module.exports = MenuPopup;