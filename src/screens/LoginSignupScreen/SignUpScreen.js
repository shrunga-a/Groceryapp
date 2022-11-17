import React, { useState } from 'react'
import { View,Text,StyleSheet, TextInput,TouchableOpacity } from 'react-native'
import { title,colors} from '../../globals/style'

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';






const SignUpScreen = ({navigation}) => {

    const [emailfocus,setemailfocus] = useState(false);
    const [passwordfocus,setpasswordfocus] = useState(false);
    const [showpassword,showsetpassword] = useState(false);

    const [showcpassword,showcsetpassword] = useState(false);
    const [cpasswordfocus,setcpasswordfocus] = useState(false);
    const [namefocus,setnamefocus] = useState(false);

  return (
    <View style={style.container}>
    <Text style={style.head1}>
     Sign Up
    
    </Text>

    <View style={style.inputout}>
    <AntDesign name="user" size={24} color={namefocus === true? colors.text1 : colors.text2}/>
     <TextInput style={style.input} placeholder='Full Name'
     onFocus={() =>{
        setemailfocus(false)
        setpasswordfocus(false)
        showsetpassword(false)
        setnamefocus(true)

       
     }} 
     />
     </View>

    <View style={style.inputout}>
    <MaterialIcons name="email" size={24} color={emailfocus === true? colors.text1 : colors.text2} />
     <TextInput style={style.input} placeholder='Email'
     onFocus={() =>{
        setemailfocus(true)
        setpasswordfocus(false)
        showsetpassword(false)
        setnamefocus(false)
        
               
        
     }} 
     />
     </View>

      {/*passwordstart*/}
     <View style={style.inputout}>
     <MaterialCommunityIcons name="lock-outline" size={24} color={ passwordfocus === true? colors.text1 : colors.text2} />
     <TextInput style={style.input} placeholder='Password'
     onFocus={()=>{
        setemailfocus(false)
        setpasswordfocus(true)
        showsetpassword(false)
        setnamefocus(false)

     }}

     secureTextEntry={showpassword=== false ? true : false}
     
     />
     <Octicons name={showpassword == false ? "eye-closed":'eye'} size={24} color="black" onPress={()=> {
        showsetpassword(!showpassword) }} />
     </View>

{/*passwordend*/}
     <View style={style.inputout}>
     <MaterialCommunityIcons name="lock-outline" size={24} color={ cpasswordfocus === true? colors.text1 : colors.text2} />
     <TextInput style={style.input} placeholder=' confrom Password'
     onFocus={()=>{
        setemailfocus(false)
        setcpasswordfocus(true)
        setpasswordfocus(false)
        setnamefocus(false)

     }}

     secureTextEntry={showcpassword=== false ? true : false}
     
     />
     <Octicons name={showcpassword == false ? "eye-closed":'eye'} size={24} color="black" onPress={()=> {
      showcsetpassword(!showcpassword) }} />
     </View>
     <Text>Please enter your address</Text>
     <View style={style.inputout}>
     <TextInput placeholder="Enter Your Address"/>
     
     
     </View>

     



     <TouchableOpacity style={style.touch}>
     <Text style={style.text} > Sign Up</Text>
     
     </TouchableOpacity>

     <Text style={style.forgot}>Forgot Password?</Text>
     <Text style={style.or}>OR</Text>
     <Text style={style.gftxt} >SIGN IN with</Text>

     <View style={style.gf}>
     <TouchableOpacity style={style.gficon}>
     <AntDesign name="google" size={24} color="#EA4335" />
     
     </TouchableOpacity>

     <TouchableOpacity style={style.gficon}>
     <AntDesign name="facebook-square" size={24} color="blue" />
     
     </TouchableOpacity>
     
     
     </View>
     <View style={style.hr81} >
     <Text  >
     Already have an account!  <Text style={style.signup} onPress={()=> navigation.navigate('LoginScreen')}>
       Login?</Text>

     </Text>
     
     </View>
    
    </View>
  )
}


const style= StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop:'10%',
       
    },
     
    head1 : {
        fontSize: title.title1,
        color:colors.text1,
        textAlignment: 'center',
        marginVertical: 10,
    },
    inputout:{
        flexDirection:'row',
        width: '80%',
        marginVertical: 10,
        backgroundColor: colors.col1,
        borderRadius:10,
        paddingHorizontal: 10,
        paddingVertical:10,
        elevation: 30,
    },
    input:{
        fontSize:  18,
        marginLeft: 10,
        width: '80%',
    },
    touch:{
        flexDirection:'row',
        width: '80%',
        backgroundColor: 'red',
        borderRadius:10,
       paddingHorizontal: 115,
        paddingVertical:10,
        elevation: 30,
        
    },
    text:{
        color:'white',
    },
    forgot:{
        marginTop:20,
        marginBottom:10,
        color:colors.text2,
    },
    or:{
        marginVertical:10,
        color:colors.text1,
       fontWeight:'bold',
    },
    gftxt:{
        color:colors.text2,
        marginVertical: 10,
        fontSize:20,
    },
    gf:{
        flexDirection:'row',
        


    },
    gficon:{
        backgroundColor:'white',
       width:50,
       margin:20,
       borderRadius:10,
       padding:10,
       alignItems:'center',
       elevation:20,
    },
    hr81:{
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVerticle:20,
       
    },
    signup:{
        color:colors.text1,
    }


})

export default SignUpScreen;



