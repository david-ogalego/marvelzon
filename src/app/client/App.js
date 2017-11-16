import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Catalog, ComicDetail } from './containers/';
import configureStore from './redux/store/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
		<div className="App">
			<Provider store={store} >
				<BrowserRouter>
					<Switch>
						<Route exact path='/' render={() =>
							<Catalog />
						}>
						</Route>
						<Route path='/detail/:comicId' component={ComicDetail}></Route>
					</Switch>
				</BrowserRouter>
			</Provider>
		</div>
    );
  }
}

export default App;
