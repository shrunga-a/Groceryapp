import React, { useState } from 'react'
import { View,Text,StyleSheet, TextInput,TouchableOpacity } from 'react-native'
import { title,colors} from '../../globals/style'

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import {firebase} from '../../../Firebase/FirebaseConfig'

  



const SignUpScreen = ({navigation}) => {

    const [emailfocus,setemailfocus] = useState(false);
    const [passwordfocus,setpasswordfocus] = useState(false);
    const [showpassword,showsetpassword] = useState(false);

    const [showcpassword,showcsetpassword] = useState(false);
    const [cpasswordfocus,setcpasswordfocus] = useState(false);
    const [namefocus,setnamefocus] = useState(false);

    //getting the text from the input's
    const [email,setemail] =useState('');
    const [name,setname] = useState('');
    const [password,setpassword] = useState('');
    const [cpassword,setcpassword] = useState('');
    const [address,setaddress] = useState('');

    const [costerror,setcosterror] = useState('');
    const [successmsg,setsuccessmsg] = useState('');

    const handelSignup = () =>{
        const FormData ={
            email: email,
            name: name,
            password: password,
           // cpassword: cpassword,
            address: address,
        }
        if(password != cpassword){
           // alert("The password doesn't match")-- one way of showing the error msg
           setcosterror("password  doesn't match");
           return;
        }
        else if(name == null){
            setcosterror(" Name field can't be empty");
            return;
        }
        try{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(() =>{
                console.log("user created successfully")
               // setsuccessmsg('user successfully created')
                const Userref = firebase.firestore().collection('UserData');

                Userref.add(FormData).then(()=>{
                    console.log("data added to firestore successfully");
                    setsuccessmsg('user successfully created')
                    

                }).catch((error)=>{
                    console.log('firestore error',error);
                   

                })

            })
            .catch((error) =>{
                console.log('signup firebase error', error.message)
                if (error.message == 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).'){
                    setcosterror("Email already in use");

                }
                else if (error.message == 'Firebase: The email address is badly formatted. (auth/email-already-in-use).'){
                    setcosterror('invalid email');
                   
                }
                else if (error.message == ' Firebase: password should be at least 6 characters long. (auth/password-already-in-use).'){
                    setcosterror(" password should be at least 6 characters long");

                }
                else {
                    setcosterror(error.message);

                }

            })

        }
        catch(error){
            console.log( 'signup system error',error.message)

        }
        


    }


    //console.log(email)

  return (
    <View style={style.container}>
    {successmsg == null ?
        <View style={style.container}>
        <Text style={style.head1}>
         Sign Up
        </Text>
        {costerror !== '' && <Text style={style.costerrormsg}>{costerror}</Text>}
    
        <View style={style.inputout}>
        <AntDesign name="user" size={24} color={namefocus === true? colors.text1 : colors.text2}/>
         <TextInput style={style.input} placeholder='Full Name'
         onFocus={() =>{
            setemailfocus(false)
            setpasswordfocus(false)
            showsetpassword(false)
            setnamefocus(true)   
            setcosterror('')
         }} 
         onChangeText={(text) => setname(text)}
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
            setcosterror('')    
         }} 
         onChangeText={(text)=>  setemail(text)}
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
            setcosterror('')
    
         }}
         onChangeText={(text)=> setpassword(text)}
    
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
            setcosterror('')
    
         }}
         onChangeText={(text)=> setcpassword(text)}
    
    
         secureTextEntry={showcpassword=== false ? true : false}
         
         />
         <Octicons name={showcpassword == false ? "eye-closed":'eye'} size={24} color="black" onPress={()=> {
          showcsetpassword(!showcpassword) }} />
         </View>
         <Text>Please enter your address</Text>
         <View style={style.inputout}>
         <TextInput placeholder="Enter Your Address"
         onChangeText={(text)=> setaddress(text)}
         onPress={()=>{
            setemailfocus(false)
            setpasswordfocus(false)
            showsetpassword(false)
            setnamefocus(false)
            setcosterror('')
         }}
         
         />
         
         
         </View>
    
         
    
    
    
         <TouchableOpacity style={style.touch} onPress={() => handelSignup()}>
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
         <View style={style.hr81}/>

         <Text> Already have an account!
          <Text style={style.signup} onPress={()=> navigation.navigate('LoginScreen')}>Login?</Text>
         </Text>
         
        
        
        </View> 

        :


        <View style={style.container1}>

        <Text style={style.succesmsg}>{successmsg}</Text>


        <TouchableOpacity style={style.touch} onPress={() => navigation.navigate('LoginScreen')}>
         <Text style={style.text} > Login</Text>
         
         </TouchableOpacity>

         <TouchableOpacity style={style.touch} onPress={() => setsuccessmsg(null)}>
         <Text style={style.text} > Go back</Text>
         
         </TouchableOpacity>
        
        
        </View>
        
    
    }
    
    
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
    container1: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
        marginBottom: 10,
        
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
    },
    costerrormsg:{
      color: 'red',
      fontSize: 18,
      textAlign: 'center',
      marginTop: 10,
      borderColor: 'red',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    


    },
    succesmsg:{

        color:'green',
        fontSize: 18,
        textAlign: 'center',
       // marginTop: 10,
        marginBottom: 10,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    



    }


})

export default SignUpScreen;



