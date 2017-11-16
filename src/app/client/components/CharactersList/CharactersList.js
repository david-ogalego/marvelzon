import React from 'react';

const CharactersList = function(props) {
    return (
        <div className="characterList">
            <h3>Characters</h3>
            <ul>
                {props.characters.map((character) => 
                    <li>
                        Name: {character.name}
                        Description: {character.description}
                    </li>
                )
            }
            </ul>
        </div>
    );
}

export default CharactersList;