import axios from 'axios'

//Constanst
let initialData = {
    fetching: false,
    array:[],
    current: {}
}

let URL = "https://rickandmortyapi.com/api/character"

let GET_CHARACTERS = "GET_CHARACTERS"
let GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS"
let GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR"

//Reducer
export default function reducer(state = initialData, action){
    switch(action.type){
        case GET_CHARACTERS:
        break;
        case GET_CHARACTERS_SUCCESS:
            return {...state, array:action.payload}
        case GET_CHARACTERS_ERROR:
        break;
        default:
            return state
    }
}

//Actions (Creators) (Thunk) (Promises: componentwillmount, etc)

export let getCharactersAction = () => (dispatch, getState) => {
    return axios.get(URL)
    .then(res =>{
        dispatch({
            type:GET_CHARACTERS_SUCCESS,
            payload: res.data.results
        })
    })
}