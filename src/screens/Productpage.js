import React from 'react'
import {Text,View,StyleSheet, ScrollView,TouchableOpacity,Image} from 'react-native'
import style, { product, dairyproduct } from '../globals/style';
import { Ionicons } from '@expo/vector-icons';
import  {navbtn,navbtnin,containerout, navbtnout, colors,btn2} from '../globals/style'

const Productpage = ({navigation ,route}) => {

    const data = route.params;  

    if(route.params === undefined){
        navigation.navigate('Home')
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
   
   
   </View>

   <View style={styles.btncont}>
   <TouchableOpacity style={btn2}>
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





})

