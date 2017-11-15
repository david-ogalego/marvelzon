import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComics } from '../../redux/actions';
import { ComicList } from '../../components';

class CatalogList extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchComics());
    }
    render() {
        const { 
            comicsList 
        } = this.props;

        return (
            <ComicList comicsList={comicsList} />
        );
    }
}

const mapStateToProps = state => {
    return {
        comicsList: state.catalogReducer.comics,
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