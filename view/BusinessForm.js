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
import { FooterComponent } from './Footer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export class BusinessForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessName: '',
      userName: '',
      email: '',
      mobile: '',
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={{ textAlign: 'center' }}>Business Form:</Text>
        <View style={{ flex: 1}}>
          <TextInput
            style={styles.form}
            placeholder="Business Name"
            onChangeText={(text2) => this.setState({text2})}
            value={this.state.businessName}
          />
          <TextInput
            style={styles.form}
            placeholder="User Name"
            onChangeText={(text) => this.setState({text})}
            value={this.state.userName}
          />
          <TextInput
            style={styles.form}
            placeholder="Email"
            onChangeText={(text) => this.setState({text})}
            value={this.state.email}
          />
          <TextInput
            style={styles.form}
            placeholder="Mobile"
            onChangeText={(text) => this.setState({text})}
            value={this.state.mobile}
          />
        </View>
        <Button primary block><Text style={{color: '#fff'}}>Submit</Text></Button>
      </ScrollView>
      </View>
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
  form: {
    height: 40,
    borderColor: 'gray',
    marginBottom: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  footer: {
  }
});
