import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Catalog, ComicDetailContainer, NavContainer } from './containers/';
import configureStore from './redux/store/configureStore';
import stylesApp from './App.css';

const store = configureStore();

const App = () => (
  <div className={stylesApp.app}>
    <Provider store={store} >
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
    </Provider>
  </div>
);

export default App;
