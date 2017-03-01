import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';

class App extends Component {
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

AppRegistry.registerComponent('GuildTycoonUI', () => App);
