import React from 'react';
import { Link } from 'react-router-dom';
import stylesComicItem from './ComicItem.css';
import moment from 'moment';

const ComicItem = function(props) {
    const dateComic = moment(props.date).format("YYYY-MM-DD HH:mm:ss");
    return (
        <Link className={stylesComicItem.item} key={props.videoId} to={`/detail/${props.id}`} >
            <div className={stylesComicItem.containerImage} >
                <img className={stylesComicItem.image} alt={props.title} src={props.image} /> 
                <div className={stylesComicItem.details}>
                    <h3>{props.title}</h3>
                    Date: <label>{dateComic}</label>
                    Price: <label>{props.price}</label>
                </div>
            </div>
        </Link>
    );
};

export default ComicItem;