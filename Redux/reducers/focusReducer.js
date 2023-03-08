import {PRICE, AMOUNT} from '../actions/types/types';

const initialState = {focus: ''};

const FocusReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRICE:
      return {focus: action.payload};
    case AMOUNT:
      return {focus: action.payload};
    default:
      return state;
  }
};

export default FocusReducer;
