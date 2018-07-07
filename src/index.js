import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'basscss/css/basscss.min.css';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('root')
);
registerServiceWorker();
