import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, Text, View, Button, Alert, Navigator } from 'react-native';
import OAuthManager from 'react-native-oauth';

const manager = new OAuthManager('RedFish')

manager.configure({
  facebook:{
    client_id: '1550645341614134',
    client_secret: '934afbf4631726c18bd89ac178762d1b'
  }
});

class BackgroundImage extends Component {
  render() {
    return (
      <Image source={require('./images/pixelbackground.jpg')}
            style={styles.backgroundImage}>
            {this.props.children}
      </Image>
    )
  }
}

class LoginPage extends Component {
  render(){
    return (
        <BackgroundImage>
        <View style={{flex:1, flexDirection:'column-reverse', marginBottom:25, marginLeft:10, marginRight:10}}>
          <Button
            onPress={this.onPressFBLogin}
            title="Login with Facebook"
            color="blue"/>
          </View>
        </BackgroundImage>
    )
  }

  onPressFBLogin = () => {
    var guildPage = require('./GuildPage');
    manager.authorize('facebook')
    .then(resp => {
      var token = resp.response.credentials.accessToken;
      fetch(`http://guildmanager-dev.azurewebsites.net/GetToken?accessToken=${token}`)
      .then(response => response.json())
      .then(data => {
        this.props.navigator.push({
          component: guildPage,
          guilds: data.chronicles,
          token: data.token
        })
      })
    })
    .catch(err => console.error(err.message));
  }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});

module.exports = LoginPage;
