import {combineReducers} from 'redux';
import RowsReducer from './rowsReducer';
import PriceReducer from './priceReducer';
import AmountReducer from './amountReducer';
import PeopleReducer from './peopleReducer';
import FocusReducer from './focusReducer';

const rootReducer = combineReducers({
  rows: RowsReducer,
  price: PriceReducer,
  amount: AmountReducer,
  people: PeopleReducer,
  focus: FocusReducer,
});

export default rootReducer;
