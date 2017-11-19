import {
    RECEIVE_COMICS,
    RECEIVE_COMIC,
    REQUEST_COMICS,
    REQUEST_COMIC,
    RESET_COMIC,
    ERROR_REQUEST_COMIC
} from './actionTypes';

export const fetchComics = (limitComics, offsetComics) => {
    return (dispatch, getState) => {
        dispatch(requestComics(limitComics, offsetComics));
        return fetch(`https://gateway.marvel.com:443/v1/public/comics?format=comic&offset=${offsetComics}&limit=${limitComics}&orderBy=-onsaleDate&apikey=d86beaee5f52cf5b1205630a7e35b24b`)
            .then(response => response.json())
            .then(json => {
                if (json.code === 200) {
                    return dispatch(receiveComics(json.data.results))
                }
                throw json.status;
            })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error);
            });
    };
};

export const resetComic = () => {
    return {
        type: RESET_COMIC
    };
};

export const requestComics = (limitComics, offsetComics) => {
    return {
        type: REQUEST_COMICS,
        loadingCatalog: true,
        limitComics,
        offsetComics
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
            .then(json => { if (json.code === 200) {
                return dispatch(receiveComic(json.data.results));
            }
            throw json.status;
            })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error);
                dispatch(errorRequestComic(error));
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

export const errorRequestComic = (errorStatus) => {
    return {
        type: ERROR_REQUEST_COMIC,
        hasErrorLoadingComic: true,
        errorStatus
    };
}

export const fetchMoreComics = (oldLimitComics, oldOffsetComics) => {
    const newLimitComics = oldLimitComics;
    const newOffsetComics = 20 + oldOffsetComics;
    return (dispatch, getState) => {
        dispatch(fetchComics(newLimitComics, newOffsetComics));
    };
}
