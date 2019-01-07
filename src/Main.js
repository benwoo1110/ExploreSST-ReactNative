import React, { Component } from 'react'
import { View, Text, YellowBox } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Entry from "./Entry";
import Year from "./Year";

//SEC 1 ----------------------------------------------------------
import Explore from './Explore';                               //-
import intro from './intro';                                   //-
import Orientation from './Orientation';                       //-
import studentExperiences from './studentExperiences';         //-
import CCAMenu from './CCAMenu';                               //-
import CCA1 from './CCA1';                                     //-
import InterestingExperiences from "./InterestingExperiences"; //-
import ShowChoir from './ShowChoir';                           //-
import CCA2 from './CCA2';                                     //-
import ChatViewRachel from './ChatViewRachel';                 //-
//SEC 1 ----------------------------------------------------------

//SEC 2
//SEC 2

//SEC 3
//SEC 3

//SEC 4
//SEC 4


YellowBox.ignoreWarnings(['Importing the stack'])

const MainStack = createStackNavigator({
  Entry: { screen: Entry },
  Year: { screen: Year },
  Explore: { screen: Explore },
  intro: {screen: intro},
  Orientation: {screen: Orientation},
  studentExperiences: {screen: studentExperiences},
  CCAMenu: {screen: CCAMenu},
  CCA1: {screen: CCA1},
  InterestingExperiences: {screen: InterestingExperiences},
  ShowChoir: {screen: ShowChoir},
  CCA2: {screen: CCA2},
  ChatViewRachel: {screen: ChatViewRachel}
});
export default createAppContainer(MainStack)
