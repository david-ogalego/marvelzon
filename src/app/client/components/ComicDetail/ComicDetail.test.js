import React from 'react';
import renderer from 'react-test-renderer';
import ComicDetail from './ComicDetail';
import MarvelLogo from '../../images/MarvelLogo.png';

test('Snapshot ComicDetail rendered with comic', () => {
  const treeComicDetail = renderer.create(<ComicDetail
    title="X-Men"
    date="2029-12-31T00:00:00-0500"
    price="200"
    image={MarvelLogo}
    pageCount={10}
    description="Lorem Ipsum ha sido el texto de relleno estándar"
    url="http://marvel.com/comics/issue/2088/official_handbook_of_the_marvel_universe_2004_14_fantastic_four/fantastic_four?utm_campaign=apiRef&utm_source=d86beaee5f52cf5b1205630a7e35b24b"
  />).toJSON();
  expect(treeComicDetail).toMatchSnapshot();
});
