import axios from 'axios';

export const fetchQuote = () => {
    return dispatch => {
        dispatch({ type: "FETCH_QUOTE_START"})
        axios
            .get('https://sv443.net/jokeapi/category/Programming?blacklistFlags=religious')
            .then(res => {
                console.log(res.data.joke)
                dispatch({ type: "FETCH_QUOTE_SUCCESS", payload: res.data.joke});
            })
            .catch(err => console.log(err.response));
    }
}

export const updateTitle = newTitle => {
    return{}
}