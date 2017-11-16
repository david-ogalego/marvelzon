import {combineReducers} from 'redux';
import catalogReducer from './catalogReducer';
import comicReducer from './comicReducer';

const rootReducer = combineReducers({
    catalogReducer,
    comicReducer
});

export default rootReducer;