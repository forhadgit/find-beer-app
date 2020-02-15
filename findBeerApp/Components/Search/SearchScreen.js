import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import SearchTab from '../../Components/Search/tabNavigator/SearchTab';
import FavouriteTab from '../../Components/Search/tabNavigator/FavouriteTab';
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Settings: {screen: SettingsScreen},
},
);

export default createAppContainer(TabNavigator);
