import * as types from '../actions/actionTypes';

export default function contactReducer(state = [], action) {
  switch (action.type){
    case types.CREATE_QUESTION:
      return [...state,
      Object.assign({}, action.question)
      ];

    default:
      return state;
  }
}
