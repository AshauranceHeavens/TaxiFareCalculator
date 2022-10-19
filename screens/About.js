import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
// import { ScreenContainer } from './screens';



const About = ({ navigation }) => {
    return(
        <View style={{backgroundColor: 'white', paddingVertical:10}} >
            <ScrollView style={{height:'100%'}} keyboardShouldPersistTaps='handled'>
                <Text  style={styles.text} >
                    (15) Fare amount - the required amount to travel from point A to point B
                </Text>
                <Text  style={styles.text} >
                    1 Number of people - the number of people in a certain amount
                </Text>
                <Text  style={styles.text} >
                    R20 Given amount - this is the given or paid amount
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}} >
                    <View style={styles.image_wrapper} >
                       <Image source={require('../components/images/image1.png')} style={styles.image} />
                    </View>
                </View>
                <Text  style={styles.text} >
                   Press the Equals button to get an answer 
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}} >
                    <View style={styles.image_wrapper} >
                       <Image source={require('../components/images/image2.png')} style={styles.image} />
                    </View>
                </View>
                <Text  style={styles.text} >
                   Click answers you have seen to turn them to green 
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}} >
                    <View style={styles.image_wrapper} >
                       <Image source={require('../components/images/image3.png')} style={styles.image} />
                    </View>
                </View>
                <Text style={styles.text} >
                   Press the Reset button to start a new set of calculations
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        height:550, 
        width: 270, 
    },
    image_wrapper:{
        marginVertical:20,
        shadowColor: 'black',
        // shadowOpacity: 0.9,
        shadowRadius:5,
        shadowOffset:{ width:0, height:10 },
        elevation: 5,
    },
    text:{
        textAlign: 'center', 
        paddingTop:20, 
        paddingHorizontal: 10, 
        fontSize:18, 
        color: '#0009'
    }
})

export default About;