import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from './Components/Home/HomeScreen';
import SearchTabNavigator from './Components/Search/SearchScreen';

const AppNavigator = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  SearchTabNavigator: {screen: SearchTabNavigator},
});

export default createAppContainer(AppNavigator);
