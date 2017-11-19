import React from 'react';
import renderer from 'react-test-renderer';
import Nav from './Nav';
import { MemoryRouter } from 'react-router-dom';

test('Snapshot Nav rendered', () => {
    const treeNav = renderer.create(
            <MemoryRouter>
                <Nav />
            </MemoryRouter>
        ).toJSON();
    expect(treeNav).toMatchSnapshot();
});