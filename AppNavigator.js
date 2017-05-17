import React, { Component } from 'react';
import { Navigator } from 'react-native';

class AppNavigator extends Component{    
    render(){
        var loginPage = require('./LoginPage');
        return (
            <Navigator
                ref={(c) => this.nav = c}
                initialRoute={{ component: loginPage }}
                renderScene={ this.renderScene }
            />
        );
    }
    renderScene(route, navigator) {
        return React.createElement(route.component, {navigator, route});
    }

    static navigate(route){
        var page = require('./InventoryPage');
        this.nav.push({ 
            component: page
        });
    }
}

module.exports = AppNavigator;