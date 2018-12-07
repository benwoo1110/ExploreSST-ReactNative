import React, { Component } from 'react'
import { View, Text, Image, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'

class Intro extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const y = this.props.navigation.getParam('item')
    if (y == 1) {
      return (
        <View style={{
          flex: 1,
          backgroundColor: 'black'
        }}>
          <ImageBackground source={{ uri: 'http://localhost:3000/IMG_1725.JPG' }} style={{
            flex: 1
          }} imageStyle={{
            opacity: 0.5
          }}>
            <SafeAreaView style={{
              flex: 1
            }}>
              <View style={{
                flex: 1,
              }} source={{ uri: 'http://localhost:3000/IMG_1725.JPG' }}>
                <Text style={{
                  alignSelf: 'center',
                  fontFamily: 'Avenir Next',
                  fontWeight: '600',
                  fontSize: 30,
                  color: 'white'
                }}>
                  Rachel
              </Text>
                <Image source={{ uri: 'http://localhost:3000/Rachel_Waving.png' }} style={{
                  flex: 1,
                  shadowColor: 'gray',
                  shadowOffset: {
                    width: 1,
                    height: 1
                  },
                  shadowOpacity: 1
                }} resizeMode={'contain'}>
                </Image>
              </View>
              <View style={{
                flex: 0.5,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 8
              }}>
                <Text style={{
                  fontSize: 20,
                  fontFamily: 'Avenir Next',
                  color: 'white'
                }}>
                  Hello, I’m Rachel! I’m a year one SST student this year and I’m excited to share my new secondary school life with you!
                </Text>
                <View style={{
                  flex: 1,
                  justifyContent: 'flex-end'
                }}>
                  <TouchableOpacity style={{
                    marginBottom: 32
                  }} onPress={() => {
                    this.props.navigation.navigate("Explore")
                  }}>
                    <View style={{
                      backgroundColor: 'white',
                      padding: 8,
                      borderRadius: 8
                    }}>
                      <Text style={{
                        fontFamily: 'Avenir Next',
                        fontSize: 20,
                        fontWeight: '600'
                      }}>
                        Begin
                    </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </SafeAreaView>
          </ImageBackground>
        </View>
      )
    } else if (y == 2) {
      return (
        <SafeAreaView style={{
          flex: 1
        }}>
          <Text>
            two
            </Text>
        </SafeAreaView>
      )
    } else if (y == 3) {
      return (
        <SafeAreaView style={{
          flex: 1
        }}>
          <Text>
            three
            </Text>
        </SafeAreaView>
      )
    } else if (y == 4) {
      return (
        <SafeAreaView style={{
          flex: 1
        }}>
          <Text>
            four
            </Text>
        </SafeAreaView>
      )
    } else {
      return (
        <SafeAreaView style={{
          flex: 1
        }}>
          <Text>
            the developer messed up again
            </Text>
        </SafeAreaView>
      )
    }
  }
}

export default Intro
