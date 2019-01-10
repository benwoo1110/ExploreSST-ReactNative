import React, { Component } from 'react';
import YellowBox from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Entry from './Entry';
import Year from "./Year";


import Explore from './Explore';
import intro from './intro';                  
import Orientation from './Orientation';
import studentExperiences from './studentExperiences';
import CCAMenu from './CCAMenu';
import CCA1 from './CCA1';
import InterestingExperiences from "./InterestingExperiences";
import ShowChoir from './ShowChoir';
import CCA2 from './CCA2';
import ChatViewRachel from './ChatViewRachel';

YellowBox.ignoreWarnings(['Importing the stack']);

const MainStack = createStackNavigator({
  Entry: { screen: Entry },
  Year: { screen: Year },
  Explore: { screen: Explore },
  intro: { screen: intro },
  Orientation: { screen: Orientation},
  studentExperiences: {screen: studentExperiences},
  CCAMenu: {screen: CCAMenu},
  CCA1: {screen: CCA1},
  InterestingExperiences: {screen: InterestingExperiences},
  ShowChoir: {screen: ShowChoir},
  CCA2: {screen: CCA2},
  ChatViewRachel: {screen: ChatViewRachel}
});
export default createAppContainer(MainStack)
