import React, { useEffect, useState } from 'react'
import{View,Text,StatusBar, TextInput,StyleSheet,ScrollView,FlatList} from 'react-native'

import HomeHeadNav from '../component/HomeHeadNav'
import Categories from '../component/Categories'
import OfferSlider from '../component/OfferSlider'
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../globals/style'
import { AntDesign } from '@expo/vector-icons';

import { firebase } from '../../Firebase/FirebaseConfig'
import CardSlider from '../component/CardSlider'
 

const HomeScreen = ({navigation}) => {
  
  const [groceryData, setgroceryData] =useState([])
  const [productsdata,setproductsdata]= useState([])
  const [dairyproductsdata,setdairyproductsdata] = useState([])
  
   const groceryref = firebase.firestore().collection('GroceryData');

  useEffect(()=>{

    groceryref.onSnapshot(snapshot =>{
      setgroceryData(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  //console.log(groceryData)

  useEffect(()=>{
    setproductsdata(groceryData.filter(item => item.groceryType == 'Products'))
    setdairyproductsdata(groceryData.filter(item => item.groceryType == 'Dairy Products'))

  
  }, [groceryData])

 // console.log(productsdata)

    const [Searchbar,setSearchbar] = useState('')


  return (
    <ScrollView style={style.container}>
    <StatusBar/>
    <HomeHeadNav navigation={navigation}/>
    

    <View style={style.searchbox}>
    <FontAwesome name="search" size={24} color="black" style={style.searchicon} />
    <TextInput placeholder='Search' style={style.textinput} 
    onChangeText={(text) => {setSearchbar(text)}}
    />
  </View>

  {Searchbar != '' 
  
  && <View style={style.searchresultouter}>  

   <FlatList style={style.searchresultinner}
   data={groceryData}
   renderItem={({item}) => {
    if(item.groceryname.toLowerCase().includes(Searchbar.toLocaleLowerCase())){
      return (
        <View style={style.searchresult}>
        <AntDesign name="arrowright" size={24} color="black" />
        <Text style={style.searchresulttext}> {item.groceryname}</Text>
        </View>
        


      )
    }
   }}
   
   />
  
  
  </View>}

    <OfferSlider/>
    <Categories/>
   
   <CardSlider title={"Top Offers"} data={groceryData}  navigation={navigation}/>

   <CardSlider title={"Products"} data={productsdata}  navigation={navigation}/>

   <CardSlider title={"Dairy Products"} data={dairyproductsdata}  navigation={navigation} />
   
    </ScrollView>

 
   
  )
}




export default HomeScreen

const style= StyleSheet.create({
  container:{

    flex:1,
    backgroundColor:colors.col1,
    //alignItems: 'center',
    width:'100%',

  },
  searchbox:{
    flexDirection:'row',
    width:'90%',
    backgroundColor:colors.col1,
    borderRadius:30,
    alignItems: 'center',
    padding:10,
    margin:10,
    elevation:10,

  },
  textinput:{
    marginLeft:10,
    width:'90%',
    fontSize:18,
    color:'black',
  },
 




})

