import React, { useEffect, useState } from 'react'
import { StyleSheet,Text,View ,TouchableOpacity} from 'react-native'
import {firebase} from '../../Firebase/FirebaseConfig'
import { Ionicons } from '@expo/vector-icons';
import  {navbtn,navbtnin,containerout, navbtnout, colors} from '../globals/style'

const Userprofile = ({navigation}) => {

  const [userlogeduid,setuserlogeduid] = useState(null)
  const [userdata,setuserdata] = useState(null)
 

  useEffect(()=>{
    const checklogin = () =>{
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
         //console.log(user)
         setuserlogeduid(user.uid)

        }
        else{
          setuserlogeduid(null)
          //navigation.navigate('LoginScreen')
          console.log('no user logged in')
          
        }

      });

    }
    checklogin();

  },[])

  //console.log(userlogeduid)

 useEffect(() => {

  const getuserdata = async () => {
   const docRef = firebase.firestore().collection('UserData').where
    ('uid', '==', userlogeduid);

   const doc = await docRef.get();
    if(!doc.empty){
      doc.forEach((doc)=>{
        setuserdata(doc.data());

      })

    }
    else{
     // navigation.navigate('LoginScreen')
     console.log('no such document')

    }

  }
  getuserdata();
},[userlogeduid])

  //console.log(userdata)

  return (
   <View style={style.containerout}>
   <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={navbtnout}>
   <View style={navbtn}>
   <Ionicons name="md-arrow-back" size={24} color="white"  style={navbtnin}/>
   
   </View>
   
   </TouchableOpacity>

   <View style={style.container}>
   <Text style={style.head1}>Your Profile </Text>

   <View style={style.containerin}>
   <Text style={style.head2}> Name: {userdata ? <Text style={style.head2in}>
  {userdata.name}
    </Text> : 'loading...'}  </Text>

    

    
   <Text style={style.head2}> Email: {userdata ? <Text style={style.head2in}>
  {userdata.email}
    </Text> : 'loading...'}  </Text>

   
   <Text style={style.head2}> Address: {userdata ? <Text style={style.head2in}>
  {userdata.address}
    </Text> : 'loading...'}  </Text>
    
    </View>
   
   </View>
  
   </View>
  )
}
 
export default Userprofile

const style =StyleSheet.create({
  containerout: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    width: '100%', 
    
   

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },
  head1:{
    fontSize: 40,
    fontWeight: '200',
    marginVertical: 20,
    color: colors.text1,
   

  },

  containerin:{
    width: '90%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.text1,
    borderRadius: 5,
    padding: 20,
    marginTop: 20,

  },
  head2:{
    fontSize: 20,
    fontWeight: '300',
    marginTop: 20,
  },
  head2in:{
    fontSize: 20,
    fontWeight: '300',
  },




}) 