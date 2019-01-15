import { createStackNavigator, createAppContainer } from 'react-navigation';
import Entry from './Entry';
import Year from './Year';
import Explore from './Explore';
import intro from './intro';
import Orientation from './Orientation';
import CCAMenu from './CCAMenu';
import CCA1 from './CCA1';
import InterestingExperiences from './InterestingExperiences';
import ShowChoir from './ShowChoir';
import CCA2 from './CCA2';
import FirstChatView from './FirstChatView';

const MainStack = createStackNavigator({
  Entry: { screen: Entry },
  Year: { screen: Year },
  Explore: { screen: Explore },
  intro: { screen: intro },
  Orientation: { screen: Orientation },
  CCAMenu: { screen: CCAMenu },
  CCA1: { screen: CCA1 },
  InterestingExperiences: { screen: InterestingExperiences },
  ShowChoir: { screen: ShowChoir },
  CCA2: { screen: CCA2 },
  FirstChatView: { screen: FirstChatView }
});
export default createAppContainer(MainStack);
