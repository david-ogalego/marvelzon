import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Catalog, ComicDetail } from '../containers/';

export default function routes(store) {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' render={() =>
                <Catalog />}>
            </Route>
            <Route path='/detail/:comicId' component={ComicDetail} >
            </Route>
        </Switch>
    </BrowserRouter>
  );
}
