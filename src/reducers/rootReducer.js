import intialState from '../state/state';
export default function rootReducer(state=intialState.generalInfo, action) {
    switch(action.type){
        case 'Load_Category':
                return 100
    };
    return state;
}