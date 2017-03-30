export default function contactReducer(state = [], action) {
  switch (action.type){
    case 'CREAT_QUESTION':
      return [...state,
      Object.assign({}, action.question)
      ];

    default:
      return state;
  }
}
