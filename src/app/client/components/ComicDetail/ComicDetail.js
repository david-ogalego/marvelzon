import React from 'react';
import stylesComicDetail from './ComicDetail.css';

const ComicDetail = function(props) {
    return (
        <div className={stylesComicDetail.containerComicDetail}>
            <h1>{props.title}</h1>
            <img alt={props.title} src={props.image} />
            <label>Date: {props.date}</label>
            <label>Price: {props.price}</label>
            <label>Number pages: {props.pageCount}</label>
        </div>
    );
}

export default ComicDetail;