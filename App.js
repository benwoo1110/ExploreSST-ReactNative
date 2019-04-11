import { createStackNavigator, createAppContainer } from "react-navigation";

import Welcome from "./src/Welcome";
import Year from "./src/Year";

import RachelIntroduction from "./src/Secondary1/RachelIntroduction";
import ChatViewSec1 from "./src/Secondary1/ChatViewSec1"

import FarhanIntroduction from "./src/Secondary2/FarhanIntroduction";
import ConversationSelect2 from "./src/Secondary2/ConversationSelect2";
import ChatViewSec2 from "./src/Secondary2/ChatViewSec2";

import PriyaIntroduction from "./src/Secondary3/PriyaIntroduction";
import ConversationSelect3 from "./src/Secondary3/ConversationSelect3";
import ChatViewSec3 from "./src/Secondary3/ChatViewSec3";

import WeiJieIntroduction from "./src/Secondary4/WeiJieIntroduction";
import ConversationSelect4 from "./src/Secondary4/ConversationSelect4";
import ChatViewSec4 from "./src/Secondary4/ChatViewSec4";

import QuestionButton from "./src/Components/QuestionButton"


const MainStack = createStackNavigator({
  Welcome: { screen: Welcome },
  Year: { screen: Year },

  RachelIntroduction: { screen: RachelIntroduction },
  ChatViewSec1: { screen: ChatViewSec1 },

  FarhanIntroduction: { screen: FarhanIntroduction },
  ConversationSelect2: { screen: ConversationSelect2 },
  ChatViewSec2: { screen: ChatViewSec2 },

  PriyaIntroduction: { screen: PriyaIntroduction },
  ConversationSelect3: { screen: ConversationSelect3 },
  ChatViewSec3: { screen: ChatViewSec3 },

  WeiJieIntroduction: { screen: WeiJieIntroduction },
  ConversationSelect4: { screen: ConversationSelect4 },
  ChatViewSec4: { screen: ChatViewSec4 },

  QuestionButton: { screen: QuestionButton},
});
export default createAppContainer(MainStack);
