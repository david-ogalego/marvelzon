import React from 'react';
import { Provider } from 'react-redux';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Catalog, ComicDetailContainer, NavContainer } from './containers/';
import routes from './routes';
import configureStore from './redux/store/configureStore';
import stylesApp from './App.css';

const store = configureStore();

const App = () => (
  <div className={stylesApp.app}>
    <Provider store={store} >
      {routes()}
    </Provider>
  </div>
);

export default App;
