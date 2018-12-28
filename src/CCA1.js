import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FILE_URL } from './constants'


class CCA1 extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'black'
      }}>
        <ImageBackground source={{ uri: FILE_URL + '/images/background.png' }}
          style={{
            flex: 1, resizeMode: 'contain'
          }} imageStyle={{ opacity: 0.5 }}>

          <SafeAreaView>
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

              }}>What are the CCAs in SST?
              </Text></View>
               
              <View style={
               styles.ChatViewStyle
            }><Text style={
             styles.ChatTextStyle
            }>There are
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



const styles=StyleSheet.create({
  buttonView: {
      padding: 8
    },
    buttonText:{
        fontSize: 18
    },
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
 
  
});

export default CCA1
