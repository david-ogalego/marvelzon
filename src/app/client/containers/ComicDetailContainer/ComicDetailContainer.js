import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComic, resetComicList } from '../../redux/actions';
import { ComicDetail, CreatorsList, CharactersList } from '../../components';
import {
  getDetailImageFromComic,
  getDateFromComic,
  getPriceFromComic,
  getCreatorsFromComic,
  getCharactersFromComic,
  getPageCountFromComic,
  getDescriptionFromComic,
  getUrlFromComic,
} from '../../helpers/comic';
import styleComicDetail from './ComicDetailContainer.css';

class Comic extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(resetComicList());
    dispatch(fetchComic(match.params.comicId));
  }
  render() {
    const {
      comic,
      loadingComic,
      hasErrorLoadingComic,
      errorStatus,
    } = this.props;
    const creators = getCreatorsFromComic(comic);
    const hasCreators = !!creators.length;
    const characters = getCharactersFromComic(comic);
    const hasCharacters = !!characters.length;

    return (
    // eslint-disable-next-line no-nested-ternary
      loadingComic ?
        <div className={styleComicDetail.spinner} /> :
        hasErrorLoadingComic ?
          <div className={styleComicDetail.container}>
            <span className={styleComicDetail.containerError}>{errorStatus}</span>
          </div> :
          <div className={styleComicDetail.container}>
            <div className={styleComicDetail.containerDetail}>
              {comic && <ComicDetail
                title={comic.title}
                date={getDateFromComic(comic)}
                price={getPriceFromComic(comic)}
                image={getDetailImageFromComic(comic)}
                pageCount={getPageCountFromComic(comic)}
                description={getDescriptionFromComic(comic)}
                url={getUrlFromComic(comic)}
              />}
            </div>
            <div className={styleComicDetail.containerLists}>
              {hasCreators && <CreatorsList creators={creators} />}
              {hasCharacters && <CharactersList characters={characters} />}
            </div>
          </div>
    );
  }
}

const mapStateToProps = state => ({
  comic: state.comicReducer.comic,
  loadingComic: state.comicReducer.loadingComic,
  hasErrorLoadingComic: state.comicReducer.hasErrorLoadingComic,
  errorStatus: state.comicReducer.errorStatus,
});

const mapDispatchToProps = (dispatch) => {
  const boundActionCreators = bindActionCreators(fetchComic, dispatch);
  const allActionProps = { ...boundActionCreators, dispatch };
  return allActionProps;
};

const ComicDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comic);

Comic.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      comicId: PropTypes.number,
    }),
  }).isRequired,
  comic: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    price: PropTypes.number,
  }),
  loadingComic: PropTypes.bool,
  hasErrorLoadingComic: PropTypes.bool,
  errorStatus: PropTypes.string,
};

Comic.defaultProps = {
  loadingComic: false,
  comic: undefined,
  hasErrorLoadingComic: false,
  errorStatus: '',
};

export default ComicDetailContainer;
