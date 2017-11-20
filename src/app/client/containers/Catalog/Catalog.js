import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComics, resetComic, fetchMoreComics } from '../../redux/actions';
import { ComicList } from '../../components';

class CatalogList extends Component {
  componentDidMount() {
    const { dispatch, limitComics, offsetComics } = this.props;
    dispatch(resetComic());
    dispatch(fetchComics(limitComics, offsetComics));
  }
  onLoadMore() {
    const { dispatch, limitComics, offsetComics } = this.props;
    dispatch(fetchMoreComics(limitComics, offsetComics));
  }
  render() {
    const {
      comicsList,
      loadingCatalog,
    } = this.props;

    return (
      <ComicList
        showLoading={loadingCatalog}
        comicsList={comicsList}
        onLoadMore={() => this.onLoadMore()}
      />
    );
  }
}

const mapStateToProps = state => ({
  limitComics: state.catalogReducer.limitComics,
  offsetComics: state.catalogReducer.offsetComics,
  comicsList: state.catalogReducer.comics,
  loadingCatalog: state.catalogReducer.loadingCatalog,
});

const mapDispatchToProps = (dispatch) => {
  const boundActionCreators = bindActionCreators(fetchComics, dispatch);
  const allActionProps = { ...boundActionCreators, dispatch };
  return allActionProps;
};

const Catalog = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CatalogList);

CatalogList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  limitComics: PropTypes.number,
  offsetComics: PropTypes.number,
  comicsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    price: PropTypes.number,
  })),
  loadingCatalog: PropTypes.bool,
};

CatalogList.defaultProps = {
  limitComics: 20,
  offsetComics: 0,
  comicsList: [],
  loadingCatalog: false,
};

export default Catalog;
