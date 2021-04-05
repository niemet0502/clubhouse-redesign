import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../components/Home';
import RoomDetails from "../components/RoomDetails"

const screenOptionStyle = {
  headerShown: false
};

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RoomDetails" component={RoomDetails} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="RoomDetails" component={RoomDetails} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator };