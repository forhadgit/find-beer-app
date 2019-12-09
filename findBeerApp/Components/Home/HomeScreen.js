/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'native-base';

var backGroundImage = require('../../assets/Home/bgimage.jpg');

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.homeScreenView}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
          }}>
          <Image
            source={backGroundImage}
            style={{flex: 1, height: null, width: null}}
          />
        </View>
        <Button
          block={true}
          onPress={() => this.props.navigation.navigate('SearchTabNavigator')}>
          <Text style={{color: 'white'}}>Search Beer</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeScreenView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default HomeScreen;
