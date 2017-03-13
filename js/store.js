import { createStore } from 'redux';
import * as reducers from './reducers/index.js';

export default createStore(reducers.gameReducer);
