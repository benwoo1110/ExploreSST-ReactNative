import React, { Component } from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FILE_URL } from './constants'

class settlingIn extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'black'
      }}>
        <ImageBackground source={{ uri: FILE_URL + '/background.png' }}
          style={{
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
            }}>
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

export default settlingIn
