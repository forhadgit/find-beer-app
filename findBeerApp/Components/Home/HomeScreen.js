import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';




class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.homeScreenView}>
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
