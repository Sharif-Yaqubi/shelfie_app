import React, { Component } from 'react'
import {Stack} from 'expo-router'
import { Text, StyleSheet, View } from 'react-native'

export default class _layout extends Component {
  render() {
    return (
        <Stack screenOptions ={{
            headerStyle:{backgroundColor: '#f4511e'},
            headerTintColor: '#fff',
            headerTitleStyle:{fontWeight: 'bold'}
        }}>    
        <Stack.Screen name="index" options={{title:'Home'}}/>
        <Stack.Screen name="about" options={{title:'About'}}/>
        <Stack.Screen name="contact" options={{title:'Contact', headerShown: false}}/>
        </Stack>
    )
  }
}

const styles = StyleSheet.create({})
