import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { browserHistory } from 'react-router';


ReactDOM.render(<App history={browserHistory} />, document.getElementById('app'));
