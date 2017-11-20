import {
  RECEIVE_COMICS,
  RECEIVE_COMIC,
  REQUEST_COMICS,
  REQUEST_COMIC,
  RESET_COMIC,
  ERROR_REQUEST_COMIC,
  RECEIVE_MORE_COMICS,
  RESET_COMIC_LIST,
} from './actionTypes';

export const requestComics = (limitComics, offsetComics) => ({
  type: REQUEST_COMICS,
  loadingCatalog: true,
  limitComics,
  offsetComics,
});

export const receiveComics = comics => ({
  type: RECEIVE_COMICS,
  comics,
  loadingCatalog: false,
});

export const receiveMoreComics = comics => ({
  type: RECEIVE_MORE_COMICS,
  comics,
  loadingCatalog: false,
});

export const requestComic = () => ({
  type: REQUEST_COMIC,
  loadingComic: true,
});

export const receiveComic = comic => ({
  type: RECEIVE_COMIC,
  comic: comic[0],
  loadingComic: false,
});

export const errorRequestComic = errorStatus => ({
  type: ERROR_REQUEST_COMIC,
  hasErrorLoadingComic: true,
  errorStatus,
});


export const resetComicList = () => ({
  type: RESET_COMIC_LIST,
});

export const fetchComics = (limitComics, offsetComics, gettingMoreComics) => (dispatch) => {
  dispatch(requestComics(limitComics, offsetComics));
  return fetch(`https://gateway.marvel.com:443/v1/public/comics?format=comic&offset=${offsetComics}&limit=${limitComics}&orderBy=-onsaleDate&apikey=d86beaee5f52cf5b1205630a7e35b24b`)
    .then(response => response.json())
    .then((json) => {
      if (json.code === 200) {
        if (gettingMoreComics) {
          return dispatch(receiveMoreComics(json.data.results));
        }
        return dispatch(receiveComics(json.data.results));
      }
      throw json.status;
    })
    .catch((error) => {
      console.log(`There has been a problem with your fetch operation: ${error}`);
    });
};

export const fetchMoreComics = (oldLimitComics, oldOffsetComics) => {
  const newLimitComics = oldLimitComics;
  const newOffsetComics = 20 + oldOffsetComics;
  return (dispatch) => {
    dispatch(fetchComics(newLimitComics, newOffsetComics, true));
  };
};

export const resetComic = () => ({
  type: RESET_COMIC,
});

export const fetchComic = id => (dispatch) => {
  dispatch(requestComic);
  return fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=d86beaee5f52cf5b1205630a7e35b24b`)
    .then(response => response.json())
    .then((json) => {
      if (json.code === 200) {
        return dispatch(receiveComic(json.data.results));
      }
      throw json.status;
    })
    .catch((error) => {
      console.log(`There has been a problem with your fetch operation: ${error}`);
      dispatch(errorRequestComic(error));
    });
};

