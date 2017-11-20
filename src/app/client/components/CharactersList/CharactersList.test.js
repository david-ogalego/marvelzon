import React from 'react';
import renderer from 'react-test-renderer';
import CharactersList from './CharactersList';

const charactersList = [
  {
    name: 'David',
  },
  {
    name: 'Pepe',
  },
];

test('Snapshot CharactersList rendered empty', () => {
  const treeCharactersListEmpty = renderer.create(<CharactersList characters={[]} />).toJSON();
  expect(treeCharactersListEmpty).toMatchSnapshot();
});

test('Snapshot CharactersList rendered with characters', () => {
  const CharactersListComp = <CharactersList characters={charactersList} />;
  const treeCharactersList = renderer.create(CharactersListComp).toJSON();
  expect(treeCharactersList).toMatchSnapshot();
});
