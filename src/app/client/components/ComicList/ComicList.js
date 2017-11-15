import React from 'react';
import { ComicItem } from '../';

function getImageFromComic(comic) {
    return `${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`;
}

function getDateFromComic(comic) {
    return comic.dates.find((date) => {
        return date.type === 'onsaleDate';
    }).date;
}

function getPriceFromComic(comic) {
    return comic.prices.find((price) => {
        return price.type === 'printPrice';
    }).price;
}

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