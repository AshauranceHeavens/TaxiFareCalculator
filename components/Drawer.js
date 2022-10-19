import React from 'react';
import { View, Text , Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Footer from './Footer';


const Drawer = (props) => {
  return (
    <DrawerContentScrollView { ...props } style={styles.drawer} >
      <View style={styles.img_container} >
        <Image style={{height:50, width:50,}} source={require('./images/minibus.png')} /> 
        <Text style={{color:'#000',marginHorizontal:15}}>
            TaxiFareCalculator
        </Text>
      </View>
      <DrawerItemList { ...props } />
    </DrawerContentScrollView>
  )
}



const styles = StyleSheet.create({
    drawer:{
        flex:1,
        backgroundColor: 'white',
        height: 150,
        marginBottom:150,
    },
    img_container:{
        backgroundColor: '#fff',
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:20, 
        marginBottom:20,
        borderBottomColor: '#0007',
        borderBottomWidth: 1
    }
});

export default Drawer;