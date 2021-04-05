import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
    style: {
          backgroundColor: '#F6F1ED',
          paddingBottom: 15,
          borderColor: '#F6F1ED',
          borderWidth: 0,
          borderTopWidth: 0,
          elevation: 0
    }
   }}
    >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Notification" component={ContactStackNavigator} />
      <Tab.Screen name="Profil" component={ContactStackNavigator} />
      <Tab.Screen name="NewRoom" component={ContactStackNavigator} />
      <Tab.Screen name="Schedule" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;