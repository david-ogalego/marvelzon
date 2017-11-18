import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComic } from '../../redux/actions';
import { ComicDetail, CreatorsList, CharactersList } from '../../components';
import {
    getDetailImageFromComic,
    getDateFromComic,
    getPriceFromComic,
    getCreatorsFromComic,
    getCharactersFromComic,
    getPageCountFromComic,
    getDescriptionFromComic,
    getUrlFromComic
} from '../../helpers/comic';
import styleComicDetail from './ComicDetailContainer.css';

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
        const hasCreators = !!creators.length;
        const characters = getCharactersFromComic(comic);
        const hasCharacters = !!characters.length;

        return (
            loadingComic ? 
            <div className={styleComicDetail.spinner}></div> :
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