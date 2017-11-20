import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Catalog, ComicDetailContainer, NavContainer } from '../containers/';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
window.scrollTo(0, 0);
return (
  <div>
    <NavContainer />
    <Catalog />
  </div>
);
}
}
        />
        <Route
          path="/detail/:comicId"
          render={(propsRender) => {
window.scrollTo(0, 0);
return (
  <div>
    <NavContainer />
    <ComicDetailContainer match={propsRender.match} />
  </div>
);
}
}
        />
      </Switch>
    </BrowserRouter>
  );
}
