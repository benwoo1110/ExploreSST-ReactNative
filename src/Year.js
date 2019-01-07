import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, Button, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import LinearGradient from 'react-native-linear-gradient';

class Year extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={{
        flex: 1,
        background: 'black'
      }}>
        <ParallaxScrollView
          parallaxHeaderHeight={300}
          renderBackground={() => {
            return (
              <ImageBackground source={require('../assets/images/background2.jpg')} style={{
                height: 300,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
              }} imageStyle={{
                opacity: 0.5
              }}>
                <Text style={{
                  fontFamily: 'Avenir Next',
                  fontWeight: '600',
                  fontSize: 30,
                  color: 'white'
                }}>
                  Choose a Year
                      </Text>
              </ImageBackground>
            )
          }}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Explore')
          }}
            style={{
              alignItems: 'center',
              margin: 16
            }}>
            <ImageBackground style={{
              height: 200,
              width: '100%',
              backgroundColor: 'white',
              shadowColor: 'gray',
              shadowBlur: 10,
              shadowOffset: {
                width: 2,
                height: 2
              },
              shadowOpacity: 1,
              borderRadius: 5,
            }} source={require('../assets/images/Rachel_Waving.png')} resizeMode={'contain'}>
              <Text style={{
                margin: 8,
                fontFamily: 'Avenir Next',
                fontSize: 20,
                fontWeight: '500',
                position: 'absolute',
                bottom: 8,
                left: 8
              }}>
                Year 1
                </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={{
            alignItems: 'center',
            margin: 16
          }}>
            <ImageBackground style={{
              height: 200,
              width: '100%',
              backgroundColor: 'white',
              shadowColor: 'gray',
              shadowBlur: 10,
              shadowOffset: {
                width: 2,
                height: 2
              },
              shadowOpacity: 1,
              borderRadius: 5,
            }} source={require('../assets/images/Farhan_Coding.png')} resizeMode={'contain'}>
              <Text style={{
                margin: 8,
                fontFamily: 'Avenir Next',
                fontSize: 20,
                fontWeight: '500',
                position: 'absolute',
                bottom: 8,
                left: 8
              }}>
                Year 2
                </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={{
            alignItems: 'center',
            margin: 16
          }}>
            <ImageBackground style={{
              height: 200,
              width: '100%',
              backgroundColor: 'white',
              shadowColor: 'gray',
              shadowBlur: 10,
              shadowOffset: {
                width: 2,
                height: 2
              },
              shadowOpacity: 1,
              borderRadius: 5,
            }} source={require('../assets/images/Rachel_Waving.png')} resizeMode={'contain'}>
              <Text style={{
                margin: 8,
                fontFamily: 'Avenir Next',
                fontSize: 20,
                fontWeight: '500',
                position: 'absolute',
                bottom: 8,
                left: 8
              }}>
                Year 3
                </Text>
            </ImageBackground>
          </TouchableOpacity>
          <SafeAreaView>
            <TouchableOpacity style={{
              alignItems: 'center',
              margin: 16
            }}>
              <ImageBackground style={{
                height: 200,
                width: '100%',
                backgroundColor: 'white',
                shadowColor: 'gray',
                shadowBlur: 10,
                shadowOffset: {
                  width: 2,
                  height: 2
                },
                shadowOpacity: 1,
                borderRadius: 5,
              }} source={require('../assets/images/Rachel_Waving.png')} resizeMode={'contain'}>
                <Text style={{
                  margin: 8,
                  fontFamily: 'Avenir Next',
                  fontSize: 20,
                  fontWeight: '500',
                  position: 'absolute',
                  bottom: 8,
                  left: 8
                }}>
                  Year 4
                  </Text>
              </ImageBackground>
            </TouchableOpacity>
          </SafeAreaView>
        </ParallaxScrollView>
      </View>
    )
  }
}

export default Year
