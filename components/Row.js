import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Row = ({ answer, seen }) => {

    const [color, setColor] = useState('lightgreen');

    var orange = "orange",
        red = "red",
        lightgreen = "lightgreen",
        green = "green";
   
    return(
        <TouchableOpacity activeOpacity={0.7} style={[{ backgroundColor: `${answer.seen ? green : answer.number > 0 ? orange : answer.number < 0 ? red: lightgreen }`}, styles.touchable ]} key={answer.id} onPress={() => seen(answer.id)}>
            <Text style={styles.text}>
                {answer.number == 0 ? ( `(${parseFloat(answer.price).toFixed(2)}) ${answer.people} in R${answer.amount} No change = R` + answer.number) : 
                answer.number > 0 ? (`(${parseFloat(answer.price).toFixed(2)}) ${answer.people} in R${parseFloat(answer.amount).toFixed(2)} Change = R` + answer.number) : 
                answer.number < 0 ? `(${parseFloat(answer.price).toFixed(2)}) ${answer.people} in R${parseFloat(answer.amount).toFixed(2)} Short = R`+ answer.number * (- 1): ''}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchable:{ 
        marginLeft: 20, 
        marginRight: 20, 
        marginTop: 20, 
        paddingLeft: 20, 
        paddingRight:10, 
        paddingTop: 10, 
        paddingBottom:10, 
        borderRadius: 4,
        // cursor: 'pointer',
    },
    text:{
        paddingLeft: 0, 
        paddingRight:0,
        fontSize: 19,
        color: 'black',
    }
})

export default Row;