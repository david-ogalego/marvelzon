import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from './Nav';

test('Snapshot Nav rendered', () => {
  const navComp = (
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );
  const treeNav = renderer.create(navComp).toJSON();
  expect(treeNav).toMatchSnapshot();
});
