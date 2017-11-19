import * as types from '../actions/actionTypes';
import initialState from './initialState.js';

export default function comicReducer(state = initialState, action) {
    switch(action.type) {
            case types.RESET_COMIC:
                return Object.assign({}, state, {
                    comic: initialState.comic,
                    loadingComic: initialState.loadingComic,
                    hasErrorLoadingComic: false
                });
            case types.REQUEST_COMIC:
                return Object.assign({}, state, {
                    loadingComic: action.loadingComic,
                    hasErrorLoadingComic: false
                });
            case types.RECEIVE_COMIC:
                return Object.assign({}, state, {
                    comic: action.comic,
                    loadingComic: action.loadingComic
                });
            case types.ERROR_REQUEST_COMIC:
                return Object.assign({}, state, {
                    hasErrorLoadingComic: action.hasErrorLoadingComic,
                    errorStatus: action.errorStatus,
                    loadingComic: false
                });
            default:
                return state;
    }
}