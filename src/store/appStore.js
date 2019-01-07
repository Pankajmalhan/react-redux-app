
import {createStore, applyMiddleware,compose    } from 'redux';
import appReducers from '../reducers/bugReducer';
import INITIAL_STATE from '../state/state';
/*********** Create Logger   *******************/
const store = createStore(
    appReducers,
    INITIAL_STATE,
);
export default store;