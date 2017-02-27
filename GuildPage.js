import React, { Component } from 'react';
import { View, ListView, Text, Navigator } from 'react-native';

class GuildPage extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.route.data.chronicles)
    };
  }
  render(){
    var GuildRow = require('./GuildRow');
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(data) => <GuildRow itemId={data}/>}
      />
    );
  }
  
}

module.exports = GuildPage;
