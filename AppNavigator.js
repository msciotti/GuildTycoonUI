import React, { Component } from 'react';
import { Navigator, Alert } from 'react-native';

class AppNavigator extends Component{
    render(){
        var loginPage = require('./LoginPage');
        return (
            <Navigator
                initialRoute={{ component: loginPage }}
                renderScene={ this.renderScene }
            />
        );
    }
    renderScene(route, navigator) {
        return React.createElement(route.component, {navigator, route});
    }
}

module.exports = AppNavigator;