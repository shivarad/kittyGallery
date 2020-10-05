import {
    CHANGE_SEARCH_FIELD,
    REQUEST_KITTEN_PENDING,
    REQUEST_KITTEN_SUCCESS,
    REQUEST_KITTEN_FAILED
} from './constants';

export const setSearchField=(text)=>(
    {
        type:CHANGE_SEARCH_FIELD,
        payload:text
    }
)

export const requestKittens=()=>(dispatch)=>{   //higher order func :a func that return another func
    dispatch({type:REQUEST_KITTEN_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data=>dispatch({type:REQUEST_KITTEN_SUCCESS,payload:data}))
    .catch(error=>dispatch({type:REQUEST_KITTEN_FAILED,payload:error}))

}