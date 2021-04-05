import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../components/Home';
import RoomDetails from "../components/RoomDetails"
import Profil from "../components/Profil"
import Schedule from "../components/Schedule"
import Notification from "../components/Notification"
import NewRoom from "../components/NewRoom"
const screenOptionStyle = {
  headerShown: false
};

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false,
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
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Profil" component={Profil} />
      <Stack.Screen name="NewRoom" component={NewRoom} />
      <Stack.Screen name="Schedule" component={Schedule} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator };