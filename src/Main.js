import React, { Component } from 'react'
import { View, Text, YellowBox } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Entry from "./Entry";
import Year from "./Year";

import Orientation1 from "./Orientation1";

const MainStack = createStackNavigator({
  Entry: {screen: Entry},
  Year: {screen: Year},
  // Orientation1: {screen: Orientation1}

import Intro from "./Intro";
import Explore from './Explore'

YellowBox.ignoreWarnings(['Importing the stack'])

const MainStack = createStackNavigator({
  Entry: { screen: Entry },
  Year: { screen: Year },
  Intro: { screen: Intro },
  Explore: { screen: Explore }

})

export default createAppContainer(MainStack)
