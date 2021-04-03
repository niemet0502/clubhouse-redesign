import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Upcoming = [
  {
    title: 'Startup club',
    date: '10:30 PM',
    description: 'UX for Startups: Design System'
  },
  {
    title: 'Live & Clicking',
    date: '10:30 PM',
    description: 'How to make an impact online'
  }
]

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.searchWrapper}>
        <TextInput style={styles.input} placeholder={'Find people & clubs'}/>
        <View style={styles.userWrapper}>
          <Image
            style={styles.userProfil}
            source={require('./assets/user.jpeg')}
          />
        </View>
      </View>

      <View style={styles.upcomingRoom}>
        <View style={styles.roomContainer}>
          <MaterialCommunityIcons name="home" size={24} color="#CEE7D9" />
          <View style={styles.iconContainer}>
            <View style={styles.roomTitle}>
              <Text style={styles.title}>Startup club</Text>
              <Text style={styles.roomTime}>10:30 PM</Text>
            </View>
            <Text style={styles.description}>UX for Startups: Design System</Text>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F1ED',
    paddingTop: 70,
    paddingLeft: 20,
    paddingRight: 20
  },
  searchWrapper:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input:{
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 220,
    paddingLeft: 20,
    borderRadius: 15
  },
  userProfil:{
    width: 45,
    height: 45,
    borderRadius: 50
  },
  userWrapper:{
    padding: 5,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 15
  },
  upcomingRoom:{
    marginTop: 35,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10
  },
  roomContainer:{
    display: 'flex',
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 1,
    paddingLeft: 7
  },
  roomTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    textTransform: 'uppercase',
  },
  description: {
    marginTop: 5,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  roomTime:{
    color: '#C0C0C0'
  }
});
