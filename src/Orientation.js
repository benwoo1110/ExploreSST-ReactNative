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
                <ImageBackground source={{ uri: FILE_URL + '/go.png' }}
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
                            }} source={{ uri: FILE_URL + '/Rachel_Waving.png' }} />
                        </View>

                        <ScrollView>
                            <View style={styles.nextB}><TouchableOpacity onPress={() => {this.props.navigation.navigate("knowingSST")}}><View><Text>How did you get to know SST?</Text></View></TouchableOpacity></View>
                            <View style={styles.nextB}><TouchableOpacity onPress={() => {this.props.navigation.navigate("makingFriends")}}><View><Text>I hear that students come from different primary schools here. How do you make friends?</Text></View></TouchableOpacity></View>
                            <View style={styles.nextB}><TouchableOpacity onPress={() => {this.props.navigation.navigate("badgeNight")}}><View><Text>Move on to badge night</Text></View></TouchableOpacity></View>
                            <View style={styles.nextB}><TouchableOpacity onPress={() => {this.props.navigation.navigate("cyberWellness")}}><View><Text>Tell me more about Cyber Wellness in SST</Text></View></TouchableOpacity></View>
                            <View style={styles.nextB}><TouchableOpacity onPress={() => {this.props.navigation.navigate("settlingIn")}}><View><Text>How else did you settle in?</Text></View></TouchableOpacity></View>
                            <View style={styles.nextB}><TouchableOpacity><View><Text>Student Experiences in SST</Text></View></TouchableOpacity></View>

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
    nextB: {
        paddingTop: 10,
        alignSelf: "flex-end",
        width: '60%'
      },
    
})
export default Orientation
