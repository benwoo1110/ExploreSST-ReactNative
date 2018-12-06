import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Entry from "./Entry";

const MainStack = createStackNavigator({
  EntryScreen: {screen: Entry}
})

export default createAppContainer(MainStack)
