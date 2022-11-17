import React from 'react'
import { View ,Text ,StyleSheet,Image} from 'react-native'
import Swiper from 'react-native-swiper'
import {colors} from '../globals/style'




  




const OfferSlider = () => {
  return (
    <View>
   <View style={styles.OfferSlider}>
   <Swiper autoplay={true} autoplayTimeout={5} showsButtons={true} dotColor={colors.text2} activeDotColor={colors.text1}
       nextButton={<Text style={styles.btntext}>{'>'}</Text>}
       prevButton={<Text style={styles.btntext}>{'<'}</Text>}
   >
   <View style={styles.slide}>
   <Image source={require('../../assets/OfferSliderimage/img1.png')} style={styles.image}/>
   
   </View>

   <View style={styles.slide}>
   <Image source={require('../../assets/OfferSliderimage/img2.png')} style={styles.image}/>
   
   </View>

   <View style={styles.slide}>
   <Image source={require('../../assets/OfferSliderimage/img3.png')} style={styles.image}/>
   
   </View>


   
   </Swiper>
   
   </View>
    
    
    </View>
  )
}

export default OfferSlider

const styles = StyleSheet.create({
  OfferSlider:{
    width: '100%',
    height: 210,
    backgroundColor:colors.col1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,

  },
  slide:{
    width: '100%',
    height: 200,
    backgroundColor:colors.col1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,

  },
  image:{
    width: '100%',
    height: '100%',
    borderRadius: 20,

  },
  btntext:{
    color: colors.text1,
    fontSize: 30,
    fontWeight: 'bold',
   

   

  }



})
