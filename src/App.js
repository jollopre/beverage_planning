import React, { Component } from 'react';
import Header from './components/header';
import Bars from './containers/bars';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      	<Header />
        <Bars />
      </div>
    );
  }
}

export default App;
