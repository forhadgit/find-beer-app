import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Footer, FooterTab, Button, Icon} from 'native-base';

import SearchTab from '../../Components/Search/tabNavigator/SearchTab';
import FavouriteTab from '../../Components/Search/tabNavigator/FavouriteTab';

const SearchTabNavigator = createStackNavigator(
  {
    SearchTab: {screen: SearchTab},
    FavouriteTab: {screen: FavouriteTab},
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="beer"></Icon>
              <Text>Search</Text>
            </Button>

            <Button vertical>
              <Icon name="star"></Icon>
              <Text>Favourite</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
  },
);

export default createAppContainer(SearchTabNavigator);
