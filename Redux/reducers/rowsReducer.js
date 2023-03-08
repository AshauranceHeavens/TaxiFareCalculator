import {ADD_ROW, DELETE_ROW} from '../actions/types/types';

const initialState = [];

const RowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROW:
      return action.payload;
    case DELETE_ROW:
      return [];
    default:
      return state;
  }
};

export default RowsReducer;
