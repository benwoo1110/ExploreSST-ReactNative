import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView } from 'react-native'

class Orientation1 extends Component {
	static navigationOptions = {
    header: null
	}
	
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'black'
      }}>
				<ImageBackground source={require('../assets/images/background.png')} style={{flex: 1, resizeMode: 'contain'}} imageStyle={{opacity: 0.5}}>
					<SafeAreaView style = 
						{{flex:1}}>
						<View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
							<Text style={{
                fontFamily: 'Avenir Next',
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '600',
                color: 'white'
              }}>
                Introduction
              </Text>
							<View style={{
								alignSelf = 'center',
								color = "#FFFB30",
								height: 3,
								width: '25%'

							}}>
							</View>
						</View>



					</SafeAreaView>

				</ImageBackground>
      </View>
    )
  }
}

export default Orientation1
