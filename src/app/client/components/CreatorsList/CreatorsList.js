import React from 'react';
import stylesCreatorList from './CreatorsList.css';

const CreatorsList = function(props) {
    return (
        <div className={stylesCreatorList.creatorsList}>
            <h3>Creators</h3>
            <ul>
                {props.creators.map((creator, index) => 
                    <li key={index}>
                        <span>Name: {creator.name}</span>
                        <span>Role: {creator.role}</span>
                    </li>
                )
            }
            </ul>
        </div>
    );
}

export default CreatorsList;