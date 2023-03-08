import React, {useState, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  NativeModules,
  TouchableOpacity,
  Keyboard,
  TextInput,
} from 'react-native';

import {
  CustomTextInput,
  register,
  insertText,
  backSpace,
  uninstall,
  hideKeyboard,
} from 'react-native-custom-keyboard-kit';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Keys = props => {
  const onPress1 = () => {
    // insertText(this.props.tag, '1')
    insertText(props.tag, '1');
  };

  const onPress2 = () => {
    insertText(props.tag, '2');
  };

  const onPress3 = () => {
    insertText(props.tag, '5');
  };

  const onPress4 = () => {
    insertText(props.tag, '10');
  };

  const onPress5 = () => {
    insertText(props.tag, '20');
  };

  const onPress6 = () => {
    insertText(props.tag, '50');
  };

  const onPress7 = () => {
    insertText(props.tag, '100');
  };

  const onPress8 = () => {
    insertText(props.tag, '200');
  };

  const onPress9 = () => {
    insertText(props.tag, '9');
  };

  const onPressBackSpace = () => {
    backSpace(props.tag);
  };

  const onPress0 = () => {
    insertText(props.tag, '0');
  };

  const onPressHideKeyboard = () => {
    hideKeyboard(props.tag);
  };
  return (
    <View>
      {/* <TextInput /> */}
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.button}>
            <TouchableOpacity style={styles.btn} onPress={() => onPress1()}>
              <Text style={styles.buttonLabel}>+R1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => onPress2()}>
              <Text style={styles.buttonLabel}>+R2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => onPress3()}>
              <Text style={styles.buttonLabel}>+R5</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => onPress4()}>
              <Text style={styles.buttonLabel}>+R10</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => onPress5()}>
              <Text style={styles.buttonLabel}>+R20</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => onPress6()}>
              <Text style={styles.buttonLabel}>+R50</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => onPress7()}>
              <Text style={styles.buttonLabel}>+R100</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => onPress8()}>
              <Text style={styles.buttonLabel}>+R200</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => onPressHideKeyboard()}>
              <Text style={styles.buttonLabel}>&crarr;</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.button}>
            <TouchableOpacity onPress={() => onPress9()}>
              <Text style={styles.buttonLabel}>9</Text>
            </TouchableOpacity>
          </View> */}
        </View>
        {/* <View style={{flexDirection: 'row'}}>
          {/* <View style={styles.button}>
            <TouchableOpacity onPress={() => onPressBackSpace()}>
              <Text style={styles.buttonLabel}>&larr;</Text>
            </TouchableOpacity>
          </View>
        {/* <View style={styles.button}>
            <TouchableOpacity onPress={() => onPress0()}>
              <Text style={styles.buttonLabel}>0</Text>
            </TouchableOpacity>
          </View> 
        {/* <View style={styles.button}>
            <TouchableOpacity onPress={() => onPressHideKeyboard()}>
              <Text style={styles.buttonLabel}>&crarr;</Text>
            </TouchableOpacity>
          </View> 
        </View> */}
      </View>
    </View>
  );
};

register('price', () => Keys);

const CustomInput = ({
  stateFunc,
  textInputState = {},
  placeholder,
  style,
  placeholderTextColor,
  money = true,
}) => {
  const [textValue, setTextValue] = useState();
  // const [value, setValue] = useState('');

  const onChangeText = text => {
    let newValue;
    setTextValue(text);

    if (textInputState.value == '') {
      newValue = Number(text);
    } else {
      newValue = Number(textInputState.value) + Number(text);
    }

    stateFunc(newValue);
    // setValue(newValue);
    textInputState.func(newValue);
    setTextValue('');
  };

  const clear = () => {
    textInputState.func('');
    stateFunc(0);
  };

  return (
    <View
      style={[
        styles.container,
        {
          // width: 330,
          width: wp('81%'),
          backgroundColor: 'red',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#eee',
          borderRadius: 5,
          borderColor: 'black',
        },
      ]}>
      <CustomTextInput
        placeholder={
          textInputState.value !== '' && money == true
            ? `R${textInputState.value}`
            : textInputState.value !== '' && money == false
            ? `${textInputState.value}`
            : placeholder
        }
        placeholderTextColor={
          textInputState.value !== '' ? 'black' : `${placeholderTextColor}`
        }
        customKeyboardType="price"
        onChangeText={val => onChangeText(val)}
        style={style}
        cursorColor="black"
      />
      <View>
        <Icon
          name="backspace"
          size={25}
          color="#0003"
          onPress={() => clear()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
    // backgroundColor: '#F5FCFF',
    backgroundColor: '#fff',
  },
  input: {
    width: 270,
    height: 50,
    fontSize: 19,
    paddingLeft: 7,
    marginTop: 2,
    marginBottom: 5,
    // backgroundColor: 'white',
    color: 'black',
    backgroundColor: '#eee',
    width: 300,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 10,
  },
  buttonLabel: {
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 13,
    paddingBottom: 13,
    fontSize: 20,
    color: 'black',
  },
  button: {
    width: '33.333333333%',
  },
  btn: {},
});

export default CustomInput;
