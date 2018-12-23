import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FILE_URL } from './constants'

class settlingIn extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default settlingIn
