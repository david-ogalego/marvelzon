import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getDateFormated from '../../helpers/date';
import stylesComicItem from './ComicItem.css';

const ComicItem = props => (
  <Link className={stylesComicItem.item} key={props.id} to={`/detail/${props.id}`} >
    <div className={stylesComicItem.containerImage} >
      <img className={stylesComicItem.image} alt={props.title} src={props.image} />
      <div className={stylesComicItem.containerDetails}>
        <div className={`${stylesComicItem.detail} ${stylesComicItem.titleDetail}`}>{props.title}</div>
        <div className={stylesComicItem.detail}>{getDateFormated(props.date)}</div>
        {!!props.price && <div className={stylesComicItem.detail}>Price: {props.price}</div>}
      </div>
    </div>
  </Link>
);

ComicItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.number,
};

ComicItem.defaultProps = {
  price: 0,
};

export default ComicItem;
