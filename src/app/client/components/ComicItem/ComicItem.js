import React from 'react';
import { Link } from 'react-router-dom';
import stylesComicItem from './ComicItem.css';
import moment from 'moment';

const ComicItem = function(props) {
    const dateComic = moment(props.date).format("YYYY-MM-DD");
    return (
        <Link className={stylesComicItem.item} key={props.videoId} to={`/detail/${props.id}`} >
            <div className={stylesComicItem.containerImage} >
                <img className={stylesComicItem.image} alt={props.title} src={props.image} /> 
                <div className={stylesComicItem.containerDetails}>
                    <div className={`${stylesComicItem.detail} ${stylesComicItem.titleDetail}`}>{props.title}</div>
                    <div className={stylesComicItem.detail}>Date: {dateComic}</div>
                    <div className={stylesComicItem.detail}>Price: {props.price}</div>
                </div>
            </div>
        </Link>
    );
};

export default ComicItem;