import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './WelCome';
import SignUpEmailPage from './Signup';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomePage} />
          <Stack.Screen name="SignUpEmail" component={SignUpEmailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import GetStartedButton from './GetStartedButton';

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.fadeAnimation = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.fadeAnimation, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.containerClub}>
          <Animated.Text
            style={[styles.title, { opacity: this.fadeAnimation }]}>
            Word
          </Animated.Text>
        </View>

        <View style={styles.containerCaption}>
          <Animated.Text
            style={[styles.caption, { opacity: this.fadeAnimation }]}>
            words words words
          </Animated.Text>
        </View>

        <View style={styles.containerBottom}>
          <GetStartedButton
            onPress={() => this.props.navigation.navigate('SignUpEmail')}
          />
        </View>
      </View>
    );
  }
}


import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class GetStartedButton extends Component {
  constructor(props) {
    super(props);

    this.fadeAnimation = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.timing(this.fadeAnimation, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={[styles.container, { opacity: this.fadeAnimation }]}>
        <TouchableOpacity
          onPress={() => {
            this.props.onPress();
          }}>
          <LinearGradient
            colors={['#DB004C', '#FC008E']}
            style={styles.linearGradient}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}>
            <Text style={styles.text}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
