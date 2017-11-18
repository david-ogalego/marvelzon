import React from 'react';
import stylesCharactersList from './CharactersList.css';

const CharactersList = function(props) {
    return (
        <div className={stylesCharactersList.characterList}>
            <h3>Characters</h3>
            <ul>
                {props.characters.map((character, index) => 
                    <li key={index}>
                        Name: {character.name}
                    </li>
                )
            }
            </ul>
        </div>
    );
}

export default CharactersList;