import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Build Cluhouse Redesign!</Text>
      <View style={styles.searchWrapper}>
      <TextInput style={styles.input} placeholder={'Find people & clubs'}/>
      <View style={styles.userWrapper}>
        <Image
          style={styles.userProfil}
          source={require('./assets/user.jpeg')}
        />
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F1ED',
    paddingTop: 50,
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
  }
});
