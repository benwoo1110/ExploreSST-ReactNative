import React, {Component} from 'react'
import {View, Text, TouchableOpacity, ImageBackground, SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class Explore extends Component {
  static navigationOptions = {
    header: null,
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
            <SafeAreaView style={{
              position: 'absolute',
              marginLeft: 8
            }}>
              <TouchableOpacity onPress={() => {
                this.props.navigation.goBack()
              }}>
                <Icon name={'keyboard-arrow-left'} color={'white'} size={40}/>
              </TouchableOpacity>
            </SafeAreaView>
          </ImageBackground>
        </View>
    )
  }
}

export default Explore
