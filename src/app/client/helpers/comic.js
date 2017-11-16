
export function getImageFromComic(comic) {
    return `${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`;
}

export function getDateFromComic(comic) {
    const onSaleDateType = comic.dates.find((date) => {
        return date.type === 'onsaleDate';
    });
    return onSaleDateType ? onSaleDateType.date : '';
}

export function getPriceFromComic(comic) {
    const printPriceType = comic.prices.find((price) => {
        return price.type === 'printPrice';
    });
    return printPriceType ? printPriceType.price : '';
}

export function getCreatorsFromComic(comic) {
    return comic.creators.items;
}

export function getCharactersFromComic(comic) {
    return comic.characters.items;
}