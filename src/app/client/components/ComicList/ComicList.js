import React from 'react';
import PropTypes from 'prop-types';
import { ComicItem } from '../';
import { getImageFromComic, getDateFromComic, getPriceFromComic } from '../../helpers/comic';
import loadMoreIcon from '../../images/loadMore.png';
import stylesComicList from './ComicList.css';

const ComicList = props => (
  <div>
    {props.showLoading && <div className={stylesComicList.spinner} />}
    {!!props.comicsList.length &&
    <div className={stylesComicList.list}>
      {props.comicsList.map((comic, index) =>
                      (<ComicItem
                        key={index}
                        title={comic.title}
                        id={comic.id}
                        date={getDateFromComic(comic)}
                        price={getPriceFromComic(comic)}
                        image={getImageFromComic(comic)}
                      />))}
      <button
        onKeyUp={() => {}}
        className={stylesComicList.containerLoadMore}
        onClick={() => {
                        if (props.onLoadMore) {
                            props.onLoadMore();
                        }
                    }}
      >
        <img className={stylesComicList.loadMore} alt="Load more" src={loadMoreIcon} />
      </button>
    </div>
            }
  </div>
);

ComicList.propTypes = {
  showLoading: PropTypes.bool,
  comicsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    price: PropTypes.number,
  })),
  onLoadMore: PropTypes.func,
};

ComicList.defaultProps = {
  showLoading: false,
  comicsList: [],
  onLoadMore: () => {},
};

export default ComicList;
