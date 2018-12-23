import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { FILE_URL } from './constants'
import Icon from 'react-native-vector-icons/MaterialIcons'

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
            }}>SST conducts digital citizenship workshops for primary schools and I was one of the students who attended.
                I learnt useful tips on how I can encourage the healthy and responsible use of technology back in my primary school.
                I found it amazing that the SST students conducting the workshops also organised sessions for parents of SST as well.
                My parents also thought it was important for a STEM school to have a holistic approach to learning ICT.
                They brought me to the SST Open House and the rest is history.
                Deets on SST Open House? Here
            </Text></View>
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
