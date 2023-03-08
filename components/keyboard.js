import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  Button,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {store} from './../Redux/store';
import * as actions from './../Redux/actions/index.js';
import {PRICE, AMOUNT} from './../Redux/actions/types/types';

const Mykeyboard = ({focused, setInput, value, Clear}) => {
  // const state = store.getState();
  // const [focus, setFocus] = useState(state.focus.focus);
  const focus = useSelector(state => state.focus.focus);
  const [lastNumber, setLastNumber] = useState(0);
  const color = null;

  const dispatch = useDispatch();
  const {AddPrice, AddAmount} = bindActionCreators(actions, dispatch);

  const Key = num => {
    switch (focus) {
      case PRICE:
        AddPrice(num);
        break;
      case AMOUNT:
        AddAmount(num);
        break;
      default:
        return alert('unknown focus: ' + focus);
    }
    // setInput(num);
    setLastNumber(num);
  };

  const ClearInputs = () => {
    alert('clear');
    Clear();
  };

  return (
    <View>
      <View style={styles.wrapper}>
        <View>
          <Text style={{color: 'black'}}>Focus:{focus}</Text>
          {/* <Text style={{color: 'black'}}>price: {value.price}</Text>
          <Text style={{color: 'black'}}>amount:{value.amount}</Text> */}
        </View>
        {/* <View style={{paddingHorizontal: 40, paddingVertical: 20}}>
          <Text style={{color: 'black'}}>Cars:</Text>
          <TextInput
            style={styles.textinput}
            onFocus={() => CheckFocus('cars')}>
            {input.cars}
          </TextInput>
          <Text style={{color: 'black'}}>houses:</Text>
          <TextInput
            style={{backgroundColor: '#eee', color: 'black'}}
            onFocus={() => CheckFocus('houses')}>
            {input.houses}
          </TextInput>
        </View> */}
        <View style={styles.column}>
          <View style={styles.button}>
            <Button title="R1" color={color} onPress={() => Key(1)} />
          </View>
          <View style={styles.button}>
            <Button title="R2" color={color} onPress={() => Key(2)} />
          </View>
          <View style={styles.button}>
            <Button title="R5" color={color} onPress={() => Key(5)} />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.button}>
            <Button title="R10" color={color} onPress={() => Key(10)} />
          </View>

          <View style={styles.button}>
            <Button title="R20" color={color} onPress={() => Key(20)} />
          </View>

          <View style={styles.button}>
            <Button title="R50" color={color} onPress={() => Key(50)} />
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.button}>
            <Button title="R100" color={color} onPress={() => Key(100)} />
          </View>

          <View style={styles.button}>
            <Button title="R200" color={color} onPress={() => Key(200)} />
          </View>

          <View style={styles.button}>
            <Button title="Clear" color={color} onPress={() => ClearInputs()} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textinput: {
    backgroundColor: '#eee',
    color: 'black',
  },
  button: {
    width: '20%',
    marginVertical: '2%',
  },
});

export default Mykeyboard;
