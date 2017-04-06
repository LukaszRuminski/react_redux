import * as types from './actionTypes';

export function createToggled(toggled) {
  return {type: types.CREATE_TOGGLED, toggled};

}
