import * as types from '../actions/actionTypes';

export default function menuReducer(state = [], action) {
  switch (action.type){
    case types.CREATE_TOGGLED:
      return [...state,
      Object.assign({}, action.toggled)
      ];

    default:
      return state;
  }
}
