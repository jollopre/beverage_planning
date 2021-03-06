import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import { initialState } from './reducers/initialState';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(
	rootReducer,
	initialState
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
// registerServiceWorker();
