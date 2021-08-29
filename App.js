import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultsShowScreen";

const navigator=createStackNavigator(
{
search:SearchScreen,
ResultsShow:ResultShowScreen
},
{
  initialRouteName:"search",
  defaultNavigationOptions:{
    title:'Business Search'
  }
}
)

export default createAppContainer(navigator)