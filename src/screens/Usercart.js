import React, { useEffect, useState } from 'react'
import { Text, View ,StyleSheet,TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import  {navbtn,navbtnin, navbtnout, colors,btn2} from '../globals/style'

import {firebase} from '../../Firebase/FirebaseConfig'
import BottomNav from '../component/BottomNav';

const Usercart = ({navigation}) => {
    const [cartdata,setcartdata] =useState(null);
    const [totalCost,settotalcost] = useState('0');

    const getCartData =async () =>{
        const docRef = firebase.firestore().collection('UserCart').doc(firebase.auth().
       currentUser.uid);

       docRef.get().then((doc)=>{
        if(doc.exists){
            //console.log('data exists')
            const data = JSON.stringify(doc.data());

           // console.log(data);
           setcartdata(data);
        }
        else{
            console.log('NO such document')
        }

       }).catch((error)=>{
        console.log('Error getting doc',error);


       })
    }
    useEffect(()=>{
        getCartData();
    },[]);

  //  console.log(cartdata);


  return (
   <View style={styles.cotainerout}>
   <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={navbtnout}>
   <View style={navbtn}>
   <Ionicons name="md-arrow-back" size={24} color="white"  style={navbtnin}/>
   
   </View>
   
   </TouchableOpacity>

   <View style={styles.bottomnav}>
   <BottomNav navigation={navigation}/>
   </View>
   <View style={styles.container}>
   <Text style={styles.head1}>Your Cart</Text>
   {cartdata == null || JSON.parse(cartdata).cart.length == 0 ?                      //condection to show the datain the cart
    <Text style={styles.head2}>Your Cart is empty</Text>
    : 
    <Text style={styles.head2}>Your Cart had data</Text>}


   
   </View>

  
   </View>
  )
}

export default Usercart

const styles = StyleSheet.create({
  
    cotainerout:{
        flex: 1,
        backgroundColor: colors.col1,
        width: '100%',
        
    },
    bottomnav:{
        position: 'absolute',
        bottom:0,
        width: '100%',
        backgroundColor: colors.col1,
        zIndex: 20,
    
    },
    container:{
        flex: 1,
        backgroundColor: colors.col1,
        width: '100%',
        alignItems: 'center',
    }

   
   


})
