import {ADD_PEOPLE, DELETE_PEOPLE} from '../actions/types/types';

const initialState = 0;

const PeopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PEOPLE:
      return action.payload;
    case DELETE_PEOPLE:
      return action.payload;
    default:
      return state;
  }
};

export default PeopleReducer;
