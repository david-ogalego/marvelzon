import React from 'react';
import stylesComicDetail from './ComicDetail.css';
import { getDateFormated } from '../../helpers/date';

const ComicDetail = function(props) {
    return (
        <div className={stylesComicDetail.containerComicDetail}>
            <h1>{props.title}</h1>
            <div className={stylesComicDetail.containerBasicDetail}>
                <div className={stylesComicDetail.imageContainer}>
                    <img alt={props.title} src={props.image} />
                </div>
                <div className={stylesComicDetail.detailsContainer}>
                    <label>{props.description}</label>
                    <label>Date: {getDateFormated(props.date)}</label>
                    <label>Price: {props.price}</label>
                    <label>Number pages: {props.pageCount}</label>
                    <a href={props.url} target="_blank" >Detail</a>
                </div>
            </div>
        </div>
    );
}

export default ComicDetail;