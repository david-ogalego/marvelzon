import React from 'react';
import { Provider } from 'react-redux';
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
