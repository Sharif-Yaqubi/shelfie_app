import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Logo  from '../assets/images/logo.png'
 const index = () => {
    return (
      <View style={styles.container}>
        <Image source={Logo} style={styles.image} />
        <Text style={styles.title}> Sharif Start working </Text>
        <Text style ={{margin: 10, marginBottom: 10}}> Hello Sharif How are you! </Text>

        <View style={styles.card}>
            <Text>Hello, this is a Card</Text>
        </View>
      </View>
    )
  }

 export default index 

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
    card:{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    image:{
        marginBottom: 20,
        width: 100,
        height: 100
    }
})