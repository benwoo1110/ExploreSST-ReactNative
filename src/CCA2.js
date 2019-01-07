import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


class CCA2 extends Component {
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

                            }} source={require('../assets//images/Farhan_Face.jpeg')}/>

                            <Text style={{
                                fontFamily: 'Avenir Next',
                                textAlign: 'center',
                                fontSize: 30,
                                fontWeight: '600',
                                color: 'white',
                                paddingLeft: 16
                            }}>Farhan</Text>
                        </View>

                        <View style={
                            styles.ChatViewStyle
                        }><Text style={
                            styles.ChatTextStyle
                        }>Hi, my name is Farhan and I am a Year 02 student. I will be sharing about the various CCAs in SST.
                        </Text></View>
                        <View style={
                            styles.ChatViewStyle
                        }><Text style={
                            styles.ChatTextStyle
                        }>SST students shine in a diverse range of mixed and sometimes eclectic fields:
                        </Text></View>
                        <ScrollView>
                        <View style={{

                            margin: 16,
                            alignItems: 'stretch',
                            justifyContent: 'center'
                        }}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('')
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
                                    }}>Sports and Games
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            margin: 16,
                            alignItems: 'stretch',
                            justifyContent: 'center'
                        }}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('')
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
                                    }}>Performing Arts
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            margin: 16,
                            alignItems: 'stretch',
                            justifyContent: 'center'
                        }}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('')
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
                                    }}>Clubs and Societies
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            margin: 16,
                            alignItems: 'stretch',
                            justifyContent: 'center'
                        }}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('')
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
                                    }}>Uniform Groups
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        </ScrollView>



                    </SafeAreaView>


                    <SafeAreaView style={{
                        marginTop: 16,
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

});

export default CCA2
