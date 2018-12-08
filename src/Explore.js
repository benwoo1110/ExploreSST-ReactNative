import React, {Component} from 'react'
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native'


class Explore extends Component {
  static navigationOptions = {
    headerTitle: null,
  }

  render() {
    return (
        <View style={{
          flex: 1,
          backgroundColor: 'black'
        }}>
          <ImageBackground source={require("../assets/images/background.png")}
                           style={{
                             flex: 1, resizeMode: 'contain'
                           }} imageStyle={{opacity: 0.5}}>
          </ImageBackground>
        </View>
    )
  }
}

export default Explore
