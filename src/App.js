import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import Header from './components/header';
import Bars from './containers/bars';
import Bar from './containers/bar';
import Rounds from './containers/rounds';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      	<Header />
      	<Router>
	        <Switch>
	        	<Route exact path="/bars" component={Bars} />
	        	<Route exact path="/bars/:barId" component={Bar} />
	        	<Route exact path="/rounds" component={Rounds} />
	        	<Redirect from="/" to="/bars" />
	        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
