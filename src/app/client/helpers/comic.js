
export function getImageFromComic(comic) {
  return `${comic.thumbnail.path.replace('http://', 'https://')}/portrait_incredible.${comic.thumbnail.extension}`;
}

export function getDetailImageFromComic(comic) {
  return `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
}

export function getDateFromComic(comic) {
  const onSaleDateType = comic.dates.find(date => date.type === 'onsaleDate');
  return onSaleDateType ? onSaleDateType.date : '';
}

export function getPriceFromComic(comic) {
  const printPriceType = comic.prices.find(price => price.type === 'printPrice');
  return printPriceType ? printPriceType.price : '';
}

export function getCreatorsFromComic(comic) {
  return comic.creators.items;
}

export function getCharactersFromComic(comic) {
  return comic.characters.items;
}

export function getPageCountFromComic(comic) {
  return comic.pageCount;
}

export function getDescriptionFromComic(comic) {
  return comic.description;
}

export function getUrlFromComic(comic) {
  const urlDetail = comic.urls.find(url => url.type === 'detail');
  return urlDetail ? urlDetail.url : '';
}
