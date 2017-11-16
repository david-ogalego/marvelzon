import * as types from '../actions/actionTypes';
import initialState from './initialState.js';

export default function comicReducer(state = initialState, action) {
    switch(action.type) {
            case types.RESET_COMIC:
                return Object.assign({}, state, {
                    comic: initialState.comic,
                    loadingComic: initialState.loadingComic
                });
            case types.REQUEST_COMIC:
                return Object.assign({}, state, {
                    loadingComic: action.loadingComic
                });
            case types.RECEIVE_COMIC:
                return Object.assign({}, state, {
                    comic: action.comic,
                    loadingComic: action.loadingComic
                });
            default:
                return state;
    }
}