import React from 'react';
import PropTypes from 'prop-types';
import stylesCreatorList from './CreatorsList.css';

const CreatorsList = props => (
  <div className={stylesCreatorList.creatorsList}>
    <h3>Creators</h3>
    <ul>
      {props.creators.map((creator, index) =>
                (
                  <li key={index}>
                    <span>{creator.name} - {creator.role}</span>
                  </li>))
            }
    </ul>
  </div>
);

CreatorsList.propTypes = {
  creators: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
  })),
};

CreatorsList.defaultProps = {
  creators: [],
};

export default CreatorsList;
