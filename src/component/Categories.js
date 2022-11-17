import React from 'react'
import {View,Text,ScrollView,StyleSheet} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../globals/style';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';





const Categories = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.head}>Categories</Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    
    <View style={styles.box}>
    <MaterialCommunityIcons name="rice" size={24} color="black" />
    <Text style={styles.text}>Cereals</Text>
    </View>

    <View style={styles.box}>
    <MaterialCommunityIcons name="oil" size={24} color="black" />
    <Text style={styles.text}>Oil and Fat</Text>
    </View>

    <View style={styles.box}>
    <MaterialCommunityIcons name="peanut" size={24} color="black" />
    <Text style={styles.text}>Spices and Nuts</Text>
    </View>
    
    <View style={styles.box}>
    <MaterialIcons name="emoji-nature" size={24} color="black" />
    <Text style={styles.text}>Natural probucts</Text>
    </View>

    <View style={styles.box}>
    <AntDesign name="downsquare" size={24} color="black" />
    <Text style={styles.text}>Others</Text>
    </View>


    </ScrollView>
    </View>
   
  )
}

export default Categories

 const styles =StyleSheet.create({
   container:{
    backgroundColor:colors.col1,
    width: '100%',
  //  height:'50%',
    elevation:10,
     borderRadius:10,
  },
 head:{
    color: colors.text1,
   
       fontSize:25,
     fontWeight:'300',
     margin:10,
    alignSelf:'center',
     paddingBottom:5,
     borderBottomColor: colors.text1,
     borderBottomWidth:1,

   },
   box:{
    backgroundColor:colors.col1,
    elevation: 20,
      margin: 10,
     padding: 10,
     borderRadius: 10,
     alignItems: 'center',
     justifyContent: 'center',
   

   }
 




})

