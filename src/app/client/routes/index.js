import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Catalog, ComicDetail } from '../containers/';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            <Catalog />}
        />
        <Route path="/detail/:comicId" component={ComicDetail}  />
      </Switch>
    </BrowserRouter>
  );
}
