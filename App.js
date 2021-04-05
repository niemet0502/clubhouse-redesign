import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { ScrollView, StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home';
import RoomDetails from "./components/RoomDetails"
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
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="RoomDetails"
          component={RoomDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
