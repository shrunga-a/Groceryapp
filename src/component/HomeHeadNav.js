import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import  { colors } from '../globals/style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const HomeHeadNav = () => {
  return (
    <View  style={styles.container}>
    <Feather name="menu" size={24} color="black" />
    
    <View style={styles.containerin}>
    <Text  style={styles.myText}>SynBasket</Text>
    <MaterialCommunityIcons name="cart-heart" size={24} color="black"  style={styles.myicon} />

    
    </View>
    <FontAwesome5 name="user-alt" size={24} color="black" />
    
    
    
    
    </View>
  )
}

export default HomeHeadNav

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    width:'100%',
    padding:10,
    alignItems: 'center',
    backgroundColor: colors.col1,
    elevation:20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  containerin:{
    flexDirection: 'row',
    alignItems: 'center',
    

  },
  myicon:{
    color: colors.text1,
  },
  myText:{
    color: colors.text1,
    fontSize: 24,


  }

  


})
