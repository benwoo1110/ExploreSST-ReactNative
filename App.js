import { createStackNavigator, createAppContainer } from "react-navigation";

import Welcome from "./src/Welcome";
import Year from "./src/Year";

import RachelIntroduction from "./src/Secondary1/RachelIntroduction";
import ChatViewSec1 from "./src/Secondary1/ChatViewSec1";
import KnowingSST from "./src/Secondary1/KnowingSST";
import CyberWellness from "./src/Secondary1/Cyberwellness";
import Orientation from "./src/Secondary1/Orientation";
import SettlingIn_CCA from "./src/Secondary1/SettlingIn_CCA";
import CCA from "./src/Secondary1/CCA";
import InterestingExperiences from "./src/Secondary1/InterestingExperiences";
import AppliedLearning from "./src/Secondary1/AppliedLearning";
import AS_DesignStudies from "./src/Secondary1/AS_DesignStudies";
import ChangeMakersProgramme from "./src/Secondary1/ChangeMakersProgramme";
import SchoolBell from "./src/Secondary1/SchoolBell";

import FarhanIntroduction from "./src/Secondary2/FarhanIntroduction";
import ConversationSelect2 from "./src/Secondary2/ConversationSelect2";
import ChatViewSec2 from "./src/Secondary2/ChatViewSec2";
import SSTINC from "./src/Secondary2/SSTINC";
import Leadership from "./src/Secondary2/Leadership";
import ISS from "./src/Secondary2/ISS";
import ACE from "./src/Secondary2/ACE";
import ChangeMakersInnofest from "./src/Secondary2/ChangeMakersInnofest";
import OEE from "./src/Secondary2/OEE";
import AS_Biotech from "./src/Secondary2/AS_Biotech";
import CCA_S2 from "./src/Secondary2/CCA_S2";
import Fencing from "./src/Secondary2/Fencing";

import PriyaIntroduction from "./src/Secondary3/PriyaIntroduction";
import ConversationSelect3 from "./src/Secondary3/ConversationSelect3";
import ChatViewSec3 from "./src/Secondary3/ChatViewSec3";
import SCITDP from "./src/Secondary3/SCITDP";

import WeiJieIntroduction from "./src/Secondary4/WeiJieIntroduction";
import ConversationSelect4 from "./src/Secondary4/ConversationSelect4";
import ChatViewSec4 from "./src/Secondary4/ChatViewSec4";

import QuestionButton from "./src/Components/QuestionButton"


const MainStack = createStackNavigator({
  Welcome: { screen: Welcome },
  Year: { screen: Year },

  RachelIntroduction: { screen: RachelIntroduction },
  ChatViewSec1: { screen: ChatViewSec1 },
  KnowingSST: { screen: KnowingSST },
  CyberWellness: { screen: CyberWellness },
  Orientation: { screen: Orientation },
  SettlingIn_CCA: { screen: SettlingIn_CCA },
  CCA: { screen: CCA },
  InterestingExperiences: { screen: InterestingExperiences },
  AppliedLearning: { screen: AppliedLearning },
  AS_DesignStudies: { screen: AS_DesignStudies },
  ChangeMakersProgramme: { screen: ChangeMakersProgramme },
  SchoolBell: { screen: SchoolBell },

  FarhanIntroduction: { screen: FarhanIntroduction },
  ConversationSelect2: { screen: ConversationSelect2 },
  ChatViewSec2: { screen: ChatViewSec2 },
  SSTINC: { screen: SSTINC },
  Leadership: { screen: Leadership },
  ISS: { screen: ISS },
  ACE: { screen: ACE },
  ChangeMakersInnofest: { screen: ChangeMakersInnofest },
  OEE: { screen: OEE },
  AS_Biotech: { screen: AS_Biotech },
  CCA_S2: { screen: CCA_S2 },
  Fencing: { screen: Fencing },

  PriyaIntroduction: { screen: PriyaIntroduction },
  ConversationSelect3: { screen: ConversationSelect3 },
  ChatViewSec3: { screen: ChatViewSec3 },
  SCITDP: { screen: SCITDP },

  WeiJieIntroduction: { screen: WeiJieIntroduction },
  ConversationSelect4: { screen: ConversationSelect4 },
  ChatViewSec4: { screen: ChatViewSec4 },

  QuestionButton: { screen: QuestionButton},
});

export default createAppContainer(MainStack);
