import * as types from './actionTypes';

export function createQuestion(question) {
  return {type: types.CREATE_QUESTION, question};

}
