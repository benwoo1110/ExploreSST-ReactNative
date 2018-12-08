import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Entry from "./Entry";
import Year from "./Year";
import Orientation1 from "./Orientation1";

const MainStack = createStackNavigator({
  Entry: {screen: Entry},
  Year: {screen: Year},
  // Orientation1: {screen: Orientation1}
})

export default createAppContainer(MainStack)
