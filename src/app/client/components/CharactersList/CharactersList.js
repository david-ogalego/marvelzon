import React from 'react';
import stylesCharactersList from './CharactersList.css';

const CharactersList = function(props) {
    return (
        <div className={stylesCharactersList.charactersList}>
            <h3>Characters</h3>
            <ul>
                {props.characters.map((character, index) => 
                    <li key={index}>
                        {character.name}
                    </li>
                )
            }
            </ul>
        </div>
    );
}

export default CharactersList;