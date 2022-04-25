import * as types from '../constant'
export function getListItem(payload){
    return({
        type: types.GET_ITEM_REQUEST,
        payload 
    }
    );
}