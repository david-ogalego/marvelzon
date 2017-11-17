import React from 'react';
import { Link } from 'react-router-dom';
import stylesComicItem from './ComicItem.css';

const ComicItem = function(props) {
    return (
        <Link className={stylesComicItem.item} key={props.videoId} to={`/detail/${props.id}`} >
            <div className={stylesComicItem.containerImage} >
                <img className={stylesComicItem.image} alt={props.title} src={props.image} /> 
                <div className={stylesComicItem.details}>
                    <h3>{props.title}</h3>
                    Date: <label>{props.date}</label>
                    Price: <label>{props.price}</label>
                </div>
            </div>
        </Link>
    );
};

export default ComicItem;