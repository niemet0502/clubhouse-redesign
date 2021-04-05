import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackNavigator } from "./navigation/StackNavigator";
import BottomTabNavigator from "./navigation/TabNavigator";
const Upcoming = [
  {
    index: 1,
    title: 'Startup club',
    date: '10:30 PM',
    description: 'UX for Startups: Design System'
  },
  {
    index: 2,
    title: 'Live & Clicking',
    date: '12:30 PM',
    description: 'How to make an impact online'
  }
]

const Stack = createStackNavigator();

export default function App() {
  return (   
    <NavigationContainer>
     <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
