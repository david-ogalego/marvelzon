import React from 'react';
import { ComicItem } from '../';
import { getImageFromComic, getDateFromComic, getPriceFromComic} from '../../helpers/comic';
import loadMoreIcon from '../../images/loadMore.png';
import stylesComicList from './ComicList.css';

const ComicList = function(props) {
    return (
        <div>
            {props.showLoading && <div className={stylesComicList.spinner}></div>}
            {!!props.comicsList.length &&
                <div className={stylesComicList.list}>
                    {props.comicsList.map((comic, index) => 
                        <ComicItem
                            key={index}
                            title={comic.title}
                            id={comic.id}
                            date={getDateFromComic(comic)}
                            price={getPriceFromComic(comic)}
                            image={getImageFromComic(comic)} />
                    )}
                    <div className={stylesComicList.containerLoadMore} onClick={() => {
                        if (props.onLoadMore) {
                            props.onLoadMore();
                        }
                    }}>
                        <img className={stylesComicList.loadMore} alt="Load more" src={loadMoreIcon}/>
                    </div>
                </div>
            }
        </div>
    )
    
};

export default ComicList;