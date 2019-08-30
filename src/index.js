import React from 'react';
import ReactDOM from 'react-dom';

// Polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// App Parts
import App from './App';

if ( process.env.NODE_ENV === 'development' ) {
	console.log( '%cApp started in development mode', 'color: green;' );
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);