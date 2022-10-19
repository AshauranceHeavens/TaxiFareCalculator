import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ navigation }) => {
    return(
      <View style={styles.safearea} >
        <View style={styles.main} >
           <Text style={styles.text} >
             TaxiFareCalculator
           </Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  safearea:{
    
  },
  main:{
    // backgroundColor: 'brown', 
    // paddingTop:10, 
    // paddingHorizontal: 60, 
    // paddingBottom:10,
    // marginHorizontal:0,
    // shadowColor: 'black',
    // shadowOpacity: 0.5,
    // shadowOffset:{ width:0, height:10 },
    // elevation: 5,

  },
  text:{
    color: 'white', 
    fontSize:20,
    fontWeight: 'bold',
  },
})

export default Header;