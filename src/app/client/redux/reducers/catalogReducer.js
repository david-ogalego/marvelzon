import * as types from '../actions/actionTypes';
import initialState from './initialState.js';

export default function catalogReducer(state = initialState, action) {
    switch(action.type) {
        case types.REQUEST_COMICS:
            return Object.assign({}, state, {
                loadingCatalog: action.loadingCatalog
            });
        case types.RECEIVE_COMICS:
            return Object.assign({}, state, {
                comics: action.comics,
                loadingCatalog: action.loadingCatalog
            });
        default:
            return state;
    }
}