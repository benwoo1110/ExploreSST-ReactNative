import React, { Component } from 'react'
import { Text, View, Image, SafeAreaView, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { ScrollView } from 'react-native-gesture-handler';

class studentExperiences extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'black'
      }}>
        <ImageBackground source={require('../assets/images/background.png')}
          style={{
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

							}} source={require('../assets/images/Rachel_Face.png')} />

							<Text style={{
								fontFamily: 'Avenir Next',
								textAlign: 'center',
								alignSelf: 'center',
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

              }}>Tell me more about the Student Expriences in SST.
              </Text></View>


              <View style={
                styles.ChatViewStyle

              }><Text style={
               styles.ChatTextStyle
              }>The annual SST orientation programme serves as the platform for the induction of new passionate innovators into the SST family.
            </Text></View>
            <View style={
                styles.ChatViewStyle

              }><Text style={
               styles.ChatTextStyle
              }>Orientation seeks to prepare our budding passionate innovators for learning in a uniquely SST environment.
            </Text></View>
            <View style={
                styles.ChatViewStyle

              }><Text style={
               styles.ChatTextStyle
              }> The Orientation camp component aims to imbue the values of SST and build the foundation of teamwork and discipline amongst students through a series of activities over a period of 2 days and 1 night.
            </Text></View>

            <View style={{
              
              margin: 16,
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('CCAMenu')
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
                    Let's look at CCAs!
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
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




export default studentExperiences
