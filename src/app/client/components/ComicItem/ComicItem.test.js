import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ComicItem from './ComicItem';
import MarvelLogo from '../../images/MarvelLogo.png';

test('Snapshot ComicDetail rendered with comic', () => {
    const treeComicDetail = renderer.create(
        <MemoryRouter>
            <ComicItem
                id={0}
                title={'X-Men'}
                date={'2029-12-31T00:00:00-0500'}
                price={200}
                image={MarvelLogo}
                pageCount={10}
                description={'Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'}
                url={'http://marvel.com/comics/issue/2088/official_handbook_of_the_marvel_universe_2004_14_fantastic_four/fantastic_four?utm_campaign=apiRef&utm_source=d86beaee5f52cf5b1205630a7e35b24b'} />
        </MemoryRouter>        
        ).toJSON();
    expect(treeComicDetail).toMatchSnapshot();
});

test('Snapshot ComicDetail rendered with comic and without price', () => {
    const treeComicDetail = renderer.create(
        <MemoryRouter>
            <ComicItem
                id={0}
                title={'X-Men'}
                date={'2029-12-31T00:00:00-0500'}
                price={0}
                image={MarvelLogo}
                pageCount={10}
                description={'Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'}
                url={'http://marvel.com/comics/issue/2088/official_handbook_of_the_marvel_universe_2004_14_fantastic_four/fantastic_four?utm_campaign=apiRef&utm_source=d86beaee5f52cf5b1205630a7e35b24b'} />
        </MemoryRouter>        
        ).toJSON();
    expect(treeComicDetail).toMatchSnapshot();
});