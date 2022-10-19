import React, { useState } from 'react';
import  { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Keyboard } from 'react-native';





const Form = ({ FAnswer,  row, index, Answers , Reset, resetB }) => {

    const [price, setPrice] = useState();
    const [GAmount, setGAmount] = useState();
    const [Npeople, setNpeople] = useState();
    const [resetButton, setResetButton] = useState(true);

    const Equals = () => {
        FAnswer(price, GAmount, Npeople);
        // setPrice();
        setGAmount();
        setNpeople();
    }
    const Resetting = () => {
        Keyboard.dismiss();
        Reset(); 
        setPrice();
        setGAmount();
        setNpeople();
        // setResetButton(false);
    }
       

    return( 
        <View style={styles.form}>
            <View style={styles.form_view}>
                <Text style={styles.text}>
                    Price:
                </Text>
                <TextInput style={styles.input} type='number' keyboardType='number-pad' name='Fare_price' value={price} placeholder='e.g: 15' onChangeText={(val) => setPrice(val) } >
                </TextInput>
                <Text style={styles.text}>
                     Given Amount:
                </Text>
                <TextInput style={styles.input} type='number' keyboardType='number-pad' name='given_amount' value={GAmount} placeholder='e.g: 20' onChangeText={(val) =>  setGAmount(val)} >
                </TextInput>
                <Text style={styles.text}>
                    Number of people:
                </Text>
                <TextInput style={[styles.input, {marginBottom:20}]} keyboardType='number-pad' type='number' value={Npeople} name='number_of_people' placeholder='e.g: 1' onChangeText={(val) => setNpeople(val) } >
                </TextInput>
               
                 <View style={styles.buttons}>
                    {/* <Button title="Equals" color='brown' onPress={() => FAnswer(price, GAmount, Npeople) }/> */}
                    <TouchableOpacity activeOpacity={0.7} style={[styles.button, {backgroundColor: 'brown'}]} onPress={ () => Equals() }  >
                       <Text style={styles.button_text} >Equals</Text>
                    </TouchableOpacity>

                    {resetB ? <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={ Resetting } ><Text style={styles.button_text} >Reset</Text></TouchableOpacity> : null }
                 </View>
              

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center',

        backgroundColor: 'white',
        // marginTop:10,
        // marginHorizontal:5,
        // paddingHorizontal: 10,
        // borderRadius:4,

        paddingTop: 10,
        paddingBottom: 20,
        
    },
    form_view:{
        paddingLeft:0,
    },
    text:{
        marginTop:10,
        marginBottom: 10,
        fontSize:20,
        color: '#0009',
    },
    input:{
        paddingLeft:7,
        marginTop: 2,
        marginBottom:5,
        // backgroundColor: 'white',
        color: 'black',
        backgroundColor: '#eee',
        width:300,
        // shadowColor: 'black',
        // shadowOpacity: 0.5,
        // // shadowOffset:{ width: -50, height:1 },
        // // shadowRadius: 10,
        // elevation: 4.5,  
        borderRadius: 5,
        // borderWidth: 0.4,
        borderColor:'black',
    },
    button:{
        backgroundColor: '#2196F3',
        paddingTop: 10,
        paddingBottom:10,
        paddingHorizontal: 10,
        marginHorizontal: 2,
        borderRadius: 4,

    },
    button_text:{
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    }, 
    buttons:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
    }
  

})

export default Form;
