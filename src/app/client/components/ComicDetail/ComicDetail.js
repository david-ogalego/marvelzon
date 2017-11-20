import React from 'react';
import PropTypes from 'prop-types';
import stylesComicDetail from './ComicDetail.css';
import getDateFormated from '../../helpers/date';

const ComicDetail = props => (
  <div className={stylesComicDetail.containerComicDetail}>
    <h1>{props.title}</h1>
    <div className={stylesComicDetail.containerBasicDetail}>
      <div className={stylesComicDetail.imageContainer}>
        <img alt={props.title} src={props.image} />
      </div>
      <div className={stylesComicDetail.detailsContainer}>
        <span>{props.description}</span>
        <span>Date: {getDateFormated(props.date)}</span>
        {!!props.price && <span>Price: {props.price}</span>}
        <span>Number pages: {props.pageCount}</span>
        <a href={props.url} target="_blank" >Detail</a>
      </div>
    </div>
  </div>
);

ComicDetail.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.string.isRequired,
  price: PropTypes.number,
  pageCount: PropTypes.number,
  url: PropTypes.string.isRequired,
};

ComicDetail.defaultProps = {
  description: '',
  price: 0,
  pageCount: 0,
};

export default ComicDetail;
