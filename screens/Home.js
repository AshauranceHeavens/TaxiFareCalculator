import React, { useState } from 'react';
import { ScrollView, View, Text, Alert , Keyboard, Image , StatusBar } from 'react-native';
import Header from '../components/Header';
import Box from '../components/Box';
import Form from '../components/Form';
import ListView from "../components/ListView";
import Footer from '../components/Footer';
import Row from '../components/Row';

// import uuid from uuid;

const Home = ({ navigation }) => {
 
  const [Answers, setAnswers] = useState(0);
  const [rows, setRow] = useState([]);
  const [index, setIndex] = useState(0);
  const [resetButton, setResetButton] = useState(false);
  

  const Answer = (Aprice, AGamount, ANpeople) => {

    // alert("price= "+ Aprice + " amount=" + AGamount + " people= " + ANpeople);
    Keyboard.dismiss();

      if(isNaN(+Aprice)){
        return Alert.alert("Warning","Invalid price");
      }else if(isNaN(+AGamount)){
        return  Alert.alert("Warning","Invalid amount");
      }else if(isNaN(+ANpeople)){
        return  Alert.alert("Warning","Invalid number of people");
      }

      if(ANpeople % 1 > 0){
        return  Alert.alert("Warning","People cannot be counted in fractions", [{text: "Sorry"}]);
      }

      const Total = parseFloat(AGamount - ( Aprice * ANpeople )).toFixed(2);
      setAnswers(Total);
      // alert("row= " + rows.length);
      if(index == 0){
        setRow([{number: Total, id: Math.random() * 1000 + 1, price: Aprice, people: ANpeople, amount: AGamount, seen: false}]);
        setIndex(1);
        setResetButton(true);
      }else if(index > 0){
        setRow([...rows, {number: Total, id: Math.random() * 1000 + 1, price: Aprice, people: ANpeople, amount: AGamount, seen: false}]);
        setIndex(index + 1);
        setResetButton(true);
      }

      // alert("answers= " + Answers + " and Row= " + rows);
      // alert(Total);
     
  } 

  function Seen(id){
    setRow(rows.map( (row) => row.id === id ? {...row, seen: !row.seen} : row ))
  }

  const Reset = () => {
    setRow([]);
    setResetButton(false);
} 


  return(
    <View style={{}}  > 
      <ScrollView style={{height: 500, backgroundColor: '#fff', height:'100%'}} keyboardShouldPersistTaps='handled' >
        <StatusBar backgroundColor="brown" />
        <Box title="No change" bgcolor="lightgreen"/>
        <Box title="Change" bgcolor="orange"/>
        <Box title="Seen" bgcolor="green"/>
        <Box title="Short" bgcolor="red"/>
        {/* <Image source={require('../components/images/image1.png')} style={{height:50}} /> */}
        <Form FAnswer={Answer}  row={rows} index={index} Answers={Answers}  Reset={Reset} resetB={resetButton} />
        <View style={{backgroundColor: '#eee', paddingBottom: 20,}} >
          { rows.length > 0 ? <ListView answers={rows} seen={Seen}/>  : <Text style={{textAlign: 'center', paddingTop:20, paddingHorizontal: 10, fontSize:18, color: '#0009'}}>You will see your answers here </Text>}
        </View>
       <Footer />
      </ScrollView>
    </View> 
  )
}

export default Home;