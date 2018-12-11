import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FILE_URL } from './constants'

class makingFriends extends Component {
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

                </ImageBackground>
            </View>
        )
    }
}

export default makingFriends
