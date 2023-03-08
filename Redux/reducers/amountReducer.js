import {ADD_AMOUNT, DELETE_AMOUNT} from '../actions/types/types';

const initialState = 0;

const AmountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AMOUNT:
      return action.payload;
    case DELETE_AMOUNT:
      return action.payload;
    default:
      return state;
  }
};

export default AmountReducer;
