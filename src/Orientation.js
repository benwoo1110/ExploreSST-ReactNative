import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { FILE_URL } from './constants'
import Icon from 'react-native-vector-icons/MaterialIcons'

class Orientation extends Component {
    static navigationOptions = {
        header: null
    }
    render() {

        return (
            <View style={{
                flex: 1,
                backgroundColor: 'black'
            }}>
                <ImageBackground source={{ uri: FILE_URL + '/images/go.png' }}
                    style={{
                        flex: 1, resizeMode: 'contain'
                    }} imageStyle={{ opacity: 0.5 }}>
                    <SafeAreaView style={{
                        flex: 1,
                        margin: 16
                    }}>
                        <Text style={{
                            fontFamily: 'Avenir Next',
                            textAlign: 'center',
                            fontSize: 30,
                            fontWeight: '600',
                            color: 'white'
                        }}>Orientation</Text>

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
                        }}>So many new poeple and experiences to talk about, where would you like me to start ? </Text></View>
                        <View>
                            <Image style={{
                                width: 300,
                                height: 300,
                                resizeMode: 'contain'
                            }} source={{ uri: FILE_URL + '/images/Rachel_Waving.png' }} />
                        </View>

                        <ScrollView style={{

                            width: '60%',  
                            backgroundColor: 'white',
                            shadowColor: 'gray',
                            shadowBlur: 10,
                            shadowOffset: {
                                width: 2,
                                height: 2
                            },
                            shadowOpacity: 1,
                            borderRadius: 5,

                            marginTop: 16,
                            alignSelf: "flex-end",
                       
                            backgroundColor: 'rgba(255, 255, 255, 0.5)'
                        }}>
                            <View style={styles.buttonView}><TouchableOpacity onPress={() => {this.props.navigation.navigate("KnowingSST")}}><View><Text style={styles.buttonText}>How did you get to know SST?</Text></View></TouchableOpacity></View> 
                            <View style={styles.buttonView}><TouchableOpacity onPress={() => {this.props.navigation.navigate("makingFriends")}}><View><Text style={styles.buttonText}>I hear that students come from different primary schools here. How do you make friends?</Text></View></TouchableOpacity></View>
                            <View style={styles.buttonView}><TouchableOpacity onPress={() => {this.props.navigation.navigate("badgeNight")}}><View><Text style={styles.buttonText}>What is Badge Night?</Text></View></TouchableOpacity></View>
                            <View style={styles.buttonView}><TouchableOpacity onPress={() => {this.props.navigation.navigate("cyberWellness")}}><View><Text style={styles.buttonText}>Tell me more about Cyber Wellness in SST</Text></View></TouchableOpacity></View>
                            <View style={styles.buttonView}><TouchableOpacity onPress={() => {this.props.navigation.navigate("settlingIn")}}><View><Text style={styles.buttonText}>How else did you settle in?</Text></View></TouchableOpacity></View>
                            <View style={styles.buttonView}><TouchableOpacity onPress={() => {this.props.navigation.navigate("studentExperiences")}}><View><Text style={styles.buttonText}>Student Experiences in SST</Text ></View></TouchableOpacity></View>
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
        padding: 8,
        margin: 8,
        backgroundColor: 'white',
        borderRadius: 5
      },
      buttonText:{
          fontSize: 18
      }
   
    
});
export default Orientation
