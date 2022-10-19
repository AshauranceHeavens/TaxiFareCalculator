import React from 'react';
import { View, Text } from 'react-native';

const Footer = ({ top }) => {
    return(
        <View style={{backgroundColor:'#1f1f1f', position: 'relative', top:top, padding:20, display:'flex', justifyContent: 'center', marginTop: 40,}}>
            <View>
                <Text style={{color:'white', textAlign:'center'}}>
                    Sqiniseko Zulu 
                </Text>
                <Text style={{color:'white', textAlign: 'center'}}>
                    Ashauranceheavens.github.io
                </Text>
                <Text style={{color:'white', textAlign:'center'}}>
                    Copyright &copy; 2022 v1
                </Text>
            </View>
        </View>
    )
}

export default Footer;