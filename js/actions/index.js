/*
Different responses for:
  Within 10: Hot
  Within 20: Warm
  Within 30: Neutral
  Within 40: Cool
  Else: Cold
*/

//random num generator
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guess => ({
  type: ADD_GUESS,
  guess
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME,
  number: getRandomIntInclusive(1, 100)
});
