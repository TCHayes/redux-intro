require('babel-polyfill');

import * as actions from './actions/index';
import store from './store';

store.dispatch(actions.newGame());
console.log(store.getState());

store.dispatch(actions.addGuess(15));
console.log(store.getState());
