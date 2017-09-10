import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import Header from './components/header';
import Bars from './containers/bars';
import BarContainer from './containers/barContainer';
import RoundContainer from './containers/roundContainer';

class App extends Component {
  render() {
    return (
    	<Router>
    		<div>
		      	<Header />
		      	<div className="container-fluid">
					<Switch>
				       	<Route exact path="/bars/:barId([0-9]+)" component={BarContainer} />
				       	<Route exact path="/bars/:filterByName?" component={Bars} />
				        <Route exact path="/rounds/:roundId([0-9]+)" component={RoundContainer} />
				        <Redirect from="/" to="/bars" />
				    </Switch>
			    </div>
		    </div>
      	</Router>
    );
  }
}

export default App;
