import { RECEIVE_COMICS } from './actionTypes';

export const fetchComics = (params) => {
    return (dispatch, getState) => {
        return fetch('https://gateway.marvel.com:443/v1/public/comics?format=comic&orderBy=onsaleDate&apikey=d86beaee5f52cf5b1205630a7e35b24b')
            .then(response => response.json())
            .then(json => dispatch(receiveComics(json.data.results)))
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
    };
};
export const receiveComics = (comics) => {
    return {
        type: RECEIVE_COMICS,
        comics
    };
};

