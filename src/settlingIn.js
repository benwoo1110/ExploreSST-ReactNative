import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
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

							}} source={{ uri: FILE_URL + '/images/Rachel_Face.png' }} />

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

              }}>How else did you settle in?
              </Text></View>
            <View style={
               styles.ChatViewStyle
            }><Text style={
             styles.ChatTextStyle
            }>One of the early milestones you would face as an SST student is chosing a CCA.
            </Text></View>
            <View style={
               styles.ChatViewStyle
            }><Text style={
             styles.ChatTextStyle
            }>One of the early milestones you would face as an SST student is chosing a CCA. Since the cohort is a small one, we are told that the school will start new CCAs only if there is a sizeable number of interested students.
            </Text></View>
            <View style={
               styles.ChatViewStyle
            }><Text style={
             styles.ChatTextStyle
            }>But the truth is that our students have no problems finding a CCA that either helps to hone current skills and interests or uncover a hidden talent or passion.
            </Text></View>
            <View style={
               styles.ChatViewStyle
            }><Text style={
             styles.ChatTextStyle
            }>But the truth is that our students have no problems finding a CCA that either helps to hone current skills and interests or uncover a hidden talent or passion.
            </Text></View>
            <View style={
               styles.ChatViewStyle
            }><Text style={
             styles.ChatTextStyle
            }>During the CCA tryouts, students are given the opportunity to attend any CCA session of their choice during a two-week trial period.
            </Text></View>
            <View style={
               styles.ChatViewStyle
            }><Text style={
             styles.ChatTextStyle
            }>Following the trial period, students would then indicate their preferred choice of CCA for the rest of their 4 years in SST.
            </Text></View>
            <View style={
               styles.ChatViewStyle
            }><Text style={
             styles.ChatTextStyle
            }>I had a hard time choosing but eventually went with my heart in choosing showchoir.
            </Text></View>
            {/* IMAGE MUST BE ADDED OF HER SINGING */}
            <View style={
               styles.ChatViewStyle
            }><Text style={
             styles.ChatTextStyle
            }>Showchoir is a performing arts CCA in SST. Other categories are Sports and Games, Clubs and Societies and Uniform groups.
            </Text></View>
            <View style={
               styles.ChatViewStyle
            }><Text style={
             styles.ChatTextStyle
            }>I had seen clips of my seniors performing and was in awe.😲
            </Text></View>
            <View style={
               styles.ChatViewStyle
            }><Text style={
             styles.ChatTextStyle
            }>I’m finding out that getting to those standards of performance took a lot of effort and practice, not to mention team work.
            </Text></View>
            <View style={
               styles.ChatViewStyle
            }><Text style={
             styles.ChatTextStyle
            }>But as they say,”No pain, no gain.”. I want to gain the confidence to express myself and the strength to endure tough situations.
            </Text></View>
            <View style={
               styles.ChatViewStyle
            }><Text style={
             styles.ChatTextStyle
            }>So I’ll break a leg, not literally of course. 😄 
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
export default settlingIn
