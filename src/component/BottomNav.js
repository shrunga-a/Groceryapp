import React from 'react'
import {View ,Text ,StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { colors } from '../globals/style';

const BottomNav = ({navigation}) => {
  return (
    <View style={style.contaire}>
     <View style={style.btncon1}>
     <FontAwesome name="home" size={30} color="red" onPress={()=> {navigation.navigate('Home')}} />
 
     </View>

     <View style={style.btncon2}>
     <Ionicons name="search-circle" size={40} color="black"  onPress={()=> {navigation.navigate('Home')}}/>
     </View>

     <View style={style.btncon1}>
     <Entypo name="shopping-cart" size={30} color="red" onPress={()=> {navigation.navigate('cart')}} />
 
     </View>

     <View style={style.btncon1}>
     <Fontisto name="map-marker-alt" size={30} color="red"  onPress={()=> {navigation.navigate('Home')}}/>
 
     </View>

    </View>
  )
}

export default BottomNav

const style = StyleSheet.create({
    contaire:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        elevation: 30,
        borderTopColor: colors.text1,
        borderTopWidth: 0.5,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    },
    icon1:{
        color: colors.text1,
    },
    icon2:{
        color: 'white',

    },
    btncon2:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: -19,
        backgroundColor: colors.text1,
        width: 60,
        height: 60,
        borderRadius: 60,
        elevation: 20,
    },
    btncon1:{
        elevation: 10,
        backgroundColor: colors.col1,
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        

    },



})