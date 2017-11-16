import React from 'react';

const ComicDetail = function(props) {
    return (
        <div className="comicDetail">
            <h1>{props.title}</h1>
            Date: <label>{props.date}</label>
            Price: <label>{props.price}</label>
            <img alt={props.title} src={props.image} />
        </div>
    );
}

export default ComicDetail;