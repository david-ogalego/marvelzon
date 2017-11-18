import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Catalog, ComicDetailContainer, NavContainer } from './containers/';
import configureStore from './redux/store/configureStore';
import stylesApp from './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
		<div className={stylesApp.app}>
			<Provider store={store} >
				<BrowserRouter>
					<Switch>
						<Route exact path='/' render={() =>
							<div>
								<NavContainer />
								<Catalog />
							</div>
						}>
						</Route>
						<Route path='/detail/:comicId' render={(props) =>
							<div>
								<NavContainer />
								<ComicDetailContainer match={props.match}></ComicDetailContainer>
							</div>
						}></Route>
					</Switch>
				</BrowserRouter>
			</Provider>
		</div>
    );
  }
}

export default App;
