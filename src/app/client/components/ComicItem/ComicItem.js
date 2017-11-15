import React from 'react';
import { Link } from 'react-router-dom';

const ComicItem = function(props) {
    return (
        <Link key={props.videoId} to={`/detail/${props.id}`} >
            <h3>{props.title}</h3>
            Date: <label>{props.date}</label>
            Price: <label>{props.price}</label>
            <img alt={props.title} src={props.image} />
        </Link>
    );
};

export default ComicItem;