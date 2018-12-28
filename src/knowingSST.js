import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import { FILE_URL } from './constants'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SpeechBubble from 'react-native-speech-bubble';


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

        <ImageBackground source={{ uri: FILE_URL + '/images/go.png' }} style={{
          flex: 1, resizeMode: 'contain'
        }} imageStyle={{ opacity: 0.5 }}>

          <SafeAreaView style={{
            flex: 1,
            margin: 16
          }}>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingBottom: 8
            }}>

              <Image style={{
                width: 50, 
                height: 50,
                borderRadius: 25,
                resizeMode: "cover",
                alignItems: 'flex-start',

                }} source={{ uri: FILE_URL + '/images/Rachel_Face.png' }}/>

              <Text style={{
                fontFamily: 'Avenir Next',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '600',
                color: 'white',
                paddingLeft: 16
              }}>Rachel</Text>
            </View>
            <ScrollView>

              <View style={{
                width: '75%',
                backgroundColor: 'darkgrey',
                shadowColor: 'gray',

                shadowOffset: {
                  width: 2,
                  height: 2
                },
                shadowOpacity: 1,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "flex-end",

                marginTop: 16

              }}><Text style={{
                padding: 8,
                fontSize: 18,
                fontFamily: 'Avenir Next',
                color: "white"

              }}>How did you get to know SST?
              </Text></View>

              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>SST conducts digital citizenship workshops for primary schools and I was one of the students who attended.
              </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>I learnt useful tips on how I can encourage the healthy and responsible use of technology back in my primary school.
              </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>I found it amazing that the SST students conducting the workshops also organised sessions for parents of SST as well.
              </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>My parents also thought it was important for a STEM school to have a holistic approach to learning ICT.
              </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>They brought me to the SST Open House and the rest is history.
              </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>Deets on SST Open House? Here, check out this link: https://www.facebook.com/pg/ssts.1technologydrive/photos/?tab=album&album_id=1998729310137317
              </Text></View>
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

const styles = StyleSheet.create({
  ChatTextStyle: {
    padding: 8,
    fontSize: 18,
    fontFamily: 'Avenir Next',
  },
  ChatViewStyle: {
    width: '75%',
    backgroundColor: 'white',
    shadowColor: 'gray',

    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",

    marginTop: 16

  }

})

export default KnowingSST
