import intialState from '../state/state';
import {ADD_NEW_ITEM} from '../action/Action'; 
export default function bugReducer(state=intialState.bug, action) {
    switch(action.type){
        case ADD_NEW_ITEM:
        state.bugsList.push(action.payload);
        return Object.assign({},state,{
            bugsList:[...state.bugsList]
        })
        

    };
    return state;
}