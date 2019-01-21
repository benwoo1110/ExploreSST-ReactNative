import { createStackNavigator, createAppContainer } from 'react-navigation';
import Entry from './Entry';
import Year from './Year';
import Explore from './Explore';
import intro from './intro';
import Orientation from './Orientation';
import CCAMenu from './CCAMenu';
import CCA1 from './CCA1';
import ShowChoir from './ShowChoir';
import CCA2 from './CCA2';
import FirstChatView from './FirstChatView';
import SecondChatView from './SecondChatView';
import FarhanIntro from './SecondaryTwo/FarhanIntro';
import ConversationSelect2 from './SecondaryTwo/ConversationSelect2';
import ChatViewSec2 from './SecondaryTwo/ChatViewSec2';

const MainStack = createStackNavigator({
  Entry: { screen: Entry },
  Year: { screen: Year },
  Explore: { screen: Explore },
  intro: { screen: intro },
  Orientation: { screen: Orientation },
  CCAMenu: { screen: CCAMenu },
  CCA1: { screen: CCA1 },
  ShowChoir: { screen: ShowChoir },
  CCA2: { screen: CCA2 },
  FirstChatView: { screen: FirstChatView },
  SecondChatView: { screen: SecondChatView },
  FarhanIntro: { screen: FarhanIntro },
  ConversationSelect2: { screen: ConversationSelect2 },
  ChatViewSec2: { screen: ChatViewSec2 }
});
export default createAppContainer(MainStack);
