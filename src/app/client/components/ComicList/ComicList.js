import React from 'react';
import { ComicItem } from '../';
import { getImageFromComic, getDateFromComic, getPriceFromComic} from '../../helpers/comic';
import stylesComicList from './ComicList.css';

const ComicList = function(props) {
    return (props.comicsList.length ?
        <div className={stylesComicList.list}>
            {props.comicsList.map((comic, index) => 
                <ComicItem
                    key={index}
                    title={comic.title}
                    id={comic.id}
                    date={getDateFromComic(comic)}
                    price={getPriceFromComic(comic)}
                    image={getImageFromComic(comic)} />
            )}
        </div>:
    '');
};

export default ComicList;