import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FILE_URL } from './constants'
import Swiper from 'react-native-swiper';

class intro extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'black'
      }}>
        <ImageBackground source={{ uri: FILE_URL + '/go.png' }}
          style={{
            flex: 1, resizeMode: 'contain'
          }} imageStyle={{ opacity: 0.5 }}>
          <SafeAreaView style={{
            flex:1,
            margin: 16
          }}>

            <Text style={{
              fontFamily: 'Avenir Next',
              textAlign: 'center',
              fontSize: 30,
              fontWeight: '600',
              color: 'white',

              flex:1
            }}>Orientation</Text>


            <Image style={{
              alignSelf: 'center',
              flex: 1,
              justifyContent: 'center',
              width: "75%",
              height: "85%",
              resizeMode: 'contain'
            }} source={{ uri: FILE_URL + '/psblogo.png' }} />

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

            }}><Text style={{
              padding: 8,
              fontSize: 18,
              fontFamily: 'Avenir Next',


            }}>Hello! Welcome to SST! We are the Peer Support
                        Board and we are here to bring you on board before
            the start of your SST Journey! Let’s go!</Text>
            </View>

            <View>
              <Swiper>
                <View style={{
                  backgroundColor: "#e6e6e6", flex: 1, alignItems: "center", justifyContent: "center", height: 200, width: '100%'
                }}>
                  <Text>insert Video here</Text>
                </View>

                <View style={{ backgroundColor: "e6e6e6", flex: 1 }}>
                  <Text>The annual SST orientation programme serves as the
                    platform for the induction of new student entrants into
                    the SST family.

                    Orientation seeks to prepare the new entrants for learning
                    in a uniquely SST environment. The camp component aims
                    to imbue the values of SST and build the foundation of
                    teamwork and discipline amongst students through a series
                    of activities over a period of 2 days and 1 night.</Text>

                </View>
              </Swiper>
            </View>



            <View style={{

              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Orientation')
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

export default intro
