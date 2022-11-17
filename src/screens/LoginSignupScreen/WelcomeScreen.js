import React from 'react'
import { View,
    StyleSheet,
    Text ,
    Image,
     TouchableOpacity} from 'react-native'
import welcomeicon from '../../../assets/welcomeicon.png'
import {colors,hr80} from '../../globals/style'


const WelcomeScreen = ({navigation}) => {
  return (
    <View style={style.container}>

    <Text style={style.title}> Welcome To SynBasket</Text>  
    <View style={style.logoout}>
    <Image source={welcomeicon} style={style.logo}/>
    <View style={hr80}/>
    <Text style={style.text}>Find the best Grocery Around you at Lowest Price.</Text>
     <View style={hr80}/>


     <View style={style.btnout}>

     <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
     <Text style={style.btn}> Sign Up</Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
     <Text style={style.btn}> Log In</Text>
     </TouchableOpacity>
     
     </View>
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
        fontSize: 50,
        color: colors.col1,
        textAlign: 'center',
         marginVertical: 10,
        fontWeight: '200',
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
        }

          
   
})

export default WelcomeScreen
