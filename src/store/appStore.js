
import {createStore, applyMiddleware,compose,combineReducers    } from 'redux';
import appReducers from '../reducers/bugReducer';
import rootReducer from '../reducers/rootReducer';
import INITIAL_STATE from '../state/state';

import { bindActionCreators } from "redux";

let combineReducer_= combineReducers({
    bug:appReducers,
    global:rootReducer,
});
/*********** Create Logger   *******************/
const store = createStore(
    combineReducer_,
);
export default store;