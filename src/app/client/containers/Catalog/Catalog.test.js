import React from 'react';
import {Provider} from 'react-redux';
import { mount } from 'enzyme';
import Catalog from './Catalog';
import { createMockStore } from 'redux-test-utils';
import { RESET_COMIC, REQUEST_COMICS } from '../../redux/actions/actionTypes';

test('Catalog dispatch actions', () => {
    const state = {
        catalogReducer: {
            limitComics: 20,
            offsetComics: 0,
            comics: [],
            loadingCatalog: false,
        }
    };
    const store = createMockStore(state);
    mount(<Provider store={store}><Catalog /></Provider> )
    expect(store.isActionDispatched({
        type: RESET_COMIC
    })).toBe(true);
    // expect(store.isActionDispatched({
    //     type: REQUEST_COMICS,
    //     loadingCatalog: true,
    //     limitComics: 20,
    //     offsetComics: 0
    // })).toBe(true);
});
