import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TextInput,
} from 'react-native';
import CustomInput from './Customs/CustomKeyboard.js';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './../Redux/actions/index.js';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/MaterialIcons.js';

const Form = ({FAnswer, Reset, resetB}) => {
  const [textInputPrice, setTextInputPrice] = useState('');
  const [textInputAmount, setTextInputAmount] = useState('');
  const [textInputPeople, setTextInputPeople] = useState('');

  const color = '#0009';

  const dispatch = useDispatch();
  const {AddPeople, AddPrice, AddAmount, DeleteAmount, DeletePeople} =
    bindActionCreators(actions, dispatch);

  const People = num => {
    setTextInputPeople(num);
    AddPeople(num);
  };

  const Equals = () => {
    FAnswer();
    // clears the given amount and people textinputs
    setTextInputAmount('');
    setTextInputPeople('');
    DeleteAmount();
    DeletePeople();
  };

  const Resetting = () => {
    Keyboard.dismiss();
    setTextInputPrice('');
    setTextInputPeople('');
    setTextInputAmount('');
    Reset();
  };

  return (
    <View style={styles.form}>
      <View style={styles.form_view}>
        <Text style={styles.text}>Price:</Text>
        <CustomInput
          stateFunc={AddPrice}
          placeholder="e.g: R15"
          style={styles.input}
          placeholderTextColor={color}
          textInputState={{value: textInputPrice, func: setTextInputPrice}}
        />
        <Text style={styles.text}>Given Amount:</Text>
        <CustomInput
          stateFunc={AddAmount}
          placeholder="e.g: R20"
          style={styles.input}
          placeholderTextColor={color}
          textInputState={{value: textInputAmount, func: setTextInputAmount}}
        />
        <Text style={styles.text}>Number of people:</Text>
        {/* <CustomInput
          stateFunc={AddPeople}
          placeholder="e.g: 1"
          style={styles.input}
          placeholderTextColor={color}
          money={false}
          textInputState={{value: textInputPeople, func: setTextInputPeople}}
        /> */}
        <View
          style={[
            styles.input,
            {
              flexDirection: 'row',
              alignItems: 'center',
              // backgroundColor: 'red',
              paddingLeft: 0,
              width: wp('80.5%'),
              borderRadius: 5,
            },
          ]}>
          <TextInput
            placeholder="e.g:1"
            placeholderTextColor={color}
            style={styles.input}
            value={textInputPeople}
            keyboardType="numeric"
            onChangeText={val => People(val)}
          />
          <Icon
            name="backspace"
            size={25}
            color="#0003"
            onPress={() => setTextInputPeople('')}
          />
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button, {backgroundColor: 'brown'}]}
            onPress={() => Equals()}>
            <Text style={styles.button_text}>Equals</Text>
          </TouchableOpacity>

          {resetB ? (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              onPress={Resetting}>
              <Text style={styles.button_text}>Reset</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // paddingTop: 10,
    paddingTop: hp('1.5%'),
    // paddingBottom: 20,
    paddingBottom: hp('1.7%'),
  },
  form_view: {
    paddingLeft: 0,
  },
  text: {
    // marginTop: 10,
    // marginBottom: 10,
    marginVertical: hp('1.2%'),
    // fontSize: 20,
    fontSize: hp('2.5%'),
    color: '#0009',
  },
  input: {
    // paddingLeft: 7,
    paddingLeft: wp('3.5%'),
    // marginTop: 2,
    marginTop: hp('0.2%'),
    // marginBottom: 5,
    marginBottom: hp('0.2%'),
    color: 'black',
    backgroundColor: '#eee',
    // width: 260,
    width: wp('70%'),
    // borderRadius: 5,
    // borderRadius: p('2%'),
    borderColor: 'black',
  },
  button: {
    backgroundColor: '#2196F3',
    // paddingTop: 10,
    // paddingBottom: 10,
    paddingVertical: hp('1.2%'),
    // paddingHorizontal: 10,
    paddingHorizontal: wp('2.5%'),
    // marginHorizontal: 2,
    marginRight: wp('2%'),
    borderRadius: 4,
  },
  button_text: {
    // fontSize: 18,
    fontSize: hp('2.1%'),
    color: '#fff',
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // marginTop: 10,
    marginTop: hp('2%'),
  },
});

export default Form;
