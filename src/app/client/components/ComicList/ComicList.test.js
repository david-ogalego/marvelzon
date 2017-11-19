import React from 'react';
import renderer from 'react-test-renderer';
import ComicList from './ComicList';
import { MemoryRouter } from 'react-router-dom';

const comicList = [
    {
        id: 0,
        title: 'X-Men',
        dates: [
            {
                date: '2029-12-31T00:00:00-0500',
                type: 'onsaleDate'
            }
        ],
        prices: [
            {
                price: 3.99,
                type: 'printPrice'
            }
        ],
        thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/90/4bc6353e5fc56",
            extension: "jpg"
        },
        pageCount: 10,
        description: 'Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos',
        url: 'http://marvel.com/comics/issue/2088/official_handbook_of_the_marvel_universe_2004_14_fantastic_four/fantastic_four?utm_campaign=apiRef&utm_source=d86beaee5f52cf5b1205630a7e35b24b'
    },
    {
        id: 1,
        title: 'X-Men-2',
        dates: [
            {
                date: '2018-12-31T00:00:00-0500',
                type: 'onsaleDate'
            }
        ],
        prices: [
            {
                price: 100,
                type: 'printPrice'
            }
        ],
        thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/90/4bcsjnfsnf",
            extension: "jpg"
        },
        pageCount: 100,
        description: 'El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí".',
        url: 'http://marvel.com/comics/issue/2088/official_handbook_of_the_marvel_universe_2004_14_fantastic_four/fantastic_four?utm_campaign=apiRef&utm_source=d86beaee5f52cf5b1205630a7e35b24b'
    }
];

test('Snapshot ComicList rendered loading', () => {
    const treeComicList = renderer.create(
            <MemoryRouter>
                <ComicList showLoading={true} comicsList={[]} />
            </MemoryRouter>
        ).toJSON();
    expect(treeComicList).toMatchSnapshot();
});

test('Snapshot ComicList rendered with comic list', () => {
    const treeComicList = renderer.create(
        <MemoryRouter>
            <ComicList showLoading={true} comicsList={comicList} />
        </MemoryRouter>
        ).toJSON();
    expect(treeComicList).toMatchSnapshot();
});
