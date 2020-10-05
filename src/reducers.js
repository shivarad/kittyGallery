import {
    CHANGE_SEARCH_FIELD,
    REQUEST_KITTEN_PENDING,
    REQUEST_KITTEN_SUCCESS,
    REQUEST_KITTEN_FAILED
} from './constants';

const initialStateSearch={
    searchField:''
}

export const searchKittens=(state=initialStateSearch,action={})=>{
    switch (action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state,{searchField:action.payload});
        default:
            return state;
    }
}

const initialStateReq={
    isPending:false,
    cats:[],
    errorMessage:''
}
export const requestKittens=(state=initialStateReq,action={})=>{
    switch (action.type){

        case REQUEST_KITTEN_PENDING:
            return Object.assign({},state,{isPending:true});
        case REQUEST_KITTEN_SUCCESS:
            return Object.assign({},state,{isPending:false,cats:action.payload});
        case REQUEST_KITTEN_FAILED:
            return Object.assign({},state,{isPending:false,errorMessage:action.payload});
        default:
            return state;
    }

}