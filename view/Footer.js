/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  View
} from 'react-native';
import { Container,
  Header, Content, Icon, Footer, FooterTab, Button } from 'native-base';
import { TabNavigator } from 'react-navigation';
import BusinessForm from './BusinessForm';
import Home from './Home';

// const tabNav = TabNavigator(
// {
//   Home: { screen: HomeScreen },
//   Settings: { screen: SettingsScreen },
// },
// {
//   navigationOptions: ({ navigation }) => ({
//     tabBarIcon: ({ focused, tintColor }) => {
//       const { routeName } = navigation.state;
//       let iconName;
//       if (routeName === 'Home') {
//         iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//       } else if (routeName === 'Settings') {
//         iconName = `ios-options${focused ? '' : '-outline'}`;
//       }
//
//       // You can return any component that you like here! We usually use an
//       // icon component from react-native-vector-icons
//       return <Ionicons name={iconName} size={25} color={tintColor} />;
//     },
//   }),
//   tabBarComponent: TabBarBottom,
//   tabBarPosition: 'bottom',
//   tabBarOptions: {
//     activeTintColor: 'tomato',
//     inactiveTintColor: 'gray',
//   },
//   animationEnabled: false,
//   swipeEnabled: false,
// }
// );

export class FooterComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Footer>
          <FooterTab>
            <Button vertical active
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="apps" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical
            onPress={() => this.props.navigation.navigate('BusinessForm')}>
              <Icon name="person" />
              <Text>Business</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
