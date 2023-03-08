import {ADD_PRICE, DELETE_PRICE} from '../actions/types/types';

const initialState = 0;

const PriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRICE:
      return action.payload;
    case DELETE_PRICE:
      return action.payload;
    default:
      return state;
  }
};

export default PriceReducer;
