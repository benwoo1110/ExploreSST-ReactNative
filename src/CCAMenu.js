import React, { Component } from 'react';
import {
  Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


class CCAMenu extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'black'
      }}
      >
        <ImageBackground
          source={require('../assets/images/background.png')}
          style={{
            flex: 1, resizeMode: 'contain'
          }}
          imageStyle={{ opacity: 0.5 }}
        >
          <SafeAreaView style={{
            flex: 1,
            margin: 16
          }}
          >
            <Text style={{
              fontFamily: 'Avenir Next',
              textAlign: 'center',
              fontSize: 30,
              fontWeight: '600',
              color: 'white'
            }}
            >
              Orientation
            </Text>
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
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16
            }}
            >
              <Text style={{
                padding: 8,
                fontSize: 18,
                fontFamily: 'Avenir Next',
              }}
              >
                What would you like to know about CCAs?
              </Text>
            </View>
            <View>
              <Image
                style={{
                  width: 300,
                  height: 300,
                  resizeMode: 'contain'
                }}
                source={require('../assets/images/Rachel_Waving.png')}
              />
            </View>

            <ScrollView style={{
              shadowColor: 'gray',
              shadowBlur: 10,
              shadowOffset: {
                width: 2,
                height: 2
              },
              shadowOpacity: 1,
              borderRadius: 5,

              marginTop: 16,
              alignSelf: 'flex-end',
              width: '60%',
              backgroundColor: 'rgba(255, 255, 255, 0.5)'
            }}
            >
              <View style={styles.buttonView}><TouchableOpacity onPress={() => { this.props.navigation.navigate('ShowChoir'); }}><View><Text style={styles.buttonText}>I want to see some of those showchoir performances!</Text></View></TouchableOpacity></View>
              <View style={styles.buttonView}><TouchableOpacity onPress={() => { this.props.navigation.navigate('InterestingExperiences'); }}><View><Text style={styles.buttonText}>What other interesting experiences are there?</Text></View></TouchableOpacity></View>
              <View style={styles.buttonView}><TouchableOpacity onPress={() => { this.props.navigation.navigate('CCA1'); }}><View><Text style={styles.buttonText}>What are the CCAs in SST?</Text></View></TouchableOpacity></View>
            </ScrollView>
          </SafeAreaView>

          <SafeAreaView style={{
            marginTop: 16,
            marginLeft: 8,
            position: 'absolute',
          }}
          >
            <TouchableOpacity onPress={() => {
              this.props.navigation.goBack();
            }}
            >
              <Icon name="keyboard-arrow-left" color="white" size={40} />
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonView: {
    padding: 8,
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18
  }
});

export default CCAMenu;
