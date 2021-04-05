import React from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Profil(props){
  return(
    <View style={styles.container}>
       <StatusBar style="auto" />
      <Text>I'm Profil component</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 40
  }
})