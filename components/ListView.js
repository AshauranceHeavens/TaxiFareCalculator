import React, {useState} from 'react';
import { View, ScrollView } from 'react-native';
import Row from './Row';

const ListView = ({ answers, seen }) => {    
    return(
        <ScrollView>
           {answers.map((answer) => <Row answer={answer} seen={seen} /> )}
        </ScrollView>
    );
}

export default ListView;