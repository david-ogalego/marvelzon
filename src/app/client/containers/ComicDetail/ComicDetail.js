import React from 'react';

const ComicDetail = function({ match }) {
    return (
        <h1>Detail {match.params.comicId}</h1>
        
    );
}

export default ComicDetail;