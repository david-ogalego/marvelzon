import {
    RECEIVE_COMICS,
    RECEIVE_COMIC,
    REQUEST_COMICS,
    REQUEST_COMIC,
    RESET_COMIC
} from './actionTypes';

export const fetchComics = (limitComics) => {
    return (dispatch, getState) => {
        dispatch(requestComics(limitComics));
        return fetch(`https://gateway.marvel.com:443/v1/public/comics?format=comic&offset=0&limit=${limitComics}&orderBy=-onsaleDate&apikey=d86beaee5f52cf5b1205630a7e35b24b`)
            .then(response => response.json())
            .then(json => dispatch(receiveComics(json.data.results)))
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
    };
};

export const resetComic = () => {
    return {
        type: RESET_COMIC
    };
};

export const requestComics = (limitComics) => {
    return {
        type: REQUEST_COMICS,
        loadingCatalog: true,
        limitComics
    };
};

export const receiveComics = (comics) => {
    return {
        type: RECEIVE_COMICS,
        comics,
        loadingCatalog: false
    };
};

export const fetchComic = (id) => {
    return (dispatch, getState) => {
        dispatch(requestComic);
        return fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=d86beaee5f52cf5b1205630a7e35b24b`)
            .then(response => response.json())
            .then(json => dispatch(receiveComic(json.data.results)))
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
    };
}

export const requestComic = () => {
    return {
        type: REQUEST_COMIC,
        loadingComic: true
    };
};

export const receiveComic = (comic) => {
    return {
        type: RECEIVE_COMIC,
        comic: comic[0],
        loadingComic: false
    };
};

export const fetchMoreComics = (oldLimitComics) => {
    const newLimitComics = 20 + oldLimitComics;
    return (dispatch, getState) => {
        dispatch(fetchComics(newLimitComics));
    };
}
