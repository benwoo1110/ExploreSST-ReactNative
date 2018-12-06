import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Entry from "./Entry";
import Year from "./Year";

const MainStack = createStackNavigator({
  Entry: {screen: Entry},
  Year: {screen: Year}
})

export default createAppContainer(MainStack)
