import React from 'react';
import { Row } from 'react-bootstrap';
import { View , Text, StyleSheet } from 'react-native';

const Box =  ({title, bgcolor}) => {
    return(
       <View style={styles.main}>
        <View style={styles.main_view}>
            <View style={[{backgroundColor:bgcolor},styles.box]}>

            </View>
            <View>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
        </View>
       </View>
    )
}

const styles = StyleSheet.create({
    main:{
        // display:'flex',
        // flexDirection: 'row', 
        // justifyContent:'space-around',
        flex:1, 
        paddingTop:10,
        paddingBottom:10, 
        paddingLeft:20, 
        paddingRight:20,
        width: '35%',
        
        // width: '95%',
        // marginVertical:5,
        // marginHorizontal:5,
        // borderRadius: 5,

        backgroundColor: 'white',
    },
    main_view:{
        flex:1,
        flexDirection: 'row',
        display:'flex', 
        justifyContent:'space-between', 
        alignItems: 'center',
    },
    box:{ 
        height:30, 
        width:30, 
        marginRight:20,
        borderRadius: 4,
    },
    text:{
        fontSize:20,
        color: '#0009',
    }
})

export default Box;