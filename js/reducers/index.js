import * as actions from '../actions/index';

const initialGameState = {
  userGuess: [],
  guessCount: 0
};

export const gameReducer = (state=initialGameState, action) => {
  if (action.type === actions.NEW_GAME) {
    return {...state, number: action.number, userGuess: [], guessCount: 0};
  }

  else if (action.type === actions.ADD_GUESS) {
    return {...state, userGuess: [...state.userGuess, action.guess], guessCount: state.guessCount+1};
  }
  return state;
}
