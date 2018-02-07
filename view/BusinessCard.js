import React, { Component } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import { Container, List, ListItem, Body, Right, Header, Content, Icon, Card,
  CardItem, Left, Thumbnail } from 'native-base';
import { FooterComponent } from './Footer';
import { StackNavigator } from 'react-navigation';

const sample = {
  businessName: 'KY Security Pty Ltd',
  userName: 'Nick Choong',
  email: 'kengyewchoong@gmail.com',
  mobile: '0163829009',
  address: '32, JLN USJ 3 / 3R, 47600 SUBANG JAYA',
};

export class BusinessCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data2: sample,
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>{ this.state.data2.businessName}</Text>
                </Body>
              </Left>
              <Right>
              <Body>
                <Text>{ this.state.data2.userName}</Text>
                <Text note>{ this.state.data2.mobile}</Text>
              </Body>
              </Right>
            </CardItem>
            <CardItem>
                <Body>
                  <Text note>{ this.state.data2.email}</Text>
                  <Text>{ this.state.data2.address}</Text>
                </Body>
            </CardItem>
           </Card>
        </Content>
      </Container>
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
