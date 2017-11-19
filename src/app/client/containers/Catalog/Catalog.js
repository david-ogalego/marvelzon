import React, { Component } from 'react';
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
            loadingCatalog
        } = this.props;

        return (
            <ComicList showLoading={loadingCatalog} comicsList={comicsList} onLoadMore={() => this.onLoadMore()}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        limitComics: state.catalogReducer.limitComics,
        offsetComics: state.catalogReducer.offsetComics,
        comicsList: state.catalogReducer.comics,
        loadingCatalog: state.catalogReducer.loadingCatalog,
    };
  };
  
const mapDispatchToProps = dispatch => {
    const boundActionCreators = bindActionCreators(fetchComics, dispatch);
    const allActionProps = {...boundActionCreators, dispatch};
    return allActionProps;
};

const Catalog = connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogList);

export default Catalog;