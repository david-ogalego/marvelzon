import React from 'react';
import { ComicItem } from '../';
import { getImageFromComic, getDateFromComic, getPriceFromComic} from '../../helpers/comic';

const ComicList = function(props) {
    return (props.comicsList.length ?
        props.comicsList.map((comic, index) => 
            <ComicItem
                key={index}
                title={comic.title}
                id={comic.id}
                date={getDateFromComic(comic)}
                price={getPriceFromComic(comic)}
                image={getImageFromComic(comic)} />
        ) :
    '');
};

export default ComicList;