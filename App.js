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
import { Icon } from 'native-base';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { BusinessForm } from './view/BusinessForm';
import { Home } from './view/Home';
import { Footer } from './view/Footer';
import { BusinessCard } from './view/BusinessCard';

const HomeNav = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    BusinessCard: {
      screen: BusinessCard,
    },
  });
const TabNav = TabNavigator(
  {
    Home: {
      screen: HomeNav,
      navigationOptions: {
        tabBarLabel:"Home",
        tabBarIcon: ({ tintColor }) => <Icon name="apps"/>
      }
    },
    BusinessForm: {
      screen: BusinessForm,
      navigationOptions: {
        tabBarLabel:"Business",
        tabBarIcon: ({ tintColor }) =>  <Icon name="person"/>
      }
    },
  }, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });
export default class App extends Component {
  render() {
    return <TabNav></TabNav>;
  }
}
