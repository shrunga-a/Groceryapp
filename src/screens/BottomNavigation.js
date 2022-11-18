
import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

import { FontAwesome } from '@expo/vector-icons';
import  { colors } from '../globals/style';

import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const HomeHeadNav = () => {
  return (
    <View  style={styles.container}>
    
    <View style={styles.containerin} >
    <FontAwesome5 name="shopping-bag" size={24} color="black"  />
    <Text> Products</Text>
    </View>

    <View style={styles.containerin}  >
    <Feather name="shopping-cart" size={24} color="black" />
    <Text> My Cart</Text>
    </View>

    <View style={styles.containerin}>
    <FontAwesome5 name="smile" size={24} color="black" />
    <Text> About</Text>
    </View>

    <View style={styles.containerin}>
    <FontAwesome name="user-circle" size={24} color="black" />
    <Text>My Profile</Text>
    </View>
    
    </View>
  )
}

export default HomeHeadNav

const styles = StyleSheet.create({
  // container: {
  //   flexDirection: 'row',
  //   justifyContent:'space-between',
  //   width:'100%',
  //   padding:10,
  //   alignItems: 'center',
  //   backgroundColor: '#EEEFE6',
  //   elevation:50,
  //   borderBottomLeftRadius: 20,
  //   borderBottomRightRadius: 20,
  //   marginTop:'150%',
  //   height:70,
  // },
  // containerin:{

  //   alignItems: 'center',
    

  // },
  // myicon:{
  //   color: colors.text1,
  // },
  // myText:{
  //   color: colors.text1,
  //   fontSize: 24,


  // }

  


})

