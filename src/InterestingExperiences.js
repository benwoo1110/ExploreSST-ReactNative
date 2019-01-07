import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'



class InterestingExperiences extends Component {
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


              }} source={require('../assets/images/Farhan_Face.jpeg')} />

              <Text style={{
                fontFamily: 'Avenir Next',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '600',
                color: 'white',
                paddingLeft: 16
              }}>Farhan</Text>
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

              }}>What other interesting experiences are there?
              </Text></View>

              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>I’m not sure where to start but I’ll try. 🤗
              </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>There are so many programmes spanned over the years that are available for the entire cohort. 
              </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>Experiences that students go through are interdisciplinary and built upon.
              </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>For example, in Secondary 2, students go through the Investigative Skills in Science (ISS) programme, where they spend a term researching and developing a science project of their choice in place of regular classes.
              </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>In Secondary 3, they can opt for the Industrial Research and Attachment Programme, where they are able to utilise their research skills depending on their projects.
              </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>As you can see, programmes are integrated and pervasive.
              </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>Have you ever heard of SST’s Talent Development Programme (TDP) ?
              </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>It is a programme where every student is potentially a talent in some specific area(s) and SST has provisions in place to facilitate the identification and nurturing of each student’s specific talent based on his or her expressed area(s) of interest.
              </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>Some of these TDPs include Science TDP, Student Leadership Programmes, SST INC, and more. You can find out more by asking my friends!
              </Text></View>
              <View style={
                styles.ChatViewStyle
              }><Text style={
                styles.ChatTextStyle
              }>There are just so many interesting experiences you can find in SST. 
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

export default InterestingExperiences
