import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getPokemans = () => dispatch => {
    dispatch({type: FETCH_START});

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            dispatch({type: FETCH_FAIL, payload: err})
        })
}


// export const fetchStart = () => {
//     return({ type: FETCH_START });
// };

// export const fetchSuccess = (data) => {
//     return({ type: FETCH_SUCCESS, payload: data });
// };

// export const fetchFail = (error) => {
//     return({ type: FETCH_FAIL, payload: error });
// };