import {combineReducers} from 'redux';
import questions from './contactReducer';
import toggled from './menuReducer';
const rootReducer = combineReducers({
  questions,
  toggled
});

export default rootReducer;
