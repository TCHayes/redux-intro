import * as actions from '../actions/index';

const initialGameState = {};

export const gameReducer = (state=initialGameState, action) => {
  if (action.type === actions.NEW_GAME) {
    return {...state, {
        number: action.number
    }}
  }
  else if (action.type === actions.ADD_GUESS) {
    return {...state, {
      guess: action.guess
    }}
  }
  return state;
}


gameReducer(state, newGame())
