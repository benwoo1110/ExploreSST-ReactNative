import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ImageBackground, SafeAreaView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FILE_URL } from './constants'

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
        <ImageBackground source={require('../assets/images/go.jpeg')}
          style={{
            flex: 1, resizeMode: 'contain'
          }} imageStyle={{ opacity: 0.5 }}>
          <SafeAreaView style={{
            flex: 1,
            margin: 16
          }}>
            <Text style={{
              fontFamily: 'Avenir Next',
              textAlign: 'center',
              fontSize: 30,
              fontWeight: '600',
              color: 'white'
            }}>Orientation</Text>
            <View style={{
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
              justifyContent: "center",
              alignItems: "center",
              marginTop: 16
            }}><Text style={{
              padding: 8,
              fontSize: 18,
              fontFamily: 'Avenir Next',

            }}>Hello, I’m Rachel! I’m a year one SST student this year and I’m excited to share my new secondary school life with you! </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Image style={{
                alignSelf: 'center',
                marginLeft: '10%',
                marginTop: '20%',
                width: "35%",
                height: "85%",
                resizeMode: 'contain'
              }} source={require('../assets/images/Rachel_Waving.png')} />
            </View>

            <View style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              margin: 16,
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('intro')
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
                    Let's Explore!
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
          </SafeAreaView>



          <SafeAreaView style={{
            marginTop: 16,
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

export default Explore
