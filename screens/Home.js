import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Alert,
  Keyboard,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Box from '../components/Box';
import Form from '../components/Form';
import ListView from '../components/ListView';
import Footer from '../components/Footer';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {store} from './../Redux/store';
import * as actions from '../Redux/actions/index.js';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// import BottomSheet from 'react-native-simple-bottom-sheet';
// import uuid from uuid;

const Home = ({navigation}) => {
  const [rows, setRows] = useState([]);
  const [resetButton, setResetButton] = useState(false);

  const dispatch = useDispatch();
  const {DeletePrice, DeleteAmount, DeletePeople, DeleteRows} =
    bindActionCreators(actions, dispatch);

  const Answer = () => {
    Keyboard.dismiss();

    const state = store.getState();

    let amount = state.amount,
      price = state.price,
      people = state.people;

    if (isNaN(+price)) {
      return Alert.alert('Warning', 'Invalid price:');
    } else if (isNaN(+amount)) {
      return Alert.alert('Warning', 'Invalid amount');
    } else if (isNaN(+people)) {
      return Alert.alert('Warning', 'Invalid number of people');
    }

    if (price == 0 || amount == 0 || people == 0) {
      return Alert.alert(
        'Oops!',
        'Some of your input fields are empty, please fill in all fields',
        [{text: 'sorry'}],
      );
    }

    if (people % 1 > 0) {
      return Alert.alert('Oops!', 'People cannot be counted in fractions', [
        {text: 'Sorry'},
      ]);
    }

    if (price < 0) {
      Alert.alert('Oops!', 'The price cannot be less than 0', [
        {text: 'sorry'},
      ]);
    } else if (amount < 0) {
      Alert.alert('Oops!', 'The amount cannot be less than 0', [
        {text: 'sorry'},
      ]);
    } else if (people < 0) {
      Alert.alert('Oops!', 'The number of people cannot be less than 0', [
        {text: 'sorry'},
      ]);
    }

    const Total = parseFloat(amount - price * people).toFixed(2);

    let row = {
      number: Total,
      id: Math.random() * 1000 + 1,
      price: price,
      people: people,
      amount: amount,
      seen: false,
    };

    setRows([...rows, row]);
    setResetButton(true);
  };

  function Seen(id) {
    setRows(rows.map(row => (row.id === id ? {...row, seen: !row.seen} : row)));
  }

  const Reset = () => {
    DeleteAmount();
    DeletePrice();
    DeleteRows();
    DeletePeople();
    setRows([]);
    setResetButton(false);
  };

  return (
    <View style={{height: hp('100%')}}>
      <ScrollView
        style={{
          backgroundColor: '#fff',
          minHeight: hp('100%'),
          paddingTop: hp('1%'),
        }}
        keyboardShouldPersistTaps="handled">
        <StatusBar backgroundColor="brown" />
        <Box title="No change" bgcolor="lightgreen" />
        <Box title="Change" bgcolor="orange" />
        <Box title="Seen" bgcolor="green" />
        <Box title="Short" bgcolor="red" />
        <Form FAnswer={Answer} row={rows} Reset={Reset} resetB={resetButton} />

        <View style={styles.rowContainer}>
          {rows.length > 0 ? (
            <ListView answers={rows} seen={Seen} />
          ) : (
            <Text style={styles.text}>You will see your answers here </Text>
          )}
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    backgroundColor: '#eee',
    paddingVertical: hp('2%'),
    marginTop: hp('1.5%'),
  },
  text: {
    textAlign: 'center',
    // paddingTop: 20,
    // paddingHorizontal: 10,
    fontSize: hp('2.1%'),
    color: '#0009',
  },
});

export default Home;
