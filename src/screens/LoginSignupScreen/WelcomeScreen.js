import React, { useEffect, useState } from 'react'
import { View,
    StyleSheet,
    Text ,
    Image,
     TouchableOpacity} from 'react-native'
import welcomeicon from '../../../assets/welcomeicon.png'
import {colors,hr80} from '../../globals/style'

import {firebase} from '../../../Firebase/FirebaseConfig'

const WelcomeScreen = ({navigation}) => {

  const [userloged,setuserloged] = useState(null)

  useEffect(()=>{
    const checklogin =() =>{
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
         // console.log(user)
          setuserloged(user)

        }
        else{
          setuserloged(null)
          console.log("no user logged in")
          
        }

      });

    }
    checklogin();

  },[])

 // console.log(userloged)

  const handellogout=()=>{
    firebase.auth().signOut()
    .then(()=>{
      setuserloged(null)
      console.log("user logged out")

      
    })
    .catch((error) =>{
      console.log(error)

    })
  }

  return (
    <View style={style.container}>

    <Text style={style.title}> Welcome To SynBasket</Text>  
    <View style={style.logoout}>
    <Image source={welcomeicon} style={style.logo}/>
    <View style={hr80}/>
    <Text style={style.text}>Find the best Grocery Around you at Lowest Price.</Text>
     <View style={hr80}/>


     {userloged === null ? 
      <View style={style.btnout}>

      <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
      <Text style={style.btn}> Sign Up</Text>
      </TouchableOpacity>
 
      <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
      <Text style={style.btn}> Log In</Text>
      </TouchableOpacity>
      
      </View>
      :
      
      
      <View style={style.logged}>
      
      <Text style={style.textlog}>Sign In as<Text style={style.textlogin}> {userloged.email}</Text></Text>
     
      
      <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
      <Text style={style.btn}>Next</Text>
      </TouchableOpacity>
 
      <TouchableOpacity onPress={()=>  handellogout()}>
      <Text style={style.btn}> Log out</Text>
      </TouchableOpacity>
    
      </View>
    
    
    }
    </View> 

    </View>
   
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ff4d4d',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title:{
        fontSize: 40,
        color: colors.col1,
        textAlign: 'center',
         marginVertical: 5,
        fontWeight: '200',
      //  marginTop: 10,
    },
    logoout: {
            width: '80%',
            height: '30%',
            //backgroundColor:'#fff',
            alignItems: 'center',
        },

        logo:{
          width: '100%',
            height: '100%'
        },
        text:{
          fontSize: 17,
          width:'80%',
            color: colors.col1,
            textAlign: 'center',
            
        },
        btnout:{
          flexDirection: 'row',
        
         

        },
        btn:{
            fontSize: 20,
            color: colors.text1,
            textAlign: 'center',
            marginVertical: 30,
            marginHorizontal:20,
            fontWeight: '600',
            backgroundColor:'#fff',
            borderRadius:10,
            padding:9,
            paddingHorizontal:20,
        },
        logged:{

           flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'center',
           
        
          
        },
        textlog:{
            fontSize: 17,
            color: colors.col1,


        },
        textlogin:{
          fontSize: 19,
          color: colors.col1,
          fontWeight: '600',
          textDecorationLine: 'underline',
          textDecorationStyle: 'solid',

        }
 
        

          
   
})

export default WelcomeScreen
