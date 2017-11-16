import React from 'react';

const CreatorsList = function(props) {
    return (
        <div className="creatorsList">
            <h3>Creators</h3>
            <ul>
                {props.creators.map((creator) => 
                    <li>
                        {creator.firstName} {creator.middleName} {creator.lastName} 
                    </li>
                )
            }
            </ul>
        </div>
    );
}

export default CreatorsList;