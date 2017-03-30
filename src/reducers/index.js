import {combineReducers} from 'redux';
import questions from './contactReducer';
const rootReducer = combineReducers({
  questions
});

export default rootReducer;
