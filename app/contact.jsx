import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Link} from 'expo-router'

export default class contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Contact Page </Text>

       <Link href="/" style={styles.link}>
            <Text>Go to Home Page</Text>
        </Link>
      </View>


    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        fontWeight: 'bold'
    },
    link:{
        fontSize:16,
        color: 'blue',
        marginVertical: 10,
        borderBottomWidth:1
    }
})
