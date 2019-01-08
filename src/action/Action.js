export const ADD_NEW_ITEM='ADD_NEW_ITEM';


export function addNewBug(data){
    return {
        type:ADD_NEW_ITEM,
        payload:data
    }
}