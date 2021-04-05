import React from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function NewRoom(props){
  return(
    <View style={styles.container}>
       <StatusBar style="auto" />
      <Text>I'm NewRoom component</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 40
  }
})