import React from 'react';
import CharactersList from './CharactersList';
import renderer from 'react-test-renderer';

const charactersList = [
    {
        name: 'David'
    },
    {
        name: 'Pepe'
    }
];

test('Snapshot CharactersList rendered empty', () => {
    const treeCharactersListEmpty = renderer.create(<CharactersList characters={[]} />).toJSON();
    expect(treeCharactersListEmpty).toMatchSnapshot();
});

test('Snapshot CharactersList rendered with characters', () => {
    const treeCharactersList = renderer.create(<CharactersList characters={charactersList} />).toJSON();
    expect(treeCharactersList).toMatchSnapshot();
});