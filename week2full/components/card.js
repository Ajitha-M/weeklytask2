import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button, Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppText from './AppText';
import config from '../app/color/config'

function Card({title, subtitle, image}){
    return(
        // <AppText style={styles.title}>{title}</AppText>
        // <AppText style={styles.subtitle}>{subtitle}</AppText>
        <View style={styles.card}>
       
        <Image style={styles.image} source={image} />
        
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
</View>
    )
}


const styles = StyleSheet.create({
   card:{
       borderRadius: 10,
       backgroundColor: "white",
       marginTop:80,
       overflow:"hidden",
       width:"95%",
       marginLeft:10
   },
   container:{
       padding:20,
      
   },
   image:{
       width:"100%",
       height:230,
       borderTopRightRadius:10,
       borderTopLeftRadius:10
   },
   subtitle:{
       color:config.secondary,
       fontWeight:'bold'
   },
   title:{
       marginBottom:7
   }
})


export default Card;

