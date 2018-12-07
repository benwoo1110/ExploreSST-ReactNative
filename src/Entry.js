import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, Button, SafeAreaView, TouchableOpacity } from 'react-native'

class Entry extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'black'
      }}>
        <ImageBackground source={{ uri: 'http://localhost:3000/background.png' }} style={{ flex: 1, resizeMode: 'contain' }} imageStyle={{ opacity: 0.5 }}>
          <SafeAreaView style={{
            flex: 1
          }}>
            <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text style={{
                fontFamily: 'Avenir Next',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '600',
                color: 'white'
              }}>
                Welcome to the School of Science and Technology, Singapore
                </Text>
            </View>
            <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Year')
              }}>
                <View style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 16,
                  borderRadius: 16
                }}>
                  <Text style={{
                    fontFamily: 'Avenir Next',
                    fontSize: 15,
                    fontWeight: '500'
                  }}>
                    Let's Explore
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    )
  }
}

export default Entry
