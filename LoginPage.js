import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, Text, View, Button, Navigator, Dimensions } from 'react-native';
import OAuthManager from 'react-native-oauth';
import GLOBAL from './Globals';

const manager = new OAuthManager('RedFish')

manager.configure({
  facebook:{
    client_id: '1550645341614134',
    client_secret: '934afbf4631726c18bd89ac178762d1b'
  }
});

class LoginPage extends Component {
  render(){
    return (
      <Image source={require('./images/pixelsky.jpg')} style={styles.backgroundImage}>
        <View style={{flex:1, flexDirection:'column-reverse', marginBottom:25, marginLeft:10, marginRight:10}}>
          <Button
            onPress={() => this.onPressFBLogin()}
            title="Login with Facebook"
            color="blue" />
        </View>
      </Image>
    )
  }

  async onPressFBLogin(){
    var guildPage = require('./GuildPage');
    var response = await manager.authorize('facebook');
    await this.getGuildTycoonToken(response.response.credentials.accessToken);
    this.props.navigator.push({ component: guildPage });    
  }

  async getGuildTycoonToken(accessToken){
    var response = await fetch(`http://guildtycoon-api-dev.azurewebsites.net/GetToken?accessToken=${accessToken}`);
    var json = await response.json();
    GLOBAL.token = `Bearer ${json.token}`;    
  }    
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover'
  }
});

module.exports = LoginPage;
