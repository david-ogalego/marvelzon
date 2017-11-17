import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComics, resetComic } from '../../redux/actions';
import { ComicList } from '../../components';
import catalogStyles from './Catalog.css';

class CatalogList extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(resetComic());
        dispatch(fetchComics());
    }
    render() {
        const { 
            comicsList,
            loadingCatalog
        } = this.props;

        return (
            loadingCatalog ?
            <div className={catalogStyles.spinner}></div> :
            <ComicList comicsList={comicsList} />
        );
    }
}

const mapStateToProps = state => {
    return {
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