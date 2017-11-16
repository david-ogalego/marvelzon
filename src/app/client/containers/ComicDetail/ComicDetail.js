import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComic } from '../../redux/actions';
import { ComicDetail, CreatorsList, CharactersList } from '../../components';
import {
    getImageFromComic,
    getDateFromComic,
    getPriceFromComic,
    getCreatorsFromComic,
    getCharactersFromComic
} from '../../helpers/comic';

class Comic extends Component {
    componentDidMount() {
        const { dispatch, match } = this.props;
        dispatch(fetchComic(match.params.comicId));
    }
    render() {
        const {
            comic,
            loadingComic
        } = this.props;
        const creators = getCreatorsFromComic(comic);
        const hasCreators = creators.length;
        const characters = getCharactersFromComic(comic);
        const hasCharacters = characters.length;

        return (
            loadingComic ? 'Loading comic' :
            <div>
                {comic && <ComicDetail
                    title={comic.title}
                    date={getDateFromComic(comic)}
                    price={getPriceFromComic(comic)}
                    image={getImageFromComic(comic)}
                />}
                {hasCreators && <CreatorsList creators={creators} />}
                {hasCharacters && <CreatorsList creators={creators} />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        comic: state.comicReducer.comic,
        loadingComic: state.comicReducer.loadingComic
    };
  };
  
const mapDispatchToProps = dispatch => {
    const boundActionCreators = bindActionCreators(fetchComic, dispatch);
    const allActionProps = {...boundActionCreators, dispatch};
    return allActionProps;
};

const ComicDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Comic);

export default ComicDetailContainer;