import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FILE_URL } from './constants'

class makingFriends extends Component {
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
                        }}>Making friends is easy especially through the Orientation Programme.
                         I was so nervous I couldn’t sleep the night before I started school! 😆.
                         Officially, orientation starts on the first day of the year but SST prepares us from Registration Day.
                         We get guidance on what’s to happen in the first week of school, how do we prepare for it, and of course booklists, uniforms and our learning device.
                         The orientation itself is organised seniors in SST. For me, the experience was a fun one. You get to know the SST community and learn what is expected of all students.
                         Because this is a small community, everyone looks out for one another.
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
            </View >
        )
    }
}

export default makingFriends
