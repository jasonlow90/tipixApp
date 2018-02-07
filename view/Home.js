import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  View,
  ListView
} from 'react-native';
import { Container, List, ListItem, Body,
  Header, Content, Icon, Footer, FooterTab, Button } from 'native-base';
import { FooterComponent } from './Footer';
import { StackNavigator } from 'react-navigation';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const sample = [
  {
    businessName: 'Hong Leong Bank',
    userName: 'John Lim',
  },
  {
    businessName: 'KY Security Pty Ltd',
    userName: 'Nick Choong',
  },
  {
    businessName: 'Oregi Restaurant',
    userName: 'HJ Lee',
  },
];
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ds.cloneWithRows(sample),
      data2: sample,
    }
  }

  render() {
    return (
      <List dataArray={this.state.data2}
        renderRow={(data) => (<ListItem onPress={() => this.props.navigation.navigate('BusinessCard')}>
                                <Body>
                                    <Text>{data.businessName}</Text>
                                    <Text>{data.userName}</Text>
                                </Body>
                              </ListItem>)}>
      </List>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  footer: {
  }
});
