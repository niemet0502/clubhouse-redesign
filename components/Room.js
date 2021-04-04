import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Room() {
  return (
    <View style={styles.container}>
      <Text style={styles.roomTitle}>Marketing vs Branding</Text>
      <View style={styles.roomDescription}>
        <MaterialCommunityIcons name="home" size={24} color="#CEE7D9" />
        <Text style={styles.title}> Entrepreneur millionaire secrets</Text>
      </View>
      <View style={styles.userContainer}>
        <View style={styles.profilContainer}>
          <Image
              style={styles.userProfil}
              source={require('../assets/user2.jpeg')}
            />
            <Image
              style={styles.secondUserProfil}
              source={require('../assets/trojan.jpg')}
            />
        </View>
        <View style={styles.statContainer}>
          <View style={styles.microphone}>
            <MaterialCommunityIcons name="microphone" size={24} color="#C0C0C0" />
            <Text style={styles.number}>12</Text>
          </View>
          <View style={styles.account}>
            <MaterialCommunityIcons name="account-group-outline" size={24} color="#C0C0C0" />
            <Text style={styles.number}>652</Text>
          </View>
        </View>
        
      </View>
      <View style={styles.accountName}>
        <Text>John Doe, Marius Niemet, Jean Michel Basquiat</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FBF7F6',
    marginTop: 25,
    borderRadius: 15
  },
  roomTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 2
  },
  roomDescription:{
    paddingLeft: 10,
    backgroundColor: '#E9E8E6',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title:{
    textTransform: 'uppercase'
  },
  userContainer:{
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row'
  },
  userProfil:{
    width: 45,
    height: 45,
    borderRadius: 50,
    zIndex: 1
  },
  secondUserProfil:{
    width: 45,
    height: 45,
    borderRadius: 50,
    zIndex: -1,
    marginLeft: -20,
    marginTop: 2
  },
  profilContainer:{
    flexDirection: 'row',
    paddingRight: 15
  },
  statContainer:{
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15
  },
  microphone:{
    flexDirection: 'row',
    paddingRight: 30,
    alignItems: 'center',
    borderRightColor: '#C0C0C0',
    borderRightWidth: 1,
  },
  account:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15
  },
  number:{
    marginLeft: 10
  },
  accountName:{
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20
  }
})