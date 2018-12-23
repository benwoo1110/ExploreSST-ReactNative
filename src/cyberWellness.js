import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native'

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
            }}>Ever wondered how parents of SST manage their children’s use of macbook in a 1-1 school? For starters, all macbooks are termed as learning devices to emphasise the intent of harnessing ICT to optimise learning.
                SST holds a series of Parents Engagement Programmes for our Secondary 1 parents, led by our student Cyber Wellness Ambassadors (CWSA).
                The CWSAs plan,organise and conduct sharing sessions on areas such as improving security and productivity when using a learning device.
                As a 1-1 school, cyberwellness is an essential component of student learning.
                Our students go beyond imbibing the tenets of digital citizenship to advocate core values to peers, juniors from other schools, parents of SST and even educators at various platforms.  
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

export default cyberWellness
