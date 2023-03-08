import {
  ADD_AMOUNT,
  DELETE_AMOUNT,
  ADD_PRICE,
  DELETE_PRICE,
  ADD_PEOPLE,
  DELETE_PEOPLE,
  DELETE_ALL,
  ADD_ROW,
  DELETE_ROW,
  PRICE,
  AMOUNT,
} from './types/types';
import {store} from '../store';
import {Alert} from 'react-native';

var errorMessage = '';
var answer;

const checkNumber = num => {
  if (isNaN(num)) {
    errorMessage = 'The value you provided is not a number';
    return false;
  } else if (num % 1 > 0) {
    errorMessage = 'The value you provided is a fraction';
    return false;
  } else if (num < 0) {
    errorMessage = 'The value you provided is less than 0';
    return false;
  } else {
    return true;
  }
};

export const AddAmount = num => {
  return dispatch => {
    dispatch({
      type: ADD_AMOUNT,
      payload: num,
    });
  };
};

export const DeleteAmount = () => {
  return dispatch => {
    dispatch({
      type: DELETE_AMOUNT,
      payload: 0,
    });
  };
};

export const AddPeople = num => {
  return dispatch => {
    dispatch({
      type: ADD_PEOPLE,
      payload: num,
    });
  };
};

export const DeletePeople = () => {
  return dispatch => {
    dispatch({
      type: DELETE_PEOPLE,
      payload: 0,
    });
  };
};

export const AddPrice = num => {
  return dispatch => {
    dispatch({
      type: ADD_PRICE,
      payload: num,
    });
  };
};

export const DeletePrice = () => {
  return dispatch => {
    dispatch({
      type: DELETE_PRICE,
      payload: 0,
    });
  };
};

export const addRow = row => {
  return dispatch => {
    const state = store.getState();
    let stateRow = state.rows;
    stateRow.push(row);

    dispatch({
      type: ADD_ROW,
      payload: stateRow,
    });
  };
};

export const DeleteRows = () => {
  return dispatch => {
    dispatch({
      type: DELETE_ROW,
    });
  };
};

export const Focus = name => {
  return dispatch => {
    var dis;
    if (name === PRICE) {
      dis = PRICE;
    } else if (name === AMOUNT) {
      dis = AMOUNT;
    }

    dispatch({
      type: dis,
      payload: dis == PRICE ? 'PRICE' : dis == AMOUNT ? 'AMOUNT' : null,
    });
  };
};

export const Answer = () => {
  //   Aprice, AGamount, ANpeople used to take these arguments
  Keyboard.dismiss(); // WHY THIS?

  const state = store.getState;
  var amount = state.amount;
  var price = state.price;
  var people = state.people;

  if (isNaN(+price)) {
    return Alert.alert('Warning', 'Invalid price');
  } else if (isNaN(+amount)) {
    return Alert.alert('Warning', 'Invalid amount');
  } else if (isNaN(+people)) {
    return Alert.alert('Warning', 'Invalid number of people');
  }

  if (people % 1 > 0) {
    return Alert.alert('Warning', 'People cannot be counted in fractions', [
      {text: 'Sorry'},
    ]);
  }

  const Total = parseFloat(amount - price * people).toFixed(2);
  // setAnswers(Total);
  if (index == 0) {
    setRow([
      {
        number: Total,
        id: Math.random() * 1000 + 1,
        price: price,
        people: people,
        amount: amount,
        seen: false,
      },
    ]);
    setIndex(1);
    setResetButton(true);
  } else if (index > 0) {
    setRow([
      ...rows,
      {
        number: Total,
        id: Math.random() * 1000 + 1,
        price: price,
        people: people,
        amount: amount,
        seen: false,
      },
    ]);
    setIndex(index + 1);
    setResetButton(true);
  }
};
