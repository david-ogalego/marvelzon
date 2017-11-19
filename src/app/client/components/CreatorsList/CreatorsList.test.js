import React from 'react';
import CreatorsList from './CreatorsList';
import renderer from 'react-test-renderer';

const creatorsList = [
    {
        name: 'David',
        role: 'writer'
    },
    {
        name: 'Pepe',
        role: 'penciller (cover)'
    }
];

test('Snapshot CreatorsList rendered empty', () => {
    const treeCreatorsListEmpty = renderer.create(<CreatorsList creators={[]} />).toJSON();
    expect(treeCreatorsListEmpty).toMatchSnapshot();
});

test('Snapshot CreatorsList rendered with creators', () => {
    const treeCreatorsList = renderer.create(<CreatorsList creators={creatorsList} />).toJSON();
    expect(treeCreatorsList).toMatchSnapshot();
});