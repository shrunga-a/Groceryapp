import React, { useState } from 'react'
import {Text,View,StyleSheet, ScrollView,TouchableOpacity,Image, TextInput} from 'react-native'
import style, { product, dairyproduct, hr80 ,incdecbtn ,incdecinput ,incdecout } from '../globals/style';
import { Ionicons } from '@expo/vector-icons';
import  {navbtn,navbtnin,containerout, navbtnout, colors,btn2} from '../globals/style'

import {firebase} from '../../Firebase/FirebaseConfig'
const Productpage = ({navigation ,route}) => {

    const data = route.params;  

    if(route.params === undefined){
        navigation.navigate('Home')
    }
    const [quantity,setquantity] =useState('1');
    const [addonquantity,setaddonquantity] = useState('0');


    const addtocart =()=>{
       // console.log('add to cart')

       const docRef = firebase.firestore().collection('UserCart').doc(firebase.auth().
       currentUser.uid);

       const data1 ={data,Addonquantity : addonquantity,groceryquantity : quantity }
       // console.log('data1',data1)

       docRef.get().then((doc) => {
        if(doc.exists){
            docRef.update({
                cart: firebase.firestore.FieldValue.arrayUnion(data1)
            })
            alert('your item is Added to cart')


        }
        else{
            docRef.set({
                cart : [data1],
            })
            alert('your item is Added to cart')
        
        }


       })

       }

       const increaseQuantity =()=>{
        setquantity((parseInt(quantity)+1).toString())
       }

       const decreaseQuantity =()=>{
        if(parseInt(quantity)>1){
            setquantity((parseInt(quantity)-1).toString())

        }
        
       }

       const increaseAddonQuantity =()=>{
        setaddonquantity((parseInt(addonquantity)+1).toString())
       }

       const decreaseAddonQuantity =()=>{
        if(parseInt(addonquantity)>0){
            setaddonquantity((parseInt(addonquantity)-1).toString())

        }
        
       }



    
    //console.log('product page data', data)
    
    //params is used to get all te data
  return (
   <ScrollView style={styles.container}>
   <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={navbtnout}>
   <View style={navbtn}>
   <Ionicons name="md-arrow-back" size={24} color="white"  style={navbtnin}/>
   
   </View>
   
   </TouchableOpacity>

   <View style={styles.container1}>
   <View style={styles.s1}>
   <Image source={{uri: data.groceryimageUrl}}
    style={styles.cardimgin}/>
   </View>

   <View style={styles.s2}>
   <View  style={styles.s2in}>
   <Text style={styles.head1}> {data.groceryname}</Text>
   <Text style={styles.head2}>Rs.{data.groceryPrice}/-</Text>
   </View>

   <View style={styles.s3}>
   <Text style={styles.head3}>Description </Text>
   <Text style={styles.head4}>{data.grocerydescription} </Text>
   <View style={styles.s3in}>
   {data.groceryType == 'Products' ? <Text style={product}></Text> : <Text style={dairyproduct}></Text>}
   <Text  style={styles.head5}>{data.groceryType}</Text>
   </View>

   
   </View>

   <View style={styles.container2}>
   <Text style={styles.txt1}>Shop Location</Text>
   <Text style={styles.txt2}>{data.groceryShopname}</Text>
   <View style={styles.container2in}>
   <Text style={styles.txt3}>{data.groceryshopAddressBulding}</Text>
   <View style={styles.dash}/>
   <Text style={styles.txt3}>{data.groceryShopAddressStreet} </Text>
   <View style={styles.dash}/>
   <Text style={styles.txt3}>{data.groceryShopAddressCity} </Text>
   <View style={styles.dash}/>
   </View>
   
    </View>


    {data.groceryAddonPrice != '' && 
        
        <View style={styles.container3}>
        <View style={styles.hr81}></View>
        <Text style={styles.txt6}>Any Addons?</Text>
        <View style={styles.c3in}>
        <Text style={styles.txt5}>{data.groceryAddon}</Text>
        <Text style={styles.txt5}>Rs.{data.groceryAddonPrice}/-</Text>
        </View>
        <View style={incdecout}>
        <Text style={incdecbtn} onPress={()=> increaseAddonQuantity()}>+</Text>
        <TextInput  value={addonquantity} style={incdecinput}/>
        <Text  style={incdecbtn} onPress={()=> decreaseAddonQuantity()}>-</Text>
        
        </View>
     
        </View>
    }

   <View style={styles.container3}>
   <View style={styles.hr81}/>
   <Text style={styles.txt6}>Product Quantitiy </Text>
   <View style={incdecout}>
   <Text style={incdecbtn} onPress={()=> increaseQuantity()}>+</Text>
   <TextInput  value={quantity} style={incdecinput}/>
   <Text  style={incdecbtn} onPress={()=> decreaseQuantity()}>-</Text>
   
   </View>

   
   
   </View>
   
   </View>

   <View style={styles.container4}>
   <View style={styles.c4in}>
   <Text style={styles.txt2}> Total Price</Text>
   {data.groceryAddonPrice != "" ?  <Text style={styles.txt6}>Rs.
   {((parseInt(data.groceryPrice) * parseInt(quantity)

    ) + parseInt(addonquantity)*parseInt(data.groceryAddonPrice)
    
    ).toString()}/-
    
    </Text> :<Text style={styles.txt6}>Rs.
   {(parseInt(data.groceryPrice) * parseInt(quantity)

   ).toString()}/-
   </Text> }
   
   </View>
   <View style={styles.hr81}/>
   
   </View>

   <View style={styles.btncont}>
   <TouchableOpacity style={btn2} onPress={()=> addtocart()}>
   <Text style={styles.btntxt}> Add to Cart</Text> 
   </TouchableOpacity>
   
   <TouchableOpacity style={btn2}>
   <Text style={styles.btntxt}>Buy Now</Text>
   </TouchableOpacity>
   
   </View>

   </View>
   </ScrollView>
  )
}

export default Productpage

const styles= StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
    },
    container1:{
        flex: 1,
        backgroundColor: '#fff',

    },
    s1:{
        width: '100%',
        height: 300,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',


    },
    cardimgin:{
        // width: '100%',
        // height: '100%',
        width: '40%',
        height: 150,
        alignSelf: 'center',
    
    },
    s2:{
        // width: '100%',
        // height: 30,
        width: '100%',
        padding: 20,
        position: 'relative',
        top: -30,
        backgroundColor: colors.col1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    s2in:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        // marginLeft: 20,
        // marginRight: 20,

    },
    head1:{
        fontSize: 20,
        fontWeight: '200',
        color: colors.text1,
        width: 220,
        marginRight: 10,
    },
    head2:{
        fontSize: 25,
        fontWeight: '200',
        color: colors.text3,
    },
    s3: {
        backgroundColor: colors.text1,
        padding: 20,
        borderRadius: 20,
    },
    head3: {
        fontSize: 30,
        fontWeight: '200',
        color: colors.col1,
    },
    head4: {
        marginVertical: 10,
        fontSize: 20,
        fontWeight: '400',
        color: colors.col1,
    },
    s3in: {
        backgroundColor: colors.col1,
        padding: 10,
        borderRadius: 10,
        width: 130,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    head5: {
        color: colors.text3,
        fontSize: 20,
        fontWeight: '200',
        marginLeft: 10,
    },
    btntxt: {
        backgroundColor: colors.text1,
        color: colors.col1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        borderRadius: 10,
        width: '90%',
        textAlign: 'center',

    },
    btncont: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        flexDirection: 'row',
    },
    container2:{
        width: '90%',
        backgroundColor: colors.col1,
        padding: 20,
        borderRadius: 10,
        elevation: 10,
        alignItems: 'center',
        marginTop: 10,
       // marginRight: 40,

    },
    txt2:{
        color: colors.text3,
        fontSize: 30,
        fontWeight: '200',
        marginVertical: 10,

    },
    container2in:{
        flexDirection: 'row',
        alignItems: 'center',

    },
    txt3:{
        color: colors.text1,
        fontSize: 16,
        width: '30%',
        textAlign: 'center',
      
      


    },
    txt5:{
        color: 'black',
        fontSize: 16,
       // width: '30%',
        textAlign: 'center',
      
      


    },
    dash:{
        width: 1,
        height: 20,
        backgroundColor: colors.text1,
        marginHorizontal: 5,
    },
    container3:{
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
       

    },
    c3in:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',


    },
    text4:{
        color: colors.text3,
        fontSize: 20,
        marginHorizontal: 10,

    },

    hr81:{
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVerticle:20,
        marginTop: 8,
       
    },
    txt6:{
        color: 'red',
        fontSize: 16,
       // width: '30%',
        textAlign: 'center',
        fontWeight: 'bold',
      
      


    },
    container4:{
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
       
    },
    c4in:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',


    },
    






})

