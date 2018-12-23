import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import { FILE_URL } from './constants'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SpeechBubble from 'react-native-speech-bubble'

class KnowingSST extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'black'
      }}>
        <ImageBackground source={{ uri: FILE_URL + '/go.png' }} style={{
          flex: 1, resizeMode: 'contain'
        }} imageStyle={{ opacity: 0.5 }}>

          <SafeAreaView style={{
            flex: 1,
            margin: 16
          }}>
            <View>
              <Image />
              <Text style={{
                fontFamily: 'Avenir Next',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '600',
                color: 'white'
              }}>Rachel</Text>
            </View>
            <ScrollView>
              <SpeechBubble
                speeches={["SST conducts digital citizenship workshops for primary schools and I was one of the students who attended.", 
                "I learnt useful tips on how I can encourage the healthy and responsible use of technology back in my primary school."]}
              />




            </ScrollView>
          </SafeAreaView>




          <SafeAreaView style={{
            marginLeft: 8,
            position: 'absolute',
          }}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.goBack()
            }}>
              <Icon name={'keyboard-arrow-left'} color={'white'} size={40} />
            </TouchableOpacity>

          </SafeAreaView>
        </ImageBackground>

      </View>
    )
  }
}

export default KnowingSST
