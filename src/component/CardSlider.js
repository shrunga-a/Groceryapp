import React from 'react'
import { View ,Text,StyleSheet, FlatList,Image} from 'react-native'
import { colors, product ,dairyproduct } from '../globals/style'

const CardSlider = ({ title,data }) => {
   // console.log(title)
  return (
   <View style={style.container}>
   <Text style={style.cardouthead}> {title}</Text>

   <FlatList style={style.cardsout}
   horizontal
   showsHorizontalScrollIndicator={false}
   data={data}
   renderItem={({item}) => (
    <View style={style.card}>

    <View style={style.s1}>
    <Image source={{uri: item.groceryimageUrl}} style={style.cardimgin}/>
    </View>

    <View style={style.s2}>
    <Text style={style.txt1}> {item.groceryname}</Text>
    <View style={style.s2in}>
    <Text style={style.txt2}>Rs.{item.groceryPrice}/-</Text>
    {item.groceryType == 'Products'? <Text style={product}> </Text>: <Text style={dairyproduct}/>}
    
    </View>
     </View>
     <View style={style.s3}>  
     <Text style={style.buybtn}> Buy </Text>
     
     </View>
    </View>

    
   )}
   
   
   />
   </View>
  )
}

export default CardSlider

const style= StyleSheet.create({
    container: {
        marginVertical: 20,
     },

     cardouthead: {
      color: colors.text3,
      width:'90%',
      fontSize: 30,
      fontWeight: '200',
      borderRadius: 10,
      marginHorizontal: 10,
    },

    cardsout:{
        width: '100%',

    },
    card:{
        width: 250,
        height: 250,
       margin: 10,
       borderRadius: 10,
       borderWidth: 1,
       borderColor: '#e8e8e8',
       backgroundColor: colors.col1,
    },
    cardimgin:{
        width: '40%',
        height: 150,
        alignSelf: 'center',
    },
    s2:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',



    },
    txt1:{
        fontSize: 15,
        color: colors.text3,
        marginHorizontal: 5,
        width: 100,
    },
    txt2:{
        fontSize: 15,
        color: colors.text2,
        marginRight: 10,
    
    },
    s2in:{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 30,
    },
    s3:{
        alignItems: 'center',
        position:'absolute',
        bottom: 1,
        width: '100%'
    },
    buybtn:{
        backgroundColor: colors.text1,
        color: colors.col1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        borderRadius: 10,
        width: '90%',
        textAlign: 'center',
      

    }


    



})
