import React from 'react';
import PropTypes from 'prop-types';
import stylesCharactersList from './CharactersList.css';

const CharactersList = props => (
  <div className={stylesCharactersList.charactersList}>
    <h3>Characters</h3>
    <ul>
      {props.characters.map((character, index) =>
          (<li key={index}>{character.name}</li>))
        }
    </ul>
  </div>
);

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
};

CharactersList.defaultProps = {
  characters: [],
};

export default CharactersList;
