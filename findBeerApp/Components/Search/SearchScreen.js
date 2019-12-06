import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'native-base';

class SearchTabNavigator extends Component {
  render() {
    return (
      <View>
        <Button block={true}>
          <Text>Search</Text>
        </Button>
      </View>
    );
  }
}

export default SearchTabNavigator;
