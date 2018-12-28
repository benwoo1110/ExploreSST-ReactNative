import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity, SafeAreaView ,StyleSheet, ScrollView} from 'react-native'
import { FILE_URL } from './constants'
import Icon from 'react-native-vector-icons/MaterialIcons'


class cyberWellness extends Component {
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

              }}>Tell me more about Cyber Wellness in SST. 
              </Text></View>
            <View style={
              styles.ChatViewStyle
            }><Text style={
              styles.ChatTextStyle
            }>Ever wondered how parents of SST manage their children’s use of macbook in a 1-1 school? For starters, all macbooks are termed as learning devices to emphasise the intent of harnessing ICT to optimise learning.
            </Text></View>

            <View style={
              styles.ChatViewStyle
            }><Text style={
              styles.ChatTextStyle
            }>SST holds a series of Parents Engagement Programmes for our Secondary 1 parents, led by our student Cyber Wellness Ambassadors (CWSA).
            </Text></View>

            <View style={
              styles.ChatViewStyle
            }><Text style={
              styles.ChatTextStyle
            }>The CWSAs plan,organise and conduct sharing sessions on areas such as improving security and productivity when using a learning device.
            </Text></View>

            <View style={
              styles.ChatViewStyle
            }><Text style={
              styles.ChatTextStyle
            }>As a 1-1 school, cyberwellness is an essential component of student learning.
            </Text></View>

            <View style={
              styles.ChatViewStyle
            }><Text style={
              styles.ChatTextStyle
            }>Our students go beyond imbibing the tenets of digital citizenship to advocate core values to peers, juniors from other schools, parents of SST and even educators at various platforms.  
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

export default cyberWellness
