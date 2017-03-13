require('babel-polyfill');

import * as actions from './actions/index';
import store from './store';

store.dispatch(actions.newGame());

store.dispatch(actions.addGuess(15));
store.dispatch(actions.addGuess(25));
store.dispatch(actions.addGuess(55));
store.dispatch(actions.addGuess(67));

console.log(store.getState());


store.dispatch(actions.newGame());
console.log(store.getState());
