import React from 'react';
import renderer from 'react-test-renderer';
import CreatorsList from './CreatorsList';

const creatorsList = [
  {
    name: 'David',
    role: 'writer',
  },
  {
    name: 'Pepe',
    role: 'penciller (cover)',
  },
];

test('Snapshot CreatorsList rendered empty', () => {
  const treeCreatorsListEmpty = renderer.create(<CreatorsList creators={[]} />).toJSON();
  expect(treeCreatorsListEmpty).toMatchSnapshot();
});

test('Snapshot CreatorsList rendered with creators', () => {
  const treeCreatorsList = renderer.create(<CreatorsList creators={creatorsList} />).toJSON();
  expect(treeCreatorsList).toMatchSnapshot();
});
